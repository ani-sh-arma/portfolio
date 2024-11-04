import { motion } from "framer-motion";
import { Rocket, ExternalLink, Github } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      name: "EasyPolls",
      description:
        "A polling application where users can create polls and vote. Built using Django.",
      icon: "🗳️",
      tech: ["Django", "Python", "PostgreSQL"],
      github: "https://github.com/ani-sh-arma/polling_project",
      live: "#",
    },
    {
      name: "Chatify",
      description:
        "Real-time chat application with end-to-end encryption. Built using Flutter.",
      icon: "💬",
      tech: ["Flutter", "Dart", "Firebase"],
      github: "https://github.com/ani-sh-arma/Chat-App-FlutterFire",
      live: "#",
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-4xl">{project.icon}</span>
                  <h3 className="text-xl font-bold">{project.name}</h3>
                </div>
                <Rocket className="w-6 h-6 text-purple-400" />
              </div>
              <p className="text-gray-300">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-semibold bg-purple-700 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-700 px-6 py-4 flex justify-between items-center">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors flex items-center space-x-2"
              >
                <Github className="w-5 h-5" />
                <span>View Code</span>
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors flex items-center space-x-2"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Live Demo</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
