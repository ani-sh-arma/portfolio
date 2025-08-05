export interface Project {
  name: string;
  description: string;
  icon: string;
  tech: string[];
  github: string;
  live: string;
  image?: string;
}

export const projects: Project[] = [
  {
    name: "Pilot",
    description: "Pilot is a file storage solution like google drive.",
    icon: "🗳️",
    tech: ["Next JS", "JavaScript", "Sqlite", "Tailwind", "Drizzle ORM"],
    github: "https://github.com/ani-sh-arma/pilot",
    live: "https://pilotstore.vercel.app",
    // image: "/assets/easypolls-preview.png", // Example image path
  },
  {
    name: "create_flutter_app",
    description:
      "A CLI tool to create and scaffold necessary dependencies for flutter apps with ease.",
    icon: "🗳️",
    tech: ["Dart"],
    github: "https://github.com/ani-sh-arma/create_flutter_app",
    live: "https://pub.dev/packages/create_flutter_app",
    // image: "/assets/easypolls-preview.png", // Example image path
  },
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
