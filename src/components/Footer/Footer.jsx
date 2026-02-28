import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaYoutube, FaHeart } from "react-icons/fa";

const Footer = () => {
  const links = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "work" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ];

  const socials = [
    { icon: <FaGithub />, href: "https://github.com/hhsksonu/", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://linkedin.com/in/hhsksonu/", label: "LinkedIn" },
    { icon: <FaTwitter />, href: "https://twitter.com/hhsksonu", label: "Twitter" },
    { icon: <FaInstagram />, href: "https://instagram.com/hhsksonu/", label: "Instagram" },
    { icon: <FaYoutube />, href: "https://youtube.com/hhsksonu", label: "YouTube" },
  ];

  return (
    <footer className="relative pt-16 pb-8"
      style={{ borderTop: "1px solid rgba(16,185,129,0.1)", background: "rgba(255,255,255,0.01)" }}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Top */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold font-syne"
                style={{ background: "linear-gradient(135deg, #10b981, #34d399)", color: "#000" }}>
                SK
              </div>
              <span className="font-syne font-bold text-xl text-white">
                Sonu <span style={{ color: "var(--em-light)" }}>Kumar</span>
              </span>
            </div>
            <p className="text-sm max-w-xs" style={{ color: "var(--text-muted)", fontFamily: "DM Sans", lineHeight: "1.7" }}>
              Full-Stack + AI/ML Engineer. Building scalable systems and intelligent products.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {links.map((link) => (
              <a key={link.id} href={`#${link.id}`}
                className="text-sm transition-colors"
                style={{ color: "var(--text-muted)", fontFamily: "DM Sans" }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--em-light)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}>
                {link.name}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex gap-3">
            {socials.map(({ icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                title={label}
                className="w-9 h-9 flex items-center justify-center rounded-lg text-sm transition-all"
                style={{ background: "rgba(255,255,255,0.05)", color: "var(--text-muted)", border: "1px solid rgba(255,255,255,0.06)" }}
                onMouseEnter={e => { e.currentTarget.style.color = "var(--em-light)"; e.currentTarget.style.borderColor = "rgba(16,185,129,0.3)"; e.currentTarget.style.background = "rgba(16,185,129,0.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}>
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-7" style={{ background: "rgba(255,255,255,0.06)" }} />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ color: "var(--text-muted)", fontFamily: "DM Sans" }}>
          <p>© 2025 Sonu Kumar. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <FaHeart className="text-red-400 text-xs" /> using React + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
