import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/projectsData";

export function ProjectsSection() {
  return (
    <div className="section-shell">
      <div className="section-header">
        <p className="section-kicker">Projects</p>
        <h2 className="section-title">Selected launches from my development lab</h2>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
            className="project-card"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-3xl">{project.icon}</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">{project.name}</h3>
              </div>
            </div>

            <p className="mt-4 leading-7 text-slate-200/80">{project.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="project-tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <Github size={16} />
                <span>Source</span>
              </a>
              {project.live !== "#" ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <ExternalLink size={16} />
                  <span>Live</span>
                </a>
              ) : null}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
