import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "work" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(3,7,18,0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(16,185,129,0.12)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <a href="#about" className="flex items-center gap-2 group">
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold font-syne"
              style={{
                background: "linear-gradient(135deg, #10b981, #34d399)",
                color: "#000",
              }}
            >
              SK
            </span>
            <span className="font-syne font-700 text-white text-base tracking-wide hidden sm:block">
              Sonu <span style={{ color: "var(--em-light)" }}>Kumar</span>
            </span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="nav-link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + Burger */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-black transition-all duration-200 hover:shadow-em-glow-sm"
              style={{
                background: "linear-gradient(135deg, #10b981, #34d399)",
                fontFamily: "DM Sans, sans-serif",
              }}
            >
              Hire Me
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-white text-xl transition-colors"
              style={{ background: "rgba(255,255,255,0.06)" }}
            >
              {open ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className="md:hidden overflow-hidden transition-all duration-400"
          style={{
            maxHeight: open ? "400px" : "0",
            background: "rgba(3,7,18,0.97)",
            backdropFilter: "blur(24px)",
            borderTop: open ? "1px solid rgba(16,185,129,0.1)" : "none",
          }}
        >
          <ul className="flex flex-col items-center gap-5 py-6">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="nav-link text-base"
                  style={{ letterSpacing: "0.06em" }}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="px-6 py-2.5 rounded-lg text-sm font-semibold text-black"
                style={{ background: "linear-gradient(135deg, #10b981, #34d399)" }}
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
