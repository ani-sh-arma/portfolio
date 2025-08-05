import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import { summaryInfo } from "../data/summaryData";

export function SummarySection() {
  const { name, role, description } = summaryInfo;

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

      <h2 className="text-3xl font-bold mb-12 text-center">{name}</h2>
      <h2 className="text-2xl text-gray-400 font-bold mb-4 text-center">
        {role}
      </h2>
      <p className="max-w-2xl mx-auto">{description}</p>
    </motion.div>
  );
}
