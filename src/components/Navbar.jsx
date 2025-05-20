import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "../context/ThemeContext.jsx";
import Button from "./common/Button/Button";
// import { GetInTouchIcon, Logo, GetInTouchHover } from "../../assets/assets";
import { Menu, X } from "lucide-react";

const navLinks = ["Home", "Products", "About", "Testimonials", "Contact Us"];

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <div className="pt-8 lg:pt-12 mx-auto max-w-7xl">
      <nav
        id="navbar"
        className={`rounded-2xl p-4 mx-4 shadow-[var(--shadow-default)] transition-colors duration-300 z-50 ${
          darkMode
            ? "bg-[var(--dark-bg)] text-[var(--dark-nav-default)]"
            : "bg-[var(--light-bg)] text-[var(--color-text)]"
        }`}
      >
        <div className="container mx-auto max-w-7xl flex justify-between items-center relative">
          <a href="/">
            {/* <img src={Logo} alt="Logo" className="h-8" /> */}
            Kunj
          </a>

          <ul className="hidden md:flex space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="hover:underline transition-colors duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggleButton darkMode={darkMode} toggleTheme={toggleTheme} />

    
          </div>

          <div className=" md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              className="focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X
                  className={`h-8 w-8 transition-colors duration-300 cursor-pointer ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                />
              ) : (
                <Menu
                  className={`h-8 w-8 transition-colors duration-300 cursor-pointer ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            ref={menuRef}
            className="absolute top-full transition-colors duration-300 left-0 w-full md:hidden mt-6 px-4 md:px-0 z-50"
          >
            <div
              className={`w-full max-w-7xl mx-auto transition-colors duration-300 rounded-xl backdrop-blur-xl shadow-lg p-6 flex flex-col items-start space-y-4 ${
                darkMode ? "bg-[var(--dark-bg)]" : "bg-[var(--light-bg)]"
              }`}
            >
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-base font-medium hover:underline w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link}
                </a>
              ))}

              <div className="flex flex-col items-start space-y-4 mt-4">
                <ThemeToggleButton darkMode={darkMode} toggleTheme={toggleTheme} />

        
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

const ThemeToggleButton = ({ darkMode, toggleTheme }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={toggleTheme}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Toggle Theme"
      className={`p-2 rounded-full cursor-pointer transition-colors duration-300 ${
        darkMode
          ? "hover:bg-[var(--dark-toggle-hover)]"
          : "hover:bg-[var(--light-toggle-hover)]"
      }`}
    >
      {darkMode
        ? isHovered
          ? <SunIconHover />
          : <SunIcon />
        : isHovered
        ? <MoonIconHover />
        : <MoonIcon />}
    </button>
  );
};

const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-yellow-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

const SunIconHover = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-black"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-gray-700"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
);

const MoonIconHover = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
);

export default Navbar;
