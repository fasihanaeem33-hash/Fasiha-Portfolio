import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const TimelineCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -80 : 80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative flex items-start gap-6"
    >
      {/* Circle */}

      <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500 text-white shadow-lg shadow-cyan-500/30">
        <FaGraduationCap size={22} />
      </div>

      {/* Card */}

      <div className="flex-1 rounded-3xl border border-slate-700 bg-slate-800 p-6 transition-all duration-300 hover:border-cyan-400 hover:-translate-y-1">
        <span className="inline-block rounded-full bg-cyan-500/20 px-3 py-1 text-sm font-medium text-cyan-300">
          {item.year}
        </span>

        <h3 className="mt-4 text-2xl font-bold">
          {item.title}
        </h3>

        <p className="mt-2 font-medium text-cyan-400">
          {item.institute}
        </p>

        <p className="mt-4 leading-7 text-slate-300">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export default TimelineCard;