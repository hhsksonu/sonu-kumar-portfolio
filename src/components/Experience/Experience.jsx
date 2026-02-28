import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section id="experience" className="relative py-28" style={{ background: "rgba(255,255,255,0.01)" }}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--em)", fontFamily: "DM Sans" }}>
            Where I've Worked
          </p>
          <h2 className="font-syne font-extrabold text-4xl sm:text-5xl text-white">Experience</h2>
          <div className="w-12 h-0.5 mx-auto mt-5 rounded-full"
            style={{ background: "linear-gradient(90deg, var(--em), var(--em-light))", boxShadow: "0 0 12px rgba(16,185,129,0.5)" }} />
          <p className="mt-5 max-w-xl mx-auto text-base"
            style={{ color: "var(--text-muted)", fontFamily: "DM Sans" }}>
            Hands-on roles where I've delivered real impact through engineering and AI.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="glass-card p-7 sm:p-10">
              {/* Top */}
              <div className="flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-7">
                {/* Logo */}
                <div className="w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden"
                  style={{ border: "1px solid rgba(16,185,129,0.25)", background: "#fff" }}>
                  <img src={exp.img} alt={exp.company} className="w-full h-full object-cover" />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="font-syne font-bold text-xl text-white">{exp.role}</h3>
                      <p className="text-sm mt-0.5" style={{ color: "var(--text-muted)", fontFamily: "DM Sans" }}>{exp.company}</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold flex-shrink-0"
                      style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.25)", color: "var(--em-light)", fontFamily: "DM Sans" }}>
                      📅 {exp.date}
                    </span>
                  </div>

                  {/* Description */}
                  <div className="mt-5 space-y-1.5">
                    {exp.desc.trim().split("\n").filter(l => l.trim()).map((line, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm"
                        style={{ color: "var(--text-muted)", fontFamily: "DM Sans", lineHeight: "1.6" }}>
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: "var(--em)" }} />
                        <span>{line.trim()}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="tag-pill">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Open to work banner */}
        <div className="mt-12 p-6 rounded-2xl text-center"
          style={{ background: "linear-gradient(135deg, rgba(16,185,129,0.08), rgba(245,158,11,0.05))", border: "1px solid rgba(16,185,129,0.2)" }}>
          <p className="font-syne font-bold text-lg text-white mb-1">Open to New Opportunities</p>
          <p className="text-sm" style={{ color: "var(--text-muted)", fontFamily: "DM Sans" }}>
            Actively seeking Full-Stack / AI/ML / Data Science roles. Fresher with 6+ months intern experience.
          </p>
          <a href="#contact"
            className="inline-flex items-center gap-2 mt-4 px-6 py-2.5 rounded-xl text-sm font-semibold text-black"
            style={{ background: "linear-gradient(135deg, #10b981, #34d399)", fontFamily: "DM Sans" }}>
            Get in Touch →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
