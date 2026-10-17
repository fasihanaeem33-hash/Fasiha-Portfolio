import { motion } from "framer-motion";
import education from "../../data/education";
import TimelineCard from "../ui/TimelineCard";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-8 lg:px-12"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[4px] text-cyan-400">
            Education
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Learning Journey
          </h2>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-cyan-400"></div>
        </motion.div>

        {/* Timeline */}

        <div className="relative mt-20">

          {/* Vertical Line */}

          <div className="absolute left-7 top-0 h-full w-1 rounded-full bg-slate-700"></div>

          <div className="space-y-8">
            {education.map((item, index) => (
              <TimelineCard
                key={index}
                item={item}
                index={index}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;