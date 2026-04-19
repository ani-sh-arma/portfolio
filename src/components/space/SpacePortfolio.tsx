import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Html,
  OrbitControls,
  Sparkles,
  Stars,
  useCursor,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";
import {
  type CelestialSurface,
  defaultSelection,
  type SpaceNode,
  type SpaceSelection,
  spaceSystems,
  type Vec3,
} from "../../data/spaceWorldData";

const minOrbitDistance = 4.8;
const maxOrbitDistance = 68;
const defaultMap =
  "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_atmos_2048.jpg";
const defaultNormalMap =
  "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_normal_2048.jpg";
const defaultRoughnessMap =
  "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_specular_2048.jpg";

function useCelestialTextureSet(surface?: CelestialSurface) {
  const map = useTexture(surface?.map ?? defaultMap);
  const normalMap = useTexture(surface?.normalMap ?? defaultNormalMap);
  const roughnessMap = useTexture(surface?.roughnessMap ?? defaultRoughnessMap);
  const emissiveMap = useTexture(
    surface?.emissiveMap ?? surface?.map ?? defaultMap,
  );

  map.colorSpace = THREE.SRGBColorSpace;
  emissiveMap.colorSpace = THREE.SRGBColorSpace;

  [map, normalMap, roughnessMap, emissiveMap].forEach((texture) => {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.anisotropy = 4;
  });

  return { map, normalMap, roughnessMap, emissiveMap };
}

function CameraPilot({
  target,
  focusKey,
  reducedMotion,
}: {
  target: Vec3;
  focusKey: string;
  reducedMotion: boolean;
}) {
  const controlsRef = useRef<any>(null);
  const desiredPositionRef = useRef(new THREE.Vector3());
  const desiredTargetRef = useRef(new THREE.Vector3());
  const autoNavigatingRef = useRef(true);
  const offsetRef = useRef(new THREE.Vector3(10, 6, 10));

  useEffect(() => {
    const controls = controlsRef.current;
    if (!controls) {
      return;
    }

    const camera = controls.object as THREE.PerspectiveCamera;
    const currentOffset = new THREE.Vector3().subVectors(
      camera.position,
      controls.target,
    );

    if (currentOffset.lengthSq() < 0.0001) {
      currentOffset.copy(offsetRef.current);
    }

    const clampedDistance = THREE.MathUtils.clamp(
      currentOffset.length(),
      minOrbitDistance * 1.35,
      maxOrbitDistance * 0.72,
    );

    currentOffset.normalize().multiplyScalar(clampedDistance);
    offsetRef.current.copy(currentOffset);

    desiredTargetRef.current.set(...target);
    desiredPositionRef.current
      .copy(desiredTargetRef.current)
      .add(currentOffset);
    autoNavigatingRef.current = true;
  }, [focusKey, target]);

  useFrame(({ camera }) => {
    const controls = controlsRef.current;
    if (!controls) {
      return;
    }

    if (autoNavigatingRef.current) {
      const travelFactor = reducedMotion ? 0.13 : 0.082;
      camera.position.lerp(desiredPositionRef.current, travelFactor);
      controls.target.lerp(desiredTargetRef.current, travelFactor * 1.2);

      const cameraSettled =
        camera.position.distanceToSquared(desiredPositionRef.current) < 0.016;
      const targetSettled =
        controls.target.distanceToSquared(desiredTargetRef.current) < 0.012;

      if (cameraSettled && targetSettled) {
        autoNavigatingRef.current = false;
      }
    }

    const orbitOffset = new THREE.Vector3().subVectors(
      camera.position,
      controls.target,
    );
    const currentDistance = orbitOffset.length();
    const boundedDistance = THREE.MathUtils.clamp(
      currentDistance,
      minOrbitDistance,
      maxOrbitDistance,
    );

    if (Math.abs(currentDistance - boundedDistance) > 0.0005) {
      orbitOffset.setLength(boundedDistance);
      camera.position.copy(controls.target).add(orbitOffset);
    }

    controls.update();
  });

  return (
    <OrbitControls
      ref={controlsRef}
      makeDefault
      onStart={() => {
        autoNavigatingRef.current = false;
      }}
      enablePan={!reducedMotion}
      enableDamping
      dampingFactor={0.08}
      minDistance={minOrbitDistance}
      maxDistance={maxOrbitDistance}
      rotateSpeed={0.72}
      zoomSpeed={0.75}
    />
  );
}

function SystemMesh({
  system,
  active,
  showLabel,
  onSelect,
}: {
  system: (typeof spaceSystems)[number];
  active: boolean;
  showLabel: boolean;
  onSelect: (systemId: string) => void;
}) {
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);
  const textures = useCelestialTextureSet(system.surface);

  const glowColor = system.color;
  const scale = active ? 1.16 : 1;

  return (
    <group position={system.position}>
      <mesh
        scale={scale}
        onClick={() => onSelect(system.id)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[1.65, 42, 42]} />
        <meshStandardMaterial
          map={textures.map}
          normalMap={textures.normalMap}
          roughnessMap={textures.roughnessMap}
          emissiveMap={textures.emissiveMap}
          color={glowColor}
          emissive={glowColor}
          emissiveIntensity={system.surface?.emissiveIntensity ?? 0.95}
          roughness={system.surface?.roughness ?? 0.48}
          metalness={system.surface?.metalness ?? 0.08}
        />
      </mesh>

      {showLabel ? (
        <Html
          position={[0, 2.45, 0]}
          distanceFactor={11}
          center
          style={{ pointerEvents: "none" }}
        >
          <div className="space-label space-label-card space-label--system">
            <p>{system.name}</p>
          </div>
        </Html>
      ) : null}
    </group>
  );
}

function NodeMesh({
  node,
  active,
  showLabel,
  onSelect,
}: {
  node: SpaceNode;
  active: boolean;
  showLabel: boolean;
  onSelect: (nodeId: string) => void;
}) {
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);
  const textures = useCelestialTextureSet(node.surface);

  return (
    <group position={node.position}>
      <mesh
        scale={active ? 1.18 : 1}
        onClick={() => onSelect(node.id)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.48, 24, 24]} />
        <meshStandardMaterial
          map={textures.map}
          normalMap={textures.normalMap}
          roughnessMap={textures.roughnessMap}
          emissiveMap={textures.emissiveMap}
          color={node.color}
          emissive={node.color}
          emissiveIntensity={node.surface?.emissiveIntensity ?? 0.4}
          roughness={node.surface?.roughness ?? 0.72}
          metalness={node.surface?.metalness ?? 0.05}
        />
      </mesh>

      {active ? (
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.62, 0.84, 64]} />
          <meshBasicMaterial color={node.color} transparent opacity={0.7} />
        </mesh>
      ) : null}

      {showLabel ? (
        <Html
          position={[0, 0.92, 0]}
          distanceFactor={9.5}
          center
          style={{ pointerEvents: "none" }}
        >
          <div className="space-label space-label-card space-label--node">
            <p>{node.name}</p>
          </div>
        </Html>
      ) : null}
    </group>
  );
}

function UniverseScene({
  selection,
  onSelectSystem,
  onSelectNode,
  reducedMotion,
}: {
  selection: SpaceSelection;
  onSelectSystem: (systemId: string) => void;
  onSelectNode: (systemId: string, nodeId: string) => void;
  reducedMotion: boolean;
}) {
  const selectedSystem =
    spaceSystems.find((system) => system.id === selection.systemId) ??
    spaceSystems[0];
  const selectedNode = selection.nodeId
    ? selectedSystem.nodes.find((node) => node.id === selection.nodeId)
    : undefined;

  const focus: Vec3 = selectedNode?.position ?? selectedSystem.position;
  const focusKey = selection.nodeId
    ? `${selection.systemId}-${selection.nodeId}`
    : selection.systemId;

  return (
    <Canvas
      shadows
      camera={{ position: [0, 8, 30], fov: 52, near: 0.1, far: 280 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      dpr={[1, 1.8]}
    >
      <color attach="background" args={["#020510"]} />
      <fog attach="fog" args={["#020510", 24, 130]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[8, 12, 7]} intensity={0.9} color="#bde6ff" />
      <pointLight position={[-24, 14, -10]} intensity={2.1} color="#34d3ff" />

      <Stars
        radius={150}
        depth={90}
        count={6900}
        factor={4.8}
        saturation={0}
        fade
        speed={reducedMotion ? 0.05 : 0.24}
      />

      <Sparkles
        count={360}
        scale={[170, 110, 170]}
        size={2.3}
        speed={reducedMotion ? 0.08 : 0.22}
        opacity={0.9}
        noise={1.05}
        color="#dbeeff"
      />

      <Sparkles
        count={210}
        scale={[150, 95, 150]}
        size={3.8}
        speed={reducedMotion ? 0.05 : 0.14}
        opacity={0.48}
        noise={0.72}
        color="#9cd7ff"
      />

      {spaceSystems.map((system) => (
        <group key={system.id}>
          <SystemMesh
            system={system}
            active={selection.systemId === system.id && !selection.nodeId}
            showLabel={selection.systemId !== system.id}
            onSelect={onSelectSystem}
          />

          {system.nodes.map((node) => (
            <group key={node.id}>
              <NodeMesh
                node={node}
                active={
                  selection.systemId === system.id &&
                  selection.nodeId === node.id
                }
                showLabel={selection.systemId === system.id}
                onSelect={(nodeId) => onSelectNode(system.id, nodeId)}
              />
            </group>
          ))}
        </group>
      ))}

      <CameraPilot
        target={focus}
        focusKey={focusKey}
        reducedMotion={reducedMotion}
      />
    </Canvas>
  );
}

export function SpacePortfolio() {
  const reducedMotion = useReducedMotion();
  const [selection, setSelection] = useState<SpaceSelection>(defaultSelection);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  const selectedSystem =
    spaceSystems.find((system) => system.id === selection.systemId) ??
    spaceSystems[0];
  const selectedNode = selection.nodeId
    ? selectedSystem.nodes.find((node) => node.id === selection.nodeId)
    : undefined;

  const handleManualSelect = (nextSelection: SpaceSelection) => {
    setSelection(nextSelection);
  };

  return (
    <div className="space-shell">
      <div className="space-canvas">
        <UniverseScene
          selection={selection}
          onSelectSystem={(systemId) => handleManualSelect({ systemId })}
          onSelectNode={(systemId, nodeId) =>
            handleManualSelect({ systemId, nodeId })
          }
          reducedMotion={Boolean(reducedMotion)}
        />
      </div>

      <div className="hud-overlay">
        <button
          type="button"
          className={`sidebar-orb ${sidebarOpen ? "sidebar-orb--active" : ""}`}
          aria-label={
            sidebarOpen ? "Collapse system navigator" : "Open system navigator"
          }
          onClick={() => setSidebarOpen((current) => !current)}
        >
          SYS
        </button>

        <aside
          className={`system-navigator ${sidebarOpen ? "system-navigator--open" : "system-navigator--closed"}`}
        >
          <p className="hud-label">Star Systems</p>
          <div className="system-list">
            {spaceSystems.map((system) => (
              <button
                key={system.id}
                type="button"
                className={`system-item ${selection.systemId === system.id ? "system-item--active" : ""}`}
                onClick={() => {
                  handleManualSelect({ systemId: system.id });
                  setSidebarOpen(false);
                }}
              >
                <span>{system.name}</span>
                <small>{system.subtitle}</small>
              </button>
            ))}
          </div>
        </aside>

        <section className="data-inspector">
          <p className="hud-label">Telemetry</p>
          <AnimatePresence mode="wait">
            <motion.div
              key={
                selection.nodeId
                  ? `${selection.systemId}-${selection.nodeId}`
                  : selection.systemId
              }
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28 }}
              className="telemetry-card"
            >
              <h2>{selectedNode?.name ?? selectedSystem.name}</h2>
              <p className="telemetry-subtitle">
                {selectedNode
                  ? selectedNode.kind.toUpperCase()
                  : selectedSystem.subtitle.toUpperCase()}
              </p>
              <p className="telemetry-description">
                {selectedNode?.description ?? selectedSystem.description}
              </p>
              <ul className="telemetry-list">
                {(
                  selectedNode?.details ??
                  selectedSystem.nodes.map((node) => node.name)
                ).map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>

              {selectedNode?.link ? (
                <a
                  href={selectedNode.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="telemetry-link"
                >
                  Open Transmission
                </a>
              ) : null}
            </motion.div>
          </AnimatePresence>
        </section>

        <button
          type="button"
          className={`help-pill ${helpOpen ? "help-pill--active" : ""}`}
          onClick={() => setHelpOpen((current) => !current)}
        >
          Help
        </button>

        <AnimatePresence>
          {helpOpen ? (
            <motion.section
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="help-menu"
            >
              <p className="hud-label">Navigation Guide</p>
              <ul>
                <li>Left drag: orbit the camera around your current focus.</li>
                <li>Scroll wheel: zoom in and out within stable bounds.</li>
                <li>
                  Click stars or planets: jump focus directly to that object.
                </li>
                <li>Tap SYS orb: open star-system navigator sidebar.</li>
                <li>Tap Help again: close this control reference.</li>
              </ul>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
