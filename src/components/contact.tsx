import { motion } from "framer-motion";
import { Mail, Code, Linkedin, Github, Twitter } from "lucide-react";
import { contactInfo } from "../data/contactData";

const iconMap: { [key: string]: React.ElementType } = {
  Github,
  Code,
  Linkedin,
  Twitter,
};

export function ContactSection() {
  const { email, socialLinks } = contactInfo;

  return (
    <div className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
        className="contact-shell"
      >
        <p className="section-kicker">Contact</p>
        <h2 className="section-title mt-3">Let&apos;s build something that feels futuristic.</h2>

        <a href={`mailto:${email}`} className="email-card mt-7">
          <Mail size={18} />
          <span>{email}</span>
        </a>

        <div className="mt-6 flex flex-wrap gap-3">
          {socialLinks.map(({ icon, href, label }) => {
            const IconComponent = iconMap[icon];
            return (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-chip"
                aria-label={label}
              >
                {IconComponent ? <IconComponent size={16} /> : null}
                <span>{label}</span>
              </a>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
