// 'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import astronaut2 from "../assets/astronaut2.png";
import { ContactSection } from "./contact";
import { SummarySection } from "./summary";
import { ProjectsSection } from "./projects";
import { ExperienceSection } from "./experience";
import { SkillsSection } from "./skills";

export function SpacePortfolioComponent() {
  const [activeSection, setActiveSection] = useState("Summary");

  const resumeUrl =
    "https://kll1svcrmn.ufs.sh/f/YhFHEFaRz0wbWP5qyXM2wLuQVzcFZUHPS8JN9RTgGiMsoOtE";

  const navItems = [
    "Summary",
    "Skills",
    "Projects",
    "Experience",
    "Resume",
    "Contact",
  ];

  return (
    <div className="bg-gray-900 text-white overflow-hidden relative py-12 min-h-screen">
      {/* Navigation Section */}
      <nav className="fixed top-0 w-full z-50 flex gap-2 flex-wrap justify-center py-4 bg-gray-900 bg-opacity-5 backdrop-filter backdrop-blur-sm">
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
        className="top-20 right-10 w-24 h-24 fixed"
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

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-16 relative z-10 ">
        {activeSection === "Summary" && <SummarySection />}
        {activeSection === "Skills" && <SkillsSection />}
        {activeSection === "Projects" && <ProjectsSection />}
        {activeSection === "Experience" && <ExperienceSection />}
        {activeSection === "Contact" && <ContactSection />}
        {activeSection === "Resume" && (
          <object
            data={resumeUrl}
            type="application/pdf"
            className="w-full h-screen"
          >
            Your browser does not support PDFs.
            <a href="sample.pdf">Download the PDF</a> instead.
          </object>
        )}
      </div>
    </div>
  );
}
