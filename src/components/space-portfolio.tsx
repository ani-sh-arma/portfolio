// 'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Code,
  Linkedin,
  Mail,
  Rocket,
  Calendar,
  Github,
  Twitter,
} from "lucide-react";
import astronaut2 from "../assets/astronaut2.png";
import profile from "../assets/profile.jpg";

export function SpacePortfolioComponent() {
  const [activeSection, setActiveSection] = useState("profile");

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

  const projects = [
    {
      name: "EasyPolls",
      description:
        "A polling application where users can create polls and vote. Built using Django.",
    },
    {
      name: "Chatify",
      description:
        "Real-time chat application with end-to-end encryption. Built using Flutter.",
    },
    {
      name: "Art Avenue",
      description:
        "A mobile app for artists to share their work. Built using Android Studio (Java).",
    },
  ];

  const experiences = [
    {
      role: "Flutter Developer",
      company: "Rablo",
      period: "August 2024 - November 2024",
      description:
        "Developed and maintained mobile applications using Flutter framework.",
      achievements: [
        "Improved app performance by 30%",
        "Implemented new features that increased user engagement by 25%",
      ],
    },
    {
      role: "Flutter Developer",
      company: "MeshDroid Technologies",
      period: "Jan 2024 - April 2024",
      description:
        "Created cross-platform mobile applications with Flutter for Android and iOS.",
      achievements: [
        "Led a team of 3 developers",
        "Reduced bug reports by 40% through implementation of robust testing strategies",
      ],
    },
  ];

  const navItems = ["profile", "skills", "projects", "experience", "contact"];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden relative">
      {/* Star field background */}
      {[...Array(100)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: Math.random() * 2 + 1 + "px",
            height: Math.random() * 2 + 1 + "px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
          }}
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      {/* Floating astronaut */}
      <motion.img
        src={astronaut2}
        alt="Floating Astronaut"
        className="absolute top-10 right-10 w-24 h-24"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Main content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Navigation */}
        <nav className="mb-12 flex justify-center overflow-hidden w-full">
          <div className="flex space-x-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
            {navItems.map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-4 py-2 rounded-full flex-shrink-0 ${
                  activeSection === section ? "bg-purple-600" : "bg-gray-800"
                } hover:bg-purple-500 transition-colors`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </nav>

        {/* Profile Section */}
        {activeSection === "profile" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <img
              src={profile}
              alt="Profile"
              className="w-48 h-48 rounded-full mx-auto mb-4"
            />
            <h2 className="text-3xl font-bold mb-2">Anish Sharma</h2>
            {/* <h2 className="text-2xl font-bold mb-8 text-center">
              Software Developer
            </h2> */}
            <p className="text-xl text-gray-400 mb-4">
              Exploring the digital universe, one commit at a time
            </p>
            <p className="max-w-2xl mx-auto">
              Passionate about creating innovative solutions and pushing the
              boundaries of what's possible in software development. With a keen
              eye for detail and a love for clean, efficient code, I strive to
              build applications that not only function flawlessly but also
              provide an out-of-this-world user experience.
            </p>
          </motion.div>
        )}

        {/* Skills Section */}
        {activeSection === "skills" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                className="bg-gray-800 rounded-full px-4 py-2 text-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, backgroundColor: "#4C1D95" }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Projects Section */}
        {activeSection === "projects" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                className="bg-gray-800 rounded-lg p-6"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-400">{project.description}</p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Experience Section */}
        {activeSection === "experience" && (
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
                  <Rocket className="w-8 h-8 text-purple-400 mr-4" />
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
        )}

        {/* Contact Section */}
        {activeSection === "contact" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
            <p className="mb-6">
              Ready to embark on a coding adventure? Reach out and let's create
              something amazing together!
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="mailto:anisharma030@gmail.com"
                className="text-purple-400 hover:text-purple-300"
              >
                <Mail className="w-8 h-8" />
              </a>
              <a
                href="https://dev.to/ani-sh-arma"
                className="text-purple-400 hover:text-purple-300"
              >
                <Code className="w-8 h-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/anish-sharma-71b38a25a/"
                className="text-purple-400 hover:text-purple-300"
              >
                <Linkedin className="w-8 h-8" />
              </a>
              <a
                href="https://github.com/ani-sh-arma"
                className="text-purple-400 hover:text-purple-300"
              >
                <Github className="w-8 h-8" />
              </a>
              <a
                href="https://x.com/ani_sh_armaa"
                className="text-purple-400 hover:text-purple-300"
              >
                <Twitter className="w-8 h-8" />
              </a>
            </div>
          </motion.div>
        )}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-purple-400" />
      </motion.div>
    </div>
  );
}
