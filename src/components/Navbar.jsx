import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        if (window.pageYOffset >= sectionTop) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed bg-[#022623] top-0 w-full z-50 backdrop-blur-md border-b border-white/20 px-3 transition-all">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        <div className="text-cyan-400 p-2 border-cyan-400 border rounded-full tracking-widest">
          <span className="text-md stroke-text font-normal">VP</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex space-x-8 text-white text-sm font-semibold uppercase">
          {navItems.map((item) => (
            <li key={item.id} className="relative cursor-pointer group">
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                  closeMenu();
                }}
                className={`hover:text-teal-400 transition-colors duration-300 ${
                  activeSection === item.id ? "text-teal-400 font-bold" : ""
                }`}
              >
                {item.label}
              </a>
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-teal-400 transition-all duration-300 ease-in-out ${
                  activeSection === item.id
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </li>
          ))}
        </ul>

        {/* Hire Me Button */}
        <button
          onClick={() => scrollToSection("contact")}
          className="hidden sm:inline ml-4 py-1 px-4 rounded-full bg-gradient-to-r from-teal-500 to-teal-700 hover:opacity-90 text-white font-medium transition-all"
        >
          Hire Me
        </button>

        {/* Hamburger Icon */}
        <div
          className="sm:hidden text-white text-2xl cursor-pointer"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="sm:hidden bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 text-white uppercase font-semibold flex flex-col space-y-4 px-6 py-4 border-t border-white/20">
          {navItems.map((item) => (
            <li key={item.id} className="cursor-pointer">
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                  closeMenu();
                }}
                className="block hover:text-teal-400"
              >
                {item.label}
              </a>
            </li>
          ))}

          <li>
            <button
              onClick={() => {
                scrollToSection("contact");
                closeMenu();
              }}
              className="w-full py-2 rounded-full bg-gradient-to-r from-teal-500 to-teal-700 hover:opacity-90 font-medium"
            >
              Hire Me
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
