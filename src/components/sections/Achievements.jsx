import { motion } from "framer-motion";
import achievements from "../../data/achievements";

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="py-24 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-widest font-semibold">
            Highlights
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Achievements
          </h2>

          <p className="text-slate-400 mt-5 max-w-3xl mx-auto leading-8">
            A quick overview of my professional journey, technical skills,
            certifications and development experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="rounded-3xl border border-slate-700 bg-slate-950 p-8 text-center hover:border-cyan-400 transition-all"
            >
              <h3 className="text-5xl font-bold text-cyan-400">
                {item.number}
              </h3>

              <h4 className="text-xl font-semibold mt-5">
                {item.title}
              </h4>

              <p className="text-slate-400 mt-4 leading-7">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Achievements;