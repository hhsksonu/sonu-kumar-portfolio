import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-black text-white py-10 px-[12vw] md:px-[7vw] lg:px-[20vw]">

      <div className="relative text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-extrabold text-[#00ff88] tracking-wide">
          SONU KUMAR
        </h2>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="
                text-sm sm:text-base text-gray-400
                hover:text-[#00ff88]
                transition
              "
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-6">
          {[
            {
              icon: <FaFacebook />,
              link: "https://www.facebook.com/hhsksonu/",
            },
            {
              icon: <FaTwitter />,
              link: "https://twitter.com/hhsksonu",
            },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/hhsksonu/",
            },
            {
              icon: <FaInstagram />,
              link: "https://www.instagram.com/hhsksonu/",
            },
            {
              icon: <FaYoutube />,
              link: "https://www.youtube.com/hhsksonu",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-xl text-gray-400
                hover:text-[#00ff88]
                hover:scale-110
                hover:drop-shadow-[0_0_8px_#00ff88]
                transition-all
              "
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 mt-6">
          © 2025 Sonu Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
