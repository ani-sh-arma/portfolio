import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";

interface Project {
  name: string;
  description: string;
  icon: string;
  tech: string[];
  github: string;
  live: string;
  image?: string;
}

const projects: Project[] = [
  {
    name: "EasyPolls",
    description:
      "A polling application where users can create polls and vote. Built using Django.",
    icon: "🗳️",
    tech: ["Django", "Python", "PostgreSQL"],
    github: "https://github.com/ani-sh-arma/polling_project",
    live: "#",
    // image: "/assets/easypolls-preview.png", // Example image path
  },
  {
    name: "Chatify",
    description:
      "Real-time chat application with end-to-end encryption. Built using Flutter.",
    icon: "💬",
    tech: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/ani-sh-arma/Chat-App-FlutterFire",
    live: "#",
    // image: "/assets/chatify-preview.gif", // Example GIF path
  },
  {
    name: "ByteTalk",
    description:
      "Real-time chat web application with end-to-end encryption. Built using Django.",
    icon: "💬",
    tech: ["Django", "Python", "Ajax", "Sqlite"],
    github: "https://github.com/ani-sh-arma/ByteTalk",
    live: "#",
  },
  {
    name: "Social Circle",
    description:
      "Social media application built using flutter and Restful APIs.",
    icon: "💬",
    tech: ["Flutter", "Dart", "REST APIs"],
    github: "https://github.com/ani-sh-arma/Social-Circle",
    live: "#",
  },
  {
    name: "Art Avenue",
    description:
      "A mobile app for artists to share their work. Built using Android Studio (Java).",
    icon: "🎨",
    tech: ["Java", "Android SDK", "Firebase"],
    github: "https://github.com/ani-sh-arma/Art-Avenue",
    live: "#",
  },
  {
    name: "Get Weather Report",
    description:
      "A web application built using Vue JS and Restful APIs. It uses OpenWeatherMap API. and Nominatim API for accurate location handeling.",
    icon: "🎨",
    tech: ["Vue JS", "Javascript", "Rest APIs"],
    github: "https://github.com/ani-sh-arma/VueRouterExample",
    live: "https://get-weather-report.vercel.app",
  },
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="py-10 px-4 bg-transparent text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedProject(project)}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer"
          >
            {project.image && (
              <img
                src={project.image}
                alt={`${project.name} preview`}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-3">{project.icon}</span>
                <h3 className="text-xl font-bold">{project.name}</h3>
              </div>
              <p className="text-gray-300 text-sm">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="relative bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                onClick={() => setSelectedProject(null)}
              >
                <X size={24} />
              </button>
              {selectedProject.image && (
                <img
                  src={selectedProject.image}
                  alt={`${selectedProject.name} preview`}
                  className="w-full h-64 object-cover"
                />
              )}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{selectedProject.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold">
                      {selectedProject.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {selectedProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-semibold bg-purple-700 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">
                  {selectedProject.description}
                </p>
                <div className="flex justify-start space-x-6">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors flex items-center space-x-2"
                  >
                    <Github className="w-5 h-5" />
                    <span>View Code</span>
                  </a>
                  {selectedProject.live !== "#" && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 transition-colors flex items-center space-x-2"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
