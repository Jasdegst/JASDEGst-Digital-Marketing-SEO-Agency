import {
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";

export default function Navbar() {
  const { dark, setDark } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        border-b
        border-black/10
        dark:border-white/10
        bg-white/70
        dark:bg-slate-950/70
        backdrop-blur-xl
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-5
          flex
          justify-between
          items-center
        "
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={
              dark
                ? "public/images/logo-white1.png"
                : "public/images/logo-black1.png"
            }
            alt="JASDEGst"
            className="h-10"
          />

          <h1
            className="
              text-xl
              font-bold
              text-slate-900
              dark:text-white
            "
          >
            JASDEGst
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul
            className="
              flex
              gap-6
              text-slate-700
              dark:text-gray-300
            "
          >
            <li>
              <a
                href="#hero"
                className="hover:text-cyan-500 transition"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#services"
                className="hover:text-cyan-500 transition"
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="hover:text-cyan-500 transition"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#articles"
                className="hover:text-cyan-500 transition"
              >
                Blog
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="hover:text-cyan-500 transition"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Dark Mode */}
          <button
            onClick={() => setDark(!dark)}
            className="
              p-3
              rounded-xl
              bg-black/5
              dark:bg-white/10
              hover:scale-105
              transition
            "
          >
            {dark ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-slate-800" />
            )}
          </button>
        </div>

        {/* Mobile Buttons */}
        <div className="flex md:hidden items-center gap-3">
          {/* Dark Mode */}
          <button
            onClick={() => setDark(!dark)}
            className="
              p-3
              rounded-xl
              bg-black/5
              dark:bg-white/10
            "
          >
            {dark ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-slate-800" />
            )}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              p-3
              rounded-xl
              bg-black/5
              dark:bg-white/10
            "
          >
            {menuOpen ? (
              <FaTimes />
            ) : (
              <FaBars />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden
          overflow-hidden
          transition-all
          duration-300
          ${
            menuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div
          className="
            px-6
            pb-6
            flex
            flex-col
            gap-5
            text-slate-700
            dark:text-gray-300
            bg-white
            dark:bg-slate-950
          "
        >
          <a
            href="#hero"
            onClick={() => setMenuOpen(false)}
            className="hover:text-cyan-500"
          >
            Home
          </a>

          <a
            href="#services"
            onClick={() => setMenuOpen(false)}
            className="hover:text-cyan-500"
          >
            Services
          </a>

          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="hover:text-cyan-500"
          >
            Projects
          </a>

          <a
            href="#articles"
            onClick={() => setMenuOpen(false)}
            className="hover:text-cyan-500"
          >
            Blog
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-cyan-500"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}