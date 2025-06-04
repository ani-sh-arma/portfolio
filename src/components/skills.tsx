// import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaCss3Alt,
  FaHtml5,
  FaGitAlt,
  FaGithub,
  FaAndroid,
  FaJs,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTypescript,
  SiDjango,
  SiTailwindcss,
  SiFlutter,
  SiCplusplus,
  SiTensorflow,
} from "react-icons/si";
import { Card, CardContent } from "./ui/card";
import { useState } from "react";
import { X } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  icon: JSX.Element;
  description: string;
  category: string;
}

const skills: Skill[] = [
  {
    name: "React",
    level: 90,
    icon: <FaReact className="text-blue-400" />,
    description: "Building interactive UIs with React and its ecosystem",
    category: "Frontend",
  },
  {
    name: "JavaScript",
    level: 90,
    icon: <FaJs className="text-yellow-300" />,
    description: "Web development and interactive applications",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    level: 85,
    icon: <SiTypescript className="text-blue-500" />,
    description: "Type-safe JavaScript development",
    category: "Frontend",
  },
  {
    name: "HTML",
    level: 95,
    icon: <FaHtml5 className="text-orange-400" />,
    description: "Semantic markup and web structure",
    category: "Frontend",
  },
  {
    name: "CSS",
    level: 90,
    icon: <FaCss3Alt className="text-blue-300" />,
    description: "Styling and responsive design",
    category: "Frontend",
  },
  {
    name: "Tailwind",
    level: 85,
    icon: <SiTailwindcss className="text-cyan-400" />,
    description: "Utility-first CSS framework",
    category: "Frontend",
  },
  {
    name: "Node.js",
    level: 80,
    icon: <FaNodeJs className="text-green-400" />,
    description: "Server-side JavaScript runtime",
    category: "Backend",
  },
  {
    name: "Python",
    level: 88,
    icon: <FaPython className="text-yellow-400" />,
    description: "Data analysis, automation, and backend development",
    category: "Backend",
  },
  {
    name: "Django",
    level: 75,
    icon: <SiDjango className="text-green-500" />,
    description: "Python web framework for rapid development",
    category: "Backend",
  },
  {
    name: "Flutter",
    level: 75,
    icon: <SiFlutter className="text-blue-500" />,
    description: "Cross-platform mobile app development",
    category: "Mobile",
  },
  {
    name: "Android Studio",
    level: 70,
    icon: <FaAndroid className="text-green-500" />,
    description: "Native Android app development",
    category: "Mobile",
  },
  {
    name: "C++",
    level: 75,
    icon: <SiCplusplus className="text-red-400" />,
    description: "System programming and performance-critical applications",
    category: "Programming",
  },
  {
    name: "Data Structures",
    level: 80,
    icon: <FaDatabase className="text-purple-400" />,
    description: "Efficient data organization and manipulation",
    category: "Programming",
  },
  {
    name: "Algorithms",
    level: 78,
    icon: <FaDatabase className="text-pink-400" />,
    description: "Problem-solving and optimization techniques",
    category: "Programming",
  },
  {
    name: "Git",
    level: 85,
    icon: <FaGitAlt className="text-orange-500" />,
    description: "Version control and collaboration",
    category: "Tools",
  },
  {
    name: "GitHub",
    level: 88,
    icon: <FaGithub className="text-gray-500" />,
    description: "Project hosting and collaboration platform",
    category: "Tools",
  },
  {
    name: "Machine Learning",
    level: 70,
    icon: <SiTensorflow className="text-teal-400" />,
    description: "AI models and data analysis",
    category: "AI & Data Science",
  },
];

export function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  return (
    <div className="py-10 px-4 bg-transparent text-white">
      <div className="grid grid-cols-3 md:grid-cols-6 gap-8 max-w-4xl mx-auto mb-10">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            onClick={() => setSelectedSkill(skill)}
            className="flex flex-col items-center cursor-pointer"
          >
            <div className="text-5xl mb-2">{skill.icon}</div>
            <span className="text-sm text-center">{skill.name}</span>
          </motion.div>
        ))}
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
                  <div className="text-4xl mr-4">{selectedSkill.icon}</div>
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
