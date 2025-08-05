import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { X } from "lucide-react";
import { skills, Skill, iconMap } from "../data/skillsData";

export function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  return (
    <div className="py-10 px-4 bg-transparent text-white">
      <div className="grid grid-cols-3 md:grid-cols-6 gap-8 max-w-4xl mx-auto mb-10">
        {skills.map((skill, index) => {
          const { component: IconComponent, className: iconClassName } =
            iconMap[skill.icon];
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              onClick={() => setSelectedSkill(skill)}
              className="flex flex-col items-center cursor-pointer"
            >
              <div className="text-5xl mb-2">
                {IconComponent && <IconComponent className={iconClassName} />}
              </div>
              <span className="text-sm text-center">{skill.name}</span>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedSkill(null)}
          >
            <Card className="relative bg-gray-800 border-0 text-white min-w-[30vw]">
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                onClick={() => setSelectedSkill(null)}
              >
                <X size={24} />
              </button>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">
                    {selectedSkill.icon &&
                      iconMap[selectedSkill.icon] &&
                      React.createElement(
                        iconMap[selectedSkill.icon].component,
                        { className: iconMap[selectedSkill.icon].className }
                      )}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{selectedSkill.name}</h3>
                    <p className="text-gray-400 text-sm">
                      {selectedSkill.category}
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  {selectedSkill.description}
                </p>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Proficiency</span>
                  <span className="text-white font-medium">
                    {selectedSkill.level}%
                  </span>
                </div>
                <div className="h-3 w-full bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 to-indigo-500" // Using a generic gradient for simplicity
                    initial={{ width: 0 }}
                    animate={{ width: `${selectedSkill.level}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
