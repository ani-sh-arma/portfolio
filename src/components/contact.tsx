import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Code, Linkedin, Github, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <div>
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
          Ready to embark on a coding adventure? Reach out and let's create
          something amazing together!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 mb-8">
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formState.name}
            onChange={handleInputChange}
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formState.email}
            onChange={handleInputChange}
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
            required
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            value={formState.message}
            onChange={handleInputChange}
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
            required
          />
          <Button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white"
          >
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </Button>
        </form>
      </motion.div>
      <div className="flex flex-wrap justify-center space-x-6 mt-6">
        {[
          { icon: Mail, href: "mailto:anisharma030@gmail.com", label: "Email" },
          { icon: Code, href: "https://dev.to/ani-sh-arma", label: "Dev.to" },
          {
            icon: Linkedin,
            href: "https://www.linkedin.com/in/anish-sharma-71b38a25a/",
            label: "LinkedIn",
          },
          {
            icon: Github,
            href: "https://github.com/ani-sh-arma",
            label: "GitHub",
          },
          {
            icon: Twitter,
            href: "https://x.com/ani_sh_armaa",
            label: "Twitter",
          },
        ].map(({ icon: Icon, href, label }, i) => (
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
            <Icon className="w-6 h-6 text-purple-400 transition-colors group-hover:text-purple-300" />
            <span className="sr-only">{label}</span>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
