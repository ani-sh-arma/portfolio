import { motion } from "framer-motion";

export function SkillsSection() {
  const skills = [
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "C++",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind",
    "Django",
    "Data Structures",
    "Algorithms",
    "Machine Learning",
    "Git",
    "GitHub",
    "Flutter",
    "Android Studio",
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-wrap justify-center gap-4"
    >
      {skills.map((skill, index) => (
        <motion.div
          key={skill}
          className="bg-gray-800 rounded-full px-4 py-2 text-lg cursor-pointer"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.1, backgroundColor: "#4C1D95" }}
        >
          {skill}
        </motion.div>
      ))}
    </motion.div>
  );
}
