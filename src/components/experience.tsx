import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { SiFlutter } from "react-icons/si";
import { experiences } from "../data/experienceData";

export function ExperienceSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-10 p-6"
    >
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.role}
          className="bg-gray-800 rounded-lg p-6 shadow-lg relative overflow-hidden hover:cursor-pointer"
          initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center mb-4">
            <SiFlutter className="w-8 h-8 text-blue-400 mr-4" />
            <div>
              <h3 className="text-2xl font-bold">{exp.role}</h3>
              <p className="text-purple-400">{exp.company}</p>
            </div>
          </div>
          <div className="flex items-center mb-4 text-gray-400">
            <Calendar className="w-5 h-5 mr-2" />
            <p>{exp.period}</p>
          </div>
          <p className="mb-4">{exp.description}</p>
          <ul className="list-disc list-inside text-purple-300">
            {exp.achievements.map((achievement, i) => (
              <li key={i}>{achievement}</li>
            ))}
          </ul>
          <div className="absolute top-0 right-0 w-24 h-24 bg-purple-600 rounded-full opacity-10 -mr-12 -mt-12" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-600 rounded-full opacity-10 -ml-12 -mb-12" />
        </motion.div>
      ))}
    </motion.div>
  );
}
