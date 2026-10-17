import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaBuilding,
  FaCheckCircle,
} from "react-icons/fa";

const responsibilities = [
  "Managing daily accounting operations and financial records.",
  "Preparing vouchers, invoices, payroll and bank reconciliations.",
  "Handling office administration and documentation.",
  "Managing client communication and team coordination.",
  "Preparing financial reports and maintaining accurate records.",
  "Ensuring smooth administrative and accounting workflows.",
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-slate-950 py-28"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 xl:px-20">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-cyan-400">
            Professional Journey
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
            Work Experience
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            More than <span className="font-semibold text-cyan-400">5 years</span> of
            professional experience in Accounts, Finance and Administration,
            while continuously enhancing my Frontend Development skills with
            modern technologies.
          </p>
        </motion.div>

        {/* Main Card */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ y: -8 }}
          className="overflow-hidden rounded-32px border border-slate-700 bg-linear-to-br from-slate-900 to-slate-800 p-8 shadow-2xl transition-all duration-500 hover:border-cyan-400 hover:shadow-cyan-500/20 md:p-12 lg:p-14"
        >
          {/* Top */}

          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <div className="flex items-center gap-3 text-cyan-400">

                <FaBriefcase size={22} />

                <span className="font-semibold uppercase tracking-[2px]">
                  Current Position
                </span>

              </div>

              <h3 className="mt-5 text-3xl font-bold text-white md:text-4xl">
                Admin & Accounts Manager
              </h3>

              <div className="mt-5 flex items-center gap-3 text-lg text-slate-300">

                <FaBuilding className="text-cyan-400" />

                <span>Jafri & Associates Private Limited</span>

              </div>

            </div>

            {/* Duration */}

            <div className="rounded-3xl border border-cyan-500/30 bg-cyan-500/10 px-10 py-8 text-center">

              <FaCalendarAlt className="mx-auto mb-4 text-3xl text-cyan-400" />

              <p className="text-sm uppercase tracking-wider text-slate-400">
                Duration
              </p>

              <h4 className="mt-2 text-2xl font-bold text-white">
                2019 – Present
              </h4>

              <p className="mt-3 font-semibold text-cyan-400">
                5+ Years Experience
              </p>

            </div>

          </div>

          {/* Divider */}

          <div className="my-12 h-px bg-slate-700"></div>

          {/* Description */}

          <p className="text-lg leading-9 text-slate-300">
            Currently working as an{" "}
            <span className="font-semibold text-white">
              Admin & Accounts Manager
            </span>{" "}
            at <span className="text-cyan-400">Jafri & Associates Private Limited</span>.
            My responsibilities include accounting operations, payroll,
            financial reporting, office administration, documentation,
            client coordination and maintaining accurate financial records.
            Alongside my professional career, I completed Frontend Web
            Development and Artificial Intelligence & Data Science training
            and am actively seeking opportunities as a Frontend Developer.
          </p>

          {/* Responsibilities */}

          <div className="mt-14">

            <h4 className="mb-8 text-3xl font-bold text-white">
              Key Responsibilities
            </h4>

            <div className="grid gap-6 md:grid-cols-2">

              {responsibilities.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -5 }}
                  className="flex items-start gap-4 rounded-2xl border border-slate-700 bg-slate-800/70 p-6 transition-all duration-300 hover:border-cyan-400 hover:bg-slate-800"
                >
                  <FaCheckCircle
                    className="mt-1 text-cyan-400"
                    size={18}
                  />

                  <p className="leading-7 text-slate-300">
                    {item}
                  </p>

                </motion.div>
              ))}

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Experience;