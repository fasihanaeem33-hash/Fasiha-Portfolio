import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -12 }}
      transition={{ duration: 0.35 }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 shadow-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-cyan-500/20"
    >
      {/* Image */}

      <div className="relative overflow-hidden">

        <img
          src={project.image}
          alt={project.title}
          className="h-64 w-full object-cover duration-700 group-hover:scale-110"
        />

        {/* Overlay */}

        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-500 group-hover:bg-black/60">

          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="translate-y-8 rounded-full bg-cyan-500 px-6 py-3 font-semibold text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
          >
            View Project
          </a>

        </div>

        {/* Featured */}

        {project.featured && (
          <div className="absolute left-5 top-5 rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-white">
            ★ Featured
          </div>
        )}

      </div>

      {/* Content */}

      <div className="flex flex-1 flex-col p-7">

        <h3 className="text-2xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mt-4 flex-1 leading-7 text-slate-400">
          {project.description}
        </p>

        {/* Tech */}

        <div className="mt-6 flex flex-wrap gap-2">

          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300"
            >
              {tech}
            </span>
          ))}

        </div>

        {/* Buttons */}

        <div className="mt-8 flex gap-4">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-800 py-3 font-semibold text-white transition hover:bg-slate-700"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-cyan-500 py-3 font-semibold text-white transition hover:bg-cyan-600"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>

        </div>

      </div>
    </motion.div>
  );
};

export default ProjectCard;