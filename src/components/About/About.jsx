import React from "react";
import devImage from "../../assets/profile2.png";
import resumePDF from "../../assets/resume/Sonu_Kumar_Resume.pdf";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReact,
  FaPython,
  FaDatabase,
  FaCogs,
} from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center text-white relative overflow-hidden"
    >
      {/* gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 via-transparent to-green-500/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-5 md:px-6 relative z-10 gap-14">

        {/* LEFT */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">

          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-green-900/40 px-4 py-1 rounded-full text-xs sm:text-sm mx-auto md:mx-0">
            <span className="text-yellow-400">★</span>
            <span className="text-gray-200">
              Full-Stack + AI Engineer | Fresher | Immediate Joiner
            </span>
          </span>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-green-400">
            Full-Stack + AI Engineer
          </h1>

          {/* Status */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 text-xs sm:text-sm text-gray-300">
            <span className="px-3 py-1 border border-green-400/40 rounded-full">
              🟢 Available for Hire
            </span>
            <span className="px-3 py-1 border border-green-400/40 rounded-full">
              📍 Pune, India | Willing to Relocate
            </span>
          </div>

          {/* Education */}
          <p className="text-green-300 font-semibold text-sm">
            MCA Postgraduate 2025 · 8.5 CGPA · DY Patil University
          </p>

          <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto md:mx-0">
            Building scalable web applications and production-ready AI systems
            with modern technologies.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
            <a
              href="#contact"
              className="bg-green-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-300 transition text-center"
            >
              Get in Touch
            </a>

            <a
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-green-400 text-green-400 px-6 py-3 rounded-lg font-semibold hover:bg-green-400 hover:text-black transition text-center"
            >
              View Resume
            </a>
          </div>

          {/* Social */}
          <div className="flex gap-6 text-2xl justify-center md:justify-start pt-2">
            <a href="https://github.com/hhsksonu/" target="_blank" className="hover:text-green-400">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/hhsksonu/" target="_blank" className="hover:text-green-400">
              <FaLinkedin />
            </a>
            <a href="mailto:sonukumaryz463@gmail.com" className="hover:text-green-400">
              <FaEnvelope />
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center md:justify-start gap-8 pt-6">
            {[
              ["6+", "Months Experience"],
              ["10+", "Projects"],
              ["10+", "Technologies"],
              ["95%", "Model Accuracy"],
            ].map(([value, label]) => (
              <div key={label} className="text-center md:text-left">
                <p className="text-green-400 text-xl font-bold">{value}</p>
                <p className="text-gray-400 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2 flex justify-center relative">

          {/* floating icons (hidden on very small screens) */}
          <FaReact className="hidden sm:block absolute -top-6 left-10 text-green-400 text-3xl animate-pulse" />
          <FaPython className="hidden sm:block absolute top-10 -left-6 text-green-400 text-3xl animate-pulse" />
          <FaDatabase className="hidden sm:block absolute bottom-10 -left-4 text-green-400 text-3xl animate-pulse" />
          <FaCogs className="hidden sm:block absolute bottom-0 right-6 text-green-400 text-3xl animate-pulse" />

          {/* Image */}
          <div className="rounded-xl overflow-hidden border border-green-400/40 shadow-[0_0_30px_rgba(34,197,94,0.35)]">
            <img
              src={devImage}
              alt="Developer"
              className="w-[260px] sm:w-[320px] md:w-[420px] object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
