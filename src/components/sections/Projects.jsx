import { motion } from "framer-motion";
import projects from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-slate-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[4px] text-cyan-400">
            Portfolio
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Featured Projects
          </h2>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-cyan-400"></div>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            These projects showcase my frontend development skills using
            React, Tailwind CSS, JavaScript, Firebase, APIs, and responsive
            design principles.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
             key={project.title}
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: index * 0.15 }}
             viewport={{ once: true }}
            >
             <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;