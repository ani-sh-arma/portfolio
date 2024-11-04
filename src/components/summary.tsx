import { motion } from "framer-motion";

export function SummarySection() {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center max-w-4xl mx-auto space-y-8"
    >
      <h3 className="text-2xl font-semibold text-purple-400">About Me</h3>
      <p className="text-lg text-gray-300">
        I’m a developer with a passion for building things that make a
        difference. With hands-on experience in various technologies like{" "}
        <span className="text-purple-500">Flutter</span>,{" "}
        <span className="text-purple-500">React</span>, and{" "}
        <span className="text-purple-500">Django</span>, I have a strong
        foundation in both mobile and web development. I’m always looking for
        ways to enhance my skills, learn new frameworks, and contribute to
        meaningful projects.
      </p>

      <div className="space-y-4">
        <h4 className="text-xl font-semibold text-purple-400">My Philosophy</h4>
        <p className="text-gray-300">
          I believe in crafting user-centric experiences with a focus on
          simplicity and efficiency. For me, the goal is to balance innovation
          with functionality to create software that is intuitive, accessible,
          and enjoyable to use.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h4 className="text-lg font-bold text-purple-400">
            Hobbies & Interests
          </h4>
          <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
            <li>Exploring new technologies and frameworks</li>
            <li>Contributing to open-source projects</li>
            <li>Reading sci-fi and tech blogs</li>
            <li>Sketching and digital art</li>
          </ul>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h4 className="text-lg font-bold text-purple-400">
            My Favorite Projects
          </h4>
          <p className="text-gray-300 mt-4">
            From building chat applications to creating visually appealing
            portfolio websites, I enjoy working on projects that blend
            creativity with functionality.
          </p>
          <p className="mt-4 text-gray-400 italic">
            Check out some of my best work in the Projects section!
          </p>
        </div>
      </div>
    </motion.div>
  );
}
