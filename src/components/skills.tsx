import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { skills, Skill, iconMap, skillCategories } from "../data/skillsData";

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0]);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const filteredSkills = useMemo(
    () => skills.filter((skill) => skill.category === activeCategory),
    [activeCategory]
  );

  return (
    <div className="section-shell">
      <div className="section-header">
        <p className="section-kicker">Skills</p>
        <h2 className="section-title">A constellation of tools and technologies</h2>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {skillCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`filter-pill ${
              activeCategory === category ? "filter-pill--active" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredSkills.map((skill, index) => {
          const icon = iconMap[skill.icon];
          const IconComponent = icon?.component;

          return (
            <motion.button
              key={skill.name}
              type="button"
              onClick={() => setSelectedSkill(skill)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="skill-card"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  {IconComponent ? (
                    <span className="text-2xl">
                      <IconComponent className={icon.className} />
                    </span>
                  ) : null}
                  <div className="text-left">
                    <p className="font-semibold text-white">{skill.name}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-300/65">
                      {skill.category}
                    </p>
                  </div>
                </div>
                <p className="text-sm font-medium text-cyan-100">{skill.level}%</p>
              </div>
              <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-slate-600/40">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedSkill ? (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 14 }}
            className="mt-6 rounded-2xl border border-cyan-100/20 bg-slate-900/70 p-6"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-100/70">Focus area</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">{selectedSkill.name}</h3>
            <p className="mt-3 leading-7 text-slate-200/80">{selectedSkill.description}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
