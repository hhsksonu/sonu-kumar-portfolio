import React from "react";
import devImage from "../../assets/profile2.png";
import resumePDF from "../../assets/resume/Sonu_Kumar_Resume.pdf";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowRight } from "react-icons/fa";

const stats = [
  { value: "6+", label: "Months Experience" },
  { value: "10+", label: "Projects Built" },
  { value: "15+", label: "Technologies" },
  { value: "95%", label: "Model Accuracy" },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center"
      style={{ paddingTop: "6rem", paddingBottom: "5rem" }}
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* LEFT */}
          <div className="w-full lg:w-[55%] space-y-6 fade-up">

            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium d1 fade-up"
              style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)", color: "var(--em-light)", fontFamily: "DM Sans, sans-serif" }}>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping"
                  style={{ background: "var(--em)" }} />
                <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: "var(--em)" }} />
              </span>
              Available for Hire · Immediate Joiner
            </div>

            {/* Heading */}
            <div className="fade-up d2">
              <p className="text-sm font-medium uppercase tracking-widest mb-2"
                style={{ color: "var(--text-muted)", fontFamily: "DM Sans" }}>
                Hello, I'm
              </p>
              <h1 className="font-syne font-extrabold text-5xl sm:text-6xl md:text-7xl leading-[1.05] text-white">
                Sonu
              </h1>
              <h1 className="font-syne font-extrabold text-5xl sm:text-6xl md:text-7xl leading-[1.05] gradient-text">
                Kumar
              </h1>
              <h2 className="font-syne text-xl sm:text-2xl font-semibold mt-3"
                style={{ color: "var(--text-muted)" }}>
                Full-Stack + AI/ML Engineer
              </h2>
            </div>

            {/* Sub-info */}
            <div className="flex flex-wrap gap-3 fade-up d3">
              {["📍 Pune, India · Willing to Relocate", "🎓 MCA · DY Patil University · CGPA 8.2"].map((item) => (
                <span key={item}
                  className="text-xs px-3 py-1.5 rounded-full"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "var(--text-muted)" }}>
                  {item}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-base leading-relaxed max-w-lg fade-up d3"
              style={{ color: "var(--text-muted)", fontFamily: "DM Sans" }}>
              I build scalable web applications and production-ready AI systems. Passionate about turning complex problems into clean, impactful solutions — from full-stack platforms to ML pipelines with real-world results.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 fade-up d4">
              <a href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-black transition-all hover:shadow-em-glow"
                style={{ background: "linear-gradient(135deg, #10b981, #34d399)", fontFamily: "DM Sans" }}>
                Get in Touch <FaArrowRight className="text-xs" />
              </a>
              <a href={resumePDF} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:bg-white/5"
                style={{ border: "1px solid rgba(16,185,129,0.4)", color: "var(--em-light)", fontFamily: "DM Sans" }}>
                <FaDownload className="text-xs" /> View Resume
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4 fade-up d5">
              {[
                { icon: <FaGithub />, href: "https://github.com/hhsksonu/", label: "GitHub" },
                { icon: <FaLinkedin />, href: "https://linkedin.com/in/hhsksonu/", label: "LinkedIn" },
                { icon: <FaEnvelope />, href: "mailto:sonukumaryz463@gmail.com", label: "Email" },
              ].map(({ icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-xl text-lg transition-all hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "var(--text-muted)" }}
                  onMouseEnter={e => { e.currentTarget.style.color = "var(--em-light)"; e.currentTarget.style.borderColor = "var(--em)"; e.currentTarget.style.background = "rgba(16,185,129,0.1)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}>
                  {icon}
                </a>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 pt-4 fade-up d5">
              {stats.map(({ value, label }) => (
                <div key={label} className="p-4 rounded-xl text-center"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <p className="font-syne font-bold text-2xl" style={{ color: "var(--em-light)" }}>{value}</p>
                  <p className="text-xs mt-1" style={{ color: "var(--text-muted)", fontFamily: "DM Sans" }}>{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT – Profile Image */}
          <div className="w-full lg:w-[45%] flex justify-center fade-up d2">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-3xl"
                style={{ background: "linear-gradient(135deg, rgba(16,185,129,0.3), rgba(245,158,11,0.15))", filter: "blur(40px)", transform: "scale(1.1)" }} />
              {/* Image frame */}
              <div className="relative rounded-3xl overflow-hidden float-anim"
                style={{
                  border: "1px solid rgba(16,185,129,0.3)",
                  boxShadow: "0 0 60px rgba(16,185,129,0.2), 0 30px 60px rgba(0,0,0,0.5)",
                }}>
                <img
                  src={devImage}
                  alt="Sonu Kumar"
                  className="w-[280px] sm:w-[340px] lg:w-[400px] object-cover block"
                />
                {/* Bottom overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-24"
                  style={{ background: "linear-gradient(to top, rgba(3,7,18,0.7), transparent)" }} />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 px-4 py-2.5 rounded-xl text-xs font-semibold"
                style={{ background: "rgba(3,7,18,0.9)", border: "1px solid rgba(16,185,129,0.4)", backdropFilter: "blur(12px)", color: "var(--em-light)", fontFamily: "DM Sans" }}>
                🤖 AI/ML + Full-Stack
              </div>
              <div className="absolute -top-4 -left-4 px-4 py-2.5 rounded-xl text-xs font-semibold"
                style={{ background: "rgba(3,7,18,0.9)", border: "1px solid rgba(245,158,11,0.4)", backdropFilter: "blur(12px)", color: "#f59e0b", fontFamily: "DM Sans" }}>
                ⚡ Fresher · Open to Work
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
