import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowDown,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 flex items-center pt-24"

    >
      {/* Glow */}

      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-600/20 blur-[140px]" />

      <div className="max-w-7xl mx-auto px-8 lg:px-12 w-full grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: .8 }}
        >

          <p className="text-cyan-400 text-lg font-semibold mb-4">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Fasiha
            <br />
            Muhammad Naeem
          </h1>

          <div className="text-2xl md:text-3xl font-semibold mt-6 text-cyan-400">

            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "React Developer",
                2000,
                "JavaScript Developer",
                2000,
                "Backend Learner",
                2000,
              ]}
              repeat={Infinity}
            />

          </div>

          <p className="mt-8 max-w-xl text-slate-300 leading-8">
            Passionate Frontend & Backend Learner specializing in
            React, JavaScript and Tailwind CSS.
            I build modern, responsive and user-friendly
            web applications.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            {/*<a
              href="/Fasiha_Resume.pdf"
              download="Fasiha_Muhammad_Naeem_Resume.pdf"
              className="px-7 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition flex items-center gap-3 font-semibold"
            >
              <FaDownload />
              Resume
            </a>*/}

            <a
              href="#contact"
              className="px-7 py-4 rounded-xl border border-cyan-500 hover:bg-cyan-500 transition"
            >
              Hire Me
            </a>

          </div>

          <div className="flex gap-5 mt-10">

            <a
              href="https://github.com/fasihanaeem33-hash"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-slate-800 hover:bg-cyan-500 flex justify-center items-center transition"
            >
              <FaGithub size={20}/>
            </a>

            <a
              href="https://www.linkedin.com/in/fasiha-muhammad-naeem-503363385"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-slate-800 hover:bg-cyan-500 flex justify-center items-center transition"
            >
              <FaLinkedin size={20}/>
            </a>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: .8 }}
          className="flex justify-center"
        >

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-20 animate-pulse"/>

            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full border-4 border-cyan-500 bg-slate-900 flex justify-center items-center">

              <div className="text-center">

                <h2 className="text-4xl font-bold">
                  React
                </h2>

                <p className="mt-3 text-slate-400">
                  Frontend Developer
                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">

        <FaArrowDown
          size={24}
          className="text-cyan-400"
        />

      </div>

    </section>
  );
};

export default Hero;