import { motion } from "framer-motion";

const SkillCard = ({ skill }) => {
  const Icon = skill.icon;

  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{ duration: 0.3 }}
      className="group bg-slate-800 border border-slate-700 rounded-3xl p-8 hover:border-cyan-400 transition-all duration-300"
    >
      <div
        className={`text-6xl ${skill.color} group-hover:scale-110 transition duration-300`}
      >
        <Icon />
      </div>

      <h3 className="mt-6 text-2xl font-bold">
        {skill.title}
      </h3>

      <span className="inline-block mt-4 px-4 py-2 rounded-full bg-slate-700 text-sm text-slate-300">
        {skill.category}
      </span>
    </motion.div>
  );
};

export default SkillCard;