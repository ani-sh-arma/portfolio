import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

export function SummarySection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center max-w-4xl mx-auto space-y-8"
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
  );
}
