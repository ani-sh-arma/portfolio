import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

// Categorized skills
const skillCategories = {
  frontend: [
    {
      name: "React",
      level: 90,
      gradientFrom: "from-blue-400",
      gradientTo: "to-cyan-300",
      icon: <FaReact className="text-blue-400" />,
      description: "Building interactive UIs with React and its ecosystem",
      category: "Frontend",
    },
    {
      name: "JavaScript",
      level: 90,
      gradientFrom: "from-yellow-400",
      gradientTo: "to-yellow-200",
      icon: <FaJs className="text-yellow-300" />,
      description: "Web development and interactive applications",
      category: "Frontend",
    },
    {
      name: "TypeScript",
      level: 85,
      gradientFrom: "from-blue-600",
      gradientTo: "to-indigo-400",
      icon: <SiTypescript className="text-blue-500" />,
      description: "Type-safe JavaScript development",
      category: "Frontend",
    },
    {
      name: "HTML",
      level: 95,
      gradientFrom: "from-orange-600",
      gradientTo: "to-orange-400",
      icon: <FaHtml5 className="text-orange-400" />,
      description: "Semantic markup and web structure",
      category: "Frontend",
    },
    {
      name: "CSS",
      level: 90,
      gradientFrom: "from-blue-500",
      gradientTo: "to-blue-300",
      icon: <FaCss3Alt className="text-blue-300" />,
      description: "Styling and responsive design",
      category: "Frontend",
    },
    {
      name: "Tailwind",
      level: 85,
      gradientFrom: "from-cyan-500",
      gradientTo: "to-cyan-300",
      icon: <SiTailwindcss className="text-cyan-400" />,
      description: "Utility-first CSS framework",
      category: "Frontend",
    },
  ],
  backend: [
    {
      name: "Node.js",
      level: 80,
      gradientFrom: "from-green-500",
      gradientTo: "to-green-300",
      icon: <FaNodeJs className="text-green-400" />,
      description: "Server-side JavaScript runtime",
      category: "Backend",
    },
    {
      name: "Python",
      level: 88,
      gradientFrom: "from-blue-500",
      gradientTo: "to-yellow-400",
      icon: <FaPython className="text-yellow-400" />,
      description: "Data analysis, automation, and backend development",
      category: "Backend",
    },
    {
      name: "Django",
      level: 75,
      gradientFrom: "from-green-700",
      gradientTo: "to-green-500",
      icon: <SiDjango className="text-green-500" />,
      description: "Python web framework for rapid development",
      category: "Backend",
    },
  ],
  mobile: [
    {
      name: "Flutter",
      level: 75,
      gradientFrom: "from-blue-600",
      gradientTo: "to-blue-400",
      icon: <SiFlutter className="text-blue-500" />,
      description: "Cross-platform mobile app development",
      category: "Mobile",
    },
    {
      name: "Android Studio",
      level: 70,
      gradientFrom: "from-green-700",
      gradientTo: "to-green-500",
      icon: <FaAndroid className="text-green-500" />,
      description: "Native Android app development",
      category: "Mobile",
    },
  ],
  programming: [
    {
      name: "C++",
      level: 75,
      gradientFrom: "from-blue-600",
      gradientTo: "to-red-400",
      icon: <SiCplusplus className="text-red-400" />,
      description: "System programming and performance-critical applications",
      category: "Programming",
    },
    {
      name: "Data Structures",
      level: 80,
      gradientFrom: "from-purple-600",
      gradientTo: "to-purple-400",
      icon: <FaDatabase className="text-purple-400" />,
      description: "Efficient data organization and manipulation",
      category: "Programming",
    },
    {
      name: "Algorithms",
      level: 78,
      gradientFrom: "from-pink-600",
      gradientTo: "to-pink-400",
      icon: <FaDatabase className="text-pink-400" />,
      description: "Problem-solving and optimization techniques",
      category: "Programming",
    },
  ],
  tools: [
    {
      name: "Git",
      level: 85,
      gradientFrom: "from-orange-700",
      gradientTo: "to-orange-500",
      icon: <FaGitAlt className="text-orange-500" />,
      description: "Version control and collaboration",
      category: "Tools",
    },
    {
      name: "GitHub",
      level: 88,
      gradientFrom: "from-gray-700",
      gradientTo: "to-gray-500",
      icon: <FaGithub className="text-gray-500" />,
      description: "Project hosting and collaboration platform",
      category: "Tools",
    },
  ],
  ai: [
    {
      name: "Machine Learning",
      level: 70,
      gradientFrom: "from-teal-600",
      gradientTo: "to-teal-400",
      icon: <SiTensorflow className="text-teal-400" />,
      description: "AI models and data analysis",
      category: "AI & Data Science",
    },
  ],
};

// All skills flattened for "All" category view
const allSkills = Object.values(skillCategories).flat();

// Your skill data remains unchanged...

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState("all");

  // Function to render skill cards
  const renderSkillCards = (skills: any[]) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            className="relative"
          >
            <Card className="relative overflow-hidden bg-gray-800 border-0 rounded-xl h-full">
              <div className="p-6 relative z-10 h-full flex flex-col">
                <div className="flex items-center mb-4 mt-4">
                  <div className="text-3xl mr-3">{skill.icon}</div>
                  <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4 flex-grow">
                  {skill.description}
                </p>
                <div className="mt-auto">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Proficiency</span>
                    <span className="text-white font-medium">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.gradientFrom} ${skill.gradientTo}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.05 }}
                    />
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <div className="py-10 px-4 bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">
        Technical Skills
      </h2>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
        My technical expertise spans across various domains, from frontend and
        backend development to mobile applications and AI.
      </p>

      <Tabs className="w-full max-w-5xl mx-auto mb-10 ">
        <TabsList className="grid grid-cols-3 md:grid-cols-7 mb-8 bg-gray-800 h-fit">
          {[
            "all",
            "frontend",
            "backend",
            "mobile",
            "programming",
            "tools",
            "ai",
          ].map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              onClick={() => setActiveTab(category)}
              className={`data-[state=active]:bg-gray-700 ${
                activeTab === category ? "bg-gray-700 text-white" : ""
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Render skill cards based on activeTab */}
      <div className="relative">
        {activeTab === "all" && renderSkillCards(allSkills)}
        {activeTab === "frontend" && renderSkillCards(skillCategories.frontend)}
        {activeTab === "backend" && renderSkillCards(skillCategories.backend)}
        {activeTab === "mobile" && renderSkillCards(skillCategories.mobile)}
        {activeTab === "programming" &&
          renderSkillCards(skillCategories.programming)}
        {activeTab === "tools" && renderSkillCards(skillCategories.tools)}
        {activeTab === "ai" && renderSkillCards(skillCategories.ai)}
      </div>
    </div>
  );
}
