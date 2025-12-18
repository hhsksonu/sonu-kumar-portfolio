import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "work" },
    { name: "Education", id: "education" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-white">Sonu </span>
          <span className="text-greenPrimary drop-shadow-neon">Kumar</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-white font-semibold">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="hover:text-greenPrimary transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side: Hire Me + Burger */}
        <div className="flex items-center">
          {/* Hire Me Button */}
          <a
            href="#contact"
            className="bg-greenPrimary text-black px-4 py-2 rounded-md hover:shadow-lg hover:bg-white hover:text-black transition-all mr-[20px]"
          >
            Hire Me
          </a>

          {/* Burger Menu (Mobile) */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-3xl"
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-green-500/30">
          <ul className="flex flex-col items-center space-y-6 py-6 text-white font-semibold">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="hover:text-greenPrimary text-lg"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
