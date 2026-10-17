import { motion } from "framer-motion";
import SkillCard from "../ui/SkillCard";
import skills from "../../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[4px] text-cyan-400">
            My Skills
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Technologies I Work With
          </h2>

          <div className="w-24 h-1 rounded-full bg-cyan-400 mx-auto mt-5"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={skill.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * .08,
              }}
              viewport={{
                once: true,
              }}
            >
              <SkillCard
                skill={skill}
              />
            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;