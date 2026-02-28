import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section id="education" className="relative py-28" style={{ background: "rgba(255,255,255,0.01)" }}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--em)", fontFamily: "DM Sans" }}>
            Academic Background
          </p>
          <h2 className="font-syne font-extrabold text-4xl sm:text-5xl text-white">Education</h2>
          <div className="w-12 h-0.5 mx-auto mt-5 rounded-full"
            style={{ background: "linear-gradient(90deg, var(--em), var(--em-light))", boxShadow: "0 0 12px rgba(16,185,129,0.5)" }} />
          <p className="mt-5 max-w-xl mx-auto text-base"
            style={{ color: "var(--text-muted)", fontFamily: "DM Sans" }}>
            A journey built on strong fundamentals, applied engineering, and analytical thinking.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(16,185,129,0.5) 10%, rgba(16,185,129,0.5) 90%, transparent)" }} />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <div key={edu.id} className="flex gap-6 sm:gap-8 group">
                {/* Timeline dot */}
                <div className="flex-shrink-0 relative z-10 flex items-start" style={{ width: "48px" }}>
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0"
                    style={{
                      border: "2px solid var(--em)",
                      background: "#fff",
                      boxShadow: "0 0 20px rgba(16,185,129,0.35)",
                    }}>
                    <img src={edu.logo} alt={edu.institute} className="w-full h-full object-contain" />
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 glass-card p-6 sm:p-8 mb-0">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-syne font-bold text-lg text-white leading-snug">{edu.degree}</h3>
                      <p className="text-sm mt-1" style={{ color: "var(--text-muted)", fontFamily: "DM Sans" }}>
                        {edu.institute}
                      </p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1.5 flex-shrink-0">
                      <span className="text-xs px-3 py-1.5 rounded-lg font-semibold"
                        style={{ background: "rgba(16,185,129,0.1)", color: "var(--em-light)", border: "1px solid rgba(16,185,129,0.25)", fontFamily: "DM Sans" }}>
                        {edu.date}
                      </span>
                      <span className="text-xs font-bold" style={{ color: "#f59e0b", fontFamily: "DM Sans" }}>
                        {edu.grade}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed mb-4"
                    style={{ color: "var(--text-muted)", fontFamily: "DM Sans" }}>
                    {edu.description}
                  </p>

                  {/* Highlights (only first edu) */}
                  {edu.highlights && edu.highlights.length > 0 && i === 0 && (
                    <div className="mb-4 space-y-1.5">
                      {edu.highlights.slice(0, 3).map((h, hi) => (
                        <div key={hi} className="flex items-start gap-2.5 text-xs"
                          style={{ color: "var(--text-muted)", fontFamily: "DM Sans" }}>
                          <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                            style={{ background: "var(--em)" }} />
                          {h}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5">
                    {edu.skills.map((skill, si) => (
                      <span key={si} className="tag-pill">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
