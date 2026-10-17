import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaGraduationCap,
  FaAward,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaCode />,
    number: "10+",
    title: "Projects Completed",
  },
  {
    icon: <FaLaptopCode />,
    number: "1+",
    title: "Years Learning",
  },
  {
    icon: <FaGraduationCap />,
    number: "3",
    title: "Professional Trainings",
  },
  {
    icon: <FaAward />,
    number: "100%",
    title: "Dedication",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 uppercase tracking-[4px]">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Know Me Better
          </h2>

          <div className="w-24 h-1 bg-cyan-400 rounded-full mx-auto mt-5"></div>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >
            <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 hover:border-cyan-400 transition">

              <h3 className="text-3xl font-bold mb-6">
                Fasiha Muhammad Naeem
              </h3>

              <h4 className="text-cyan-400 text-xl mb-5">
                Frontend React Developer
                <br />
                Backend Learner
              </h4>

              <p className="text-slate-300 leading-8">

                I am a passionate Frontend & Backend Learner with hands-on
                experience in creating modern, responsive and
                user-friendly web applications.

                <br /><br />

                My expertise includes HTML, CSS, JavaScript,
                React.js, Tailwind CSS, Firebase and Git/GitHub.

                <br /><br />

                I completed Frontend Web Development,
                Microsoft Office and Artificial Intelligence
                training from Saylani Mass IT Training.

                <br /><br />

                Currently I am Learning Backend Development and looking for a Frontend Developer
                Internship where I can contribute my skills,
                gain real-world experience and continue growing
                as a software developer.

              </p>

            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >

            <div className="grid grid-cols-2 gap-6">

              {stats.map((item, index) => (

                <motion.div
                  key={index}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  className="bg-slate-800 border border-slate-700 rounded-2xl p-8 text-center hover:border-cyan-400 transition"
                >

                  <div className="text-cyan-400 text-4xl flex justify-center mb-5">
                    {item.icon}
                  </div>

                  <h3 className="text-4xl font-bold">
                    {item.number}
                  </h3>

                  <p className="text-slate-400 mt-3">
                    {item.title}
                  </p>

                </motion.div>

              ))}

            </div>

            {/* Info */}

            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 mt-8">

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <h4 className="text-cyan-400 font-semibold">
                    Name
                  </h4>

                  <p className="mt-2 text-slate-300">
                    Fasiha Muhammad Naeem
                  </p>
                </div>

                <div>
                  <h4 className="text-cyan-400 font-semibold">
                    Email
                  </h4>

                  <p className="mt-2 text-slate-300">
                    fasihanaeem33@gmail.com
                  </p>
                </div>

                {/*<div>
                  <h4 className="text-cyan-400 font-semibold">
                    Phone
                  </h4>

                  <p className="mt-2 text-slate-300">
                    +92 310 2647177
                  </p>
                </div>*/}

                <div>
                  <h4 className="text-cyan-400 font-semibold">
                    Looking For
                  </h4>

                  <p className="mt-2 text-slate-300">
                    Frontend Internship
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;