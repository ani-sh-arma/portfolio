import { motion } from "framer-motion";
import { Code, Linkedin, Github, Twitter } from "lucide-react";
import { contactInfo } from "../data/contactData";

const iconMap: { [key: string]: React.ElementType } = {
  Github: Github,
  Code: Code,
  Linkedin: Linkedin,
  Twitter: Twitter,
};

export function ContactSection() {
  const { email, socialLinks } = contactInfo;

  return (
    <div className="mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative p-8 bg-gray-800 bg-opacity-60 rounded-lg shadow-xl max-w-xl mx-auto"
        style={{
          boxShadow:
            "0 4px 20px rgba(0, 0, 0, 0.1), inset 0 0 10px rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(6px)",
        }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-300">
          Let's Connect
        </h2>
        <p className="max-w-xl mx-auto text-gray-300 mb-8 text-center">
          Contact me through email at{" "}
          <a href={`mailto:${email}`} className="underline hover:text-blue-500">
            {email}
          </a>{" "}
          or connect with me on social media.
        </p>

        <div className="flex flex-wrap justify-center space-x-6 mt-6">
          {socialLinks.map(({ icon, href, label }, i) => {
            const IconComponent = iconMap[icon];
            return (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-4 bg-gray-700 bg-opacity-60 rounded-full transition-all transform hover:scale-105 hover:bg-opacity-80 group"
                whileHover={{ y: -5 }}
                style={{
                  boxShadow:
                    "0 4px 20px rgba(0, 0, 0, 0.1), inset 0 0 10px rgba(255, 255, 255, 0.1)",
                }}
              >
                {IconComponent && (
                  <IconComponent className="w-6 h-6 text-purple-400 transition-colors group-hover:text-purple-300" />
                )}
                <span className="sr-only">{label}</span>
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
