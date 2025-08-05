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

export interface Skill {
  name: string;
  level: number;
  icon: string; // Changed to string to store icon name
  description: string;
  category: string;
}

export const skills: Skill[] = [
  {
    name: "React",
    level: 90,
    icon: "FaReact",
    description: "Building interactive UIs with React and its ecosystem",
    category: "Frontend",
  },
  {
    name: "JavaScript",
    level: 90,
    icon: "FaJs",
    description: "Web development and interactive applications",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    level: 85,
    icon: "SiTypescript",
    description: "Type-safe JavaScript development",
    category: "Frontend",
  },
  {
    name: "HTML",
    level: 95,
    icon: "FaHtml5",
    description: "Semantic markup and web structure",
    category: "Frontend",
  },
  {
    name: "CSS",
    level: 90,
    icon: "FaCss3Alt",
    description: "Styling and responsive design",
    category: "Frontend",
  },
  {
    name: "Tailwind",
    level: 85,
    icon: "SiTailwindcss",
    description: "Utility-first CSS framework",
    category: "Frontend",
  },
  {
    name: "Node.js",
    level: 80,
    icon: "FaNodeJs",
    description: "Server-side JavaScript runtime",
    category: "Backend",
  },
  {
    name: "Python",
    level: 88,
    icon: "FaPython",
    description: "Data analysis, automation, and backend development",
    category: "Backend",
  },
  {
    name: "Django",
    level: 75,
    icon: "SiDjango",
    description: "Python web framework for rapid development",
    category: "Backend",
  },
  {
    name: "Flutter",
    level: 75,
    icon: "SiFlutter",
    description: "Cross-platform mobile app development",
    category: "Mobile",
  },
  {
    name: "Android Studio",
    level: 70,
    icon: "FaAndroid",
    description: "Native Android app development",
    category: "Mobile",
  },
  {
    name: "C++",
    level: 75,
    icon: "SiCplusplus",
    description: "System programming and performance-critical applications",
    category: "Programming",
  },
  {
    name: "Data Structures",
    level: 80,
    icon: "FaDatabase",
    description: "Efficient data organization and manipulation",
    category: "Programming",
  },
  {
    name: "Algorithms",
    level: 78,
    icon: "FaDatabase",
    description: "Problem-solving and optimization techniques",
    category: "Programming",
  },
  {
    name: "Git",
    level: 85,
    icon: "FaGitAlt",
    description: "Version control and collaboration",
    category: "Tools",
  },
  {
    name: "GitHub",
    level: 88,
    icon: "FaGithub",
    description: "Project hosting and collaboration platform",
    category: "Tools",
  },
  {
    name: "Machine Learning",
    level: 70,
    icon: "SiTensorflow",
    description: "AI models and data analysis",
    category: "AI & Data Science",
  },
];

export const iconMap: { [key: string]: React.ElementType } = {
  FaReact: FaReact,
  FaNodeJs: FaNodeJs,
  FaPython: FaPython,
  FaCss3Alt: FaCss3Alt,
  FaHtml5: FaHtml5,
  FaGitAlt: FaGitAlt,
  FaGithub: FaGithub,
  FaAndroid: FaAndroid,
  FaJs: FaJs,
  FaDatabase: FaDatabase,
  SiTypescript: SiTypescript,
  SiDjango: SiDjango,
  SiTailwindcss: SiTailwindcss,
  SiFlutter: SiFlutter,
  SiCplusplus: SiCplusplus,
  SiTensorflow: SiTensorflow,
};
