import { motion } from "framer-motion";
import { CalendarDays, Sparkles } from "lucide-react";
import { experiences } from "../data/experienceData";

export function ExperienceSection() {
  return (
    <div className="section-shell">
      <div className="section-header">
        <p className="section-kicker">Experience</p>
        <h2 className="section-title">Trajectory through high-impact product teams</h2>
      </div>

      <div className="timeline mt-10 space-y-6">
        {experiences.map((exp, index) => (
          <motion.article
            key={`${exp.company}-${exp.role}`}
            initial={{ opacity: 0, x: index % 2 ? 18 : -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="experience-card"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                <p className="mt-1 text-sm uppercase tracking-[0.2em] text-cyan-100/70">
                  {exp.company}
                </p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-100/20 bg-cyan-200/10 px-3 py-1 text-xs text-cyan-100">
                <CalendarDays size={14} />
                {exp.period}
              </div>
            </div>

            <p className="mt-5 leading-7 text-slate-200/80">{exp.description}</p>

            <ul className="mt-4 space-y-2 text-slate-100/85">
              {exp.achievements.map((achievement) => (
                <li key={achievement} className="flex items-start gap-2">
                  <Sparkles size={14} className="mt-1 shrink-0 text-cyan-300" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
