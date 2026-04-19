import { contactInfo } from "./contactData";
import { experiences } from "./experienceData";
import { projects } from "./projectsData";
import { skillCategories, skills } from "./skillsData";
import { summaryInfo } from "./summaryData";

export type Vec3 = [number, number, number];

export interface SpaceNode {
  id: string;
  name: string;
  kind: "planet" | "moon" | "station" | "beacon";
  color: string;
  position: Vec3;
  description: string;
  details: string[];
  link?: string;
}

export interface SpaceSystem {
  id: string;
  name: string;
  subtitle: string;
  color: string;
  position: Vec3;
  description: string;
  nodes: SpaceNode[];
}

const createOrbitPosition = (
  center: Vec3,
  index: number,
  total: number,
  radius: number,
  lift = 1.6,
): Vec3 => {
  const angle = (index / total) * Math.PI * 2;
  const yWave = Math.sin(angle * 1.7) * lift;

  return [
    Number((center[0] + Math.cos(angle) * radius).toFixed(2)),
    Number((center[1] + yWave).toFixed(2)),
    Number((center[2] + Math.sin(angle) * radius).toFixed(2)),
  ];
};

const skillNodes: SpaceNode[] = skillCategories.map((category, index) => {
  const categorySkills = skills.filter((skill) => skill.category === category);
  const avgLevel =
    categorySkills.reduce((sum, skill) => sum + skill.level, 0) /
    Math.max(categorySkills.length, 1);

  return {
    id: `skill-${category.toLowerCase()}`,
    name: `${category} Cluster`,
    kind: "planet",
    color: "#5eead4",
    position: createOrbitPosition(
      [16, 4, -14],
      index,
      skillCategories.length,
      5.8,
      1.9,
    ),
    description: `${categorySkills.length} technologies mapped in this skill cluster.`,
    details: [
      `Average proficiency: ${avgLevel.toFixed(0)}%`,
      `Top tools: ${categorySkills
        .slice(0, 3)
        .map((skill) => skill.name)
        .join(", ")}`,
      `Category focus: ${category}`,
    ],
  };
});

const projectNodes: SpaceNode[] = projects.map((project, index) => ({
  id: `project-${project.name.toLowerCase().replace(/\s+/g, "-")}`,
  name: project.name,
  kind: "planet",
  color: "#60a5fa",
  position: createOrbitPosition([20, -2, 10], index, projects.length, 7.5, 2.1),
  description: project.description,
  details: [
    `Tech stack: ${project.tech.join(", ")}`,
    project.live !== "#"
      ? `Live mission: ${project.live}`
      : "Live mission: Private orbit",
    `Source repo: ${project.github}`,
  ],
  link: project.live !== "#" ? project.live : project.github,
}));

const experienceNodes: SpaceNode[] = experiences.map((experience, index) => ({
  id: `experience-${experience.company.toLowerCase().replace(/\s+/g, "-")}`,
  name: experience.company,
  kind: "station",
  color: "#fbbf24",
  position: createOrbitPosition(
    [-17, -3, 12],
    index,
    experiences.length,
    5.2,
    1.4,
  ),
  description: `${experience.role} (${experience.period})`,
  details: experience.achievements,
}));

const socialNodes: SpaceNode[] = contactInfo.socialLinks.map(
  (social, index) => ({
    id: `social-${social.label.toLowerCase()}`,
    name: social.label,
    kind: "beacon",
    color: "#f472b6",
    position: createOrbitPosition(
      [8, 8, 20],
      index,
      contactInfo.socialLinks.length,
      4.3,
      1.2,
    ),
    description: `Dock to the ${social.label} relay to connect instantly.`,
    details: [social.href, `Channel: ${social.label}`],
    link: social.href,
  }),
);

export const spaceSystems: SpaceSystem[] = [
  {
    id: "about-system",
    name: "Origin Prime",
    subtitle: "Identity Star",
    color: "#67e8f9",
    position: [0, 0, 0],
    description: "Core profile and mission briefing.",
    nodes: [
      {
        id: "about-core",
        name: summaryInfo.name,
        kind: "planet",
        color: "#22d3ee",
        position: [3.8, 1.9, 2.4],
        description: summaryInfo.role,
        details: [
          summaryInfo.description,
          "Signal traits: Frontend architecture, motion design, production quality",
          "Current mission: Building product-grade experiences with measurable impact",
        ],
      },
    ],
  },
  {
    id: "skills-system",
    name: "Skill Constellation",
    subtitle: "Technical Atlas",
    color: "#5eead4",
    position: [16, 4, -14],
    description: "Clusters of tools, frameworks, and engineering depth.",
    nodes: skillNodes,
  },
  {
    id: "projects-system",
    name: "Launch Sector",
    subtitle: "Project Planetarium",
    color: "#60a5fa",
    position: [20, -2, 10],
    description: "Interactive catalog of deployed and experimental missions.",
    nodes: projectNodes,
  },
  {
    id: "experience-system",
    name: "Career Spiral",
    subtitle: "Timeline Orbit",
    color: "#fbbf24",
    position: [-17, -3, 12],
    description: "Professional trajectory across teams and products.",
    nodes: experienceNodes,
  },
  {
    id: "contact-system",
    name: "Communication Array",
    subtitle: "Contact Gateway",
    color: "#f472b6",
    position: [8, 8, 20],
    description: `Direct uplink: ${contactInfo.email}`,
    nodes: [
      {
        id: "email-gateway",
        name: "Email Dock",
        kind: "station",
        color: "#f9a8d4",
        position: [11.3, 8.7, 22.4],
        description:
          "Primary contact channel for opportunities and collaborations.",
        details: [contactInfo.email, "Response mode: Professional and prompt"],
        link: `mailto:${contactInfo.email}`,
      },
      ...socialNodes,
    ],
  },
];

export interface SpaceSelection {
  systemId: string;
  nodeId?: string;
}

export const defaultSelection: SpaceSelection = {
  systemId: "about-system",
};
