import { useState } from "react";
import { Link } from "react-scroll";

import {
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
} from "react-icons/fa";

import useTheme from "../../hooks/useTheme";

const links = [
  "Home",
  "About",
  "Skills",
  "Education",
  "Experience",
  "Achievements",
  "Projects",
  "Contact",
  "Footer",
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center h-20">

          {/* Logo */}

          <h1 className="text-2xl font-bold cursor-pointer">

            <span className="text-cyan-400">
              Fasiha
            </span>

            {" "}

            Naeem

          </h1>

          {/* Desktop */}

          <ul className="hidden lg:flex gap-8">

            {links.map((item) => (

              <li key={item}>

                <Link
                  to={item.toLowerCase()}
                  smooth
                  duration={500}
                  offset={-70}
                  className="cursor-pointer text-slate-300 hover:text-cyan-400 transition"
                >
                  {item}
                </Link>

              </li>

            ))}

          </ul>

          {/* Right */}

          <div className="flex items-center gap-4">

            <button
              onClick={toggleTheme}
              className="text-xl hover:text-cyan-400 transition"
            >
              {theme === "dark"
                ? <FaSun />
                : <FaMoon />}
            </button>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-2xl"
            >
              {open
                ? <FaTimes />
                : <FaBars />}
            </button>

          </div>

        </div>

      </div>

      {/* Mobile */}

      {open && (

        <div className="lg:hidden bg-slate-900 border-t border-slate-800">

          {links.map((item) => (

            <Link
              key={item}
              to={item.toLowerCase()}
              smooth
              duration={500}
              offset={-70}
              onClick={() => setOpen(false)}
              className="block py-4 px-6 border-b border-slate-800 cursor-pointer hover:bg-slate-800"
            >
              {item}
            </Link>

          ))}

        </div>

      )}

    </header>
  );
};

export default Navbar;