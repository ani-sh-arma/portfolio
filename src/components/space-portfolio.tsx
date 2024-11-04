// 'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import astronaut2 from "../assets/astronaut2.png";
import profile from "../assets/profile.jpg";
import { ContactSection } from "./contact";
import { SummarySection } from "./summary";
import { ProjectsSection } from "./projects";
import { ExperienceSection } from "./experience";
import { SkillsSection } from "./skills";

export function SpacePortfolioComponent() {
  const [activeSection, setActiveSection] = useState("Summary");

  const navItems = ["Summary", "Skills", "Projects", "Experience", "Contact"];

  const handleChevronClick = () => {
    window.scrollTo({
      top: window.innerHeight + 200,
      behavior: "smooth",
    });
    setActiveSection(activeSection ?? "Summary");
  };

  return (
    <div className="bg-gray-900 text-white overflow-hidden relative py-12">
      <div className="min-h-screen px-12">
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
          className="top-10 right-10 w-24 h-24 fixed"
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <img
            src={profile}
            alt="Profile"
            className="w-48 h-48 rounded-full mx-auto mb-4 mt-20 "
          />

          <h2 className="text-3xl font-bold mb-12 text-center">Anish Sharma</h2>
          <h2 className="text-2xl text-gray-400 font-bold mb-4 text-center">
            Software Developer
          </h2>
          <p className="max-w-2xl mx-auto">
            Passionate about creating innovative solutions and pushing the
            boundaries of what's possible in software development. With a keen
            eye for detail and a love for clean, efficient code, I strive to
            build applications that not only function flawlessly but also
            provide an out-of-this-world user experience.
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute mt-20 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          onClick={handleChevronClick}
        >
          <ChevronDown className="w-8 h-8 text-purple-400" />
        </motion.div>
      </div>

      {/* Navigation Section */}
      <div className="container mx-auto px-4 py-16 relative z-10 min-h-screen">
        <nav className="my-12 flex gap-2 flex-wrap justify-center w-full">
          {navItems.map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-4 py-2 w-fit rounded-full ${
                activeSection === section ? "bg-purple-600" : "bg-gray-800"
              } hover:bg-purple-500 transition-colors`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>
        {activeSection === "Summary" && <SummarySection />}
        {activeSection === "Skills" && <SkillsSection />}
        {activeSection === "Projects" && <ProjectsSection />}
        {activeSection === "Experience" && <ExperienceSection />}
        {activeSection === "Contact" && <ContactSection />}
      </div>
    </div>
  );
}
