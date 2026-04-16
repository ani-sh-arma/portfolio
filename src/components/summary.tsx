import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import { summaryInfo } from "../data/summaryData";

const highlights = [
  "Frontend Architecture",
  "Motion-rich UI",
  "Mobile + Web",
  "Performance-led Development",
];

export function SummarySection() {
  const { name, role, description } = summaryInfo;

  return (
    <div className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]"
      >
        <div>
          <p className="section-kicker">About</p>
          <h1 className="hero-title mt-4">{name}</h1>
          <h2 className="mt-4 text-2xl font-semibold text-slate-100 md:text-3xl">{role}</h2>
          <p className="mt-4 text-sm uppercase tracking-[0.24em] text-cyan-100/65">
            Crafting digital products with cosmic precision.
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200/80 md:text-lg">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {highlights.map((item) => (
              <span key={item} className="pill-chip">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="orbit-ring" aria-hidden="true" />
          <motion.img
            src={profile}
            alt={name}
            className="profile-image"
            initial={{ scale: 0.92, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
      </motion.div>
    </div>
  );
}
