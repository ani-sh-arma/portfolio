import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

export function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

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
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
            className="relative"
          >
            <Card className="relative overflow-hidden bg-gray-800 border-0 rounded-xl h-full">
              {/* Animated background gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${skill.gradientFrom} ${skill.gradientTo} opacity-10`}
                initial={{ opacity: 0.05 }}
                animate={{
                  opacity: hoveredSkill === skill.name ? 0.2 : 0.05,
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Skill content */}
              <div className="p-6 relative z-10 h-full flex flex-col">
                {/* Category badge */}
                <div className="absolute top-2 right-2">
                  <span
                    className={`text-xs px-2 py-1 rounded-full bg-opacity-20 ${skill.gradientFrom.replace(
                      "from-",
                      "bg-"
                    )} text-white`}
                  >
                    {skill.category}
                  </span>
                </div>

                {/* Skill header with icon */}
                <div className="flex items-center mb-4 mt-4">
                  <motion.div
                    className="text-3xl mr-3"
                    animate={{
                      rotate: hoveredSkill === skill.name ? [0, 10, -10, 0] : 0,
                      scale: hoveredSkill === skill.name ? [1, 1.2, 1] : 1,
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: hoveredSkill === skill.name ? Infinity : 0,
                      repeatDelay: 1,
                    }}
                  >
                    {skill.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4 flex-grow">
                  {skill.description}
                </p>

                {/* Skill level */}
                <div className="mt-auto">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Proficiency</span>
                    <span className="text-white font-medium">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Custom progress bar */}
                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.gradientFrom} ${skill.gradientTo}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.05 }}
                    />
                  </div>
                </div>

                {/* Particle effects on hover */}
                {hoveredSkill === skill.name && (
                  <>
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-1 h-1 rounded-full ${skill.gradientFrom.replace(
                          "from-",
                          "bg-"
                        )}`}
                        initial={{
                          x: "50%",
                          y: "50%",
                          opacity: 0,
                        }}
                        animate={{
                          x: `${50 + (Math.random() * 40 - 20)}%`,
                          y: `${50 + (Math.random() * 40 - 20)}%`,
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1 + Math.random(),
                          repeat: Infinity,
                          repeatType: "loop",
                        }}
                      />
                    ))}
                  </>
                )}
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

      <Tabs defaultValue="all" className="w-full max-w-5xl mx-auto mb-10">
        <TabsList className="grid grid-cols-3 md:grid-cols-7 mb-8 bg-gray-800">
          <TabsTrigger value="all" className="data-[state=active]:bg-gray-700">
            All
          </TabsTrigger>
          <TabsTrigger
            value="frontend"
            className="data-[state=active]:bg-blue-900/30"
          >
            Frontend
          </TabsTrigger>
          <TabsTrigger
            value="backend"
            className="data-[state=active]:bg-green-900/30"
          >
            Backend
          </TabsTrigger>
          <TabsTrigger
            value="mobile"
            className="data-[state=active]:bg-indigo-900/30"
          >
            Mobile
          </TabsTrigger>
          <TabsTrigger
            value="programming"
            className="data-[state=active]:bg-purple-900/30"
          >
            Programming
          </TabsTrigger>
          <TabsTrigger
            value="tools"
            className="data-[state=active]:bg-orange-900/30"
          >
            Tools
          </TabsTrigger>
          <TabsTrigger
            value="ai"
            className="data-[state=active]:bg-teal-900/30"
          >
            AI & Data
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-0">
          {renderSkillCards(allSkills)}
        </TabsContent>

        <TabsContent value="frontend" className="mt-0">
          {renderSkillCards(skillCategories.frontend)}
        </TabsContent>

        <TabsContent value="backend" className="mt-0">
          {renderSkillCards(skillCategories.backend)}
        </TabsContent>

        <TabsContent value="mobile" className="mt-0">
          {renderSkillCards(skillCategories.mobile)}
        </TabsContent>

        <TabsContent value="programming" className="mt-0">
          {renderSkillCards(skillCategories.programming)}
        </TabsContent>

        <TabsContent value="tools" className="mt-0">
          {renderSkillCards(skillCategories.tools)}
        </TabsContent>

        <TabsContent value="ai" className="mt-0">
          {renderSkillCards(skillCategories.ai)}
        </TabsContent>
      </Tabs>
    </div>
  );
}
