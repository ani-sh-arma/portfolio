import { useMemo } from "react";
import { motion } from "framer-motion";
import { SummarySection } from "./components/summary";
import { SkillsSection } from "./components/skills";
import { ProjectsSection } from "./components/projects";
import { ExperienceSection } from "./components/experience";
import { ContactSection } from "./components/contact";
import { projects } from "./data/projectsData";
import { skillCategories } from "./data/skillsData";
import { experiences } from "./data/experienceData";

const navItems = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Orbit", id: "orbit" },
  { label: "Contact", id: "contact" },
];

export default function App() {
  const stars = useMemo(
    () =>
      Array.from({ length: 90 }, (_, i) => ({
        id: i,
        size: Number((Math.random() * 2.6 + 0.5).toFixed(2)),
        top: Number((Math.random() * 100).toFixed(2)),
        left: Number((Math.random() * 100).toFixed(2)),
        duration: Number((Math.random() * 5 + 2).toFixed(2)),
        delay: Number((Math.random() * 4).toFixed(2)),
      })),
    []
  );

  const metricItems = [
    { label: "Projects shipped", value: projects.length.toString() },
    {
      label: "Core skills",
      value: `${skillCategories.length}+ categories`,
    },
    { label: "Professional roles", value: experiences.length.toString() },
    { label: "Current focus", value: "Product-grade frontend systems" },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-deep-space text-slate-100">
      <div className="nebula" aria-hidden="true" />
      <div className="grid-overlay" aria-hidden="true" />

      {stars.map((star) => (
        <motion.span
          key={star.id}
          className="star"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.top}%`,
            left: `${star.left}%`,
          }}
          animate={{ opacity: [0.15, 1, 0.15] }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/65 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="brand-mark">ANISH SHARMA</span>
          <nav className="hidden gap-2 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="nav-link"
                aria-label={`Go to ${item.label}`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="https://kll1svcrmn.ufs.sh/f/YhFHEFaRz0wb1I9P0IGfxuesmz905XOtnw8TKkV2paLJYjWD"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-chip"
          >
            Resume
          </a>
        </div>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-28 px-6 pb-24 pt-32 md:gap-32 md:pt-36">
        <section id="about" className="scroll-mt-24">
          <SummarySection />
        </section>

        <section id="skills" className="scroll-mt-24">
          <SkillsSection />
        </section>

        <section id="projects" className="scroll-mt-24">
          <ProjectsSection />
        </section>

        <section id="experience" className="scroll-mt-24">
          <ExperienceSection />
        </section>

        <section id="orbit" className="scroll-mt-24">
          <div className="section-shell">
            <div className="section-header">
              <p className="section-kicker">Orbit</p>
              <h2 className="section-title">Mission metrics at a glance</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {metricItems.map((item, index) => (
                <motion.article
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="metric-card"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/60">
                    {item.label}
                  </p>
                  <p className="mt-4 text-2xl font-semibold text-white md:text-3xl">
                    {item.value}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24">
          <ContactSection />
        </section>
      </main>
    </div>
  );
}
