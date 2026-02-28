import React, { useState } from "react";
import { projects } from "../../constants";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

// Gradient placeholder colors for projects without images
const PLACEHOLDER_GRADIENTS = [
  "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
  "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
  "linear-gradient(135deg, #0d1117, #161b22, #10b981)",
  "linear-gradient(135deg, #0a0a0a, #1a1a2e, #f59e0b55)",
  "linear-gradient(135deg, #06090f, #0f2027, #34d399aa)",
  "linear-gradient(135deg, #1a0533, #2d1b69, #10b981)",
];

const PlaceholderImage = ({ id, title }) => {
  const grad = PLACEHOLDER_GRADIENTS[id % PLACEHOLDER_GRADIENTS.length];
  const initials = title
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center"
      style={{ background: grad }}
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center font-syne font-extrabold text-2xl mb-2"
        style={{
          background: "rgba(16,185,129,0.2)",
          border: "1px solid rgba(16,185,129,0.4)",
          color: "var(--em-light)",
        }}
      >
        {initials}
      </div>
      <p
        className="text-xs font-medium text-center px-4 leading-snug"
        style={{ color: "rgba(255,255,255,0.4)", fontFamily: "DM Sans" }}
      >
        Screenshot coming soon
      </p>
    </div>
  );
};

const Work = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="work" className="relative py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--em)", fontFamily: "DM Sans" }}
          >
            What I've Built
          </p>
          <h2 className="font-syne font-extrabold text-4xl sm:text-5xl text-white">
            Projects
          </h2>
          <div
            className="w-12 h-0.5 mx-auto mt-5 rounded-full"
            style={{
              background: "linear-gradient(90deg, var(--em), var(--em-light))",
              boxShadow: "0 0 12px rgba(16,185,129,0.5)",
            }}
          />
          <p
            className="mt-5 max-w-xl mx-auto text-base"
            style={{ color: "var(--text-muted)", fontFamily: "DM Sans" }}
          >
            High-impact projects built with performance, scalability, and clean
            engineering.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card group overflow-hidden flex flex-col"
            >
              {/* Image / Placeholder */}
              <div
                className="relative overflow-hidden flex-shrink-0"
                style={{ height: "180px" }}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <PlaceholderImage id={project.id} title={project.title} />
                )}
                {/* Top tag badge */}
                <div
                  className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-xs font-semibold"
                  style={{
                    background: "rgba(3,7,18,0.85)",
                    color: "var(--em-light)",
                    border: "1px solid rgba(16,185,129,0.3)",
                    backdropFilter: "blur(8px)",
                    fontFamily: "DM Sans",
                  }}
                >
                  {project.tags[0]}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3
                  className="font-syne font-bold text-base text-white mb-2 leading-snug"
                  style={{ lineHeight: "1.35" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm mb-4 leading-relaxed flex-1"
                  style={{
                    color: "var(--text-muted)",
                    fontFamily: "DM Sans",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 4).map((tag, i) => (
                    <span key={i} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="tag-pill">+{project.tags.length - 4}</span>
                  )}
                </div>

                {/* Action buttons always visible */}
                <div className="flex gap-2 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition-all"
                    style={{
                      border: "1px solid rgba(16,185,129,0.35)",
                      color: "var(--em-light)",
                      fontFamily: "DM Sans",
                      background: "transparent",
                    }}
                    onMouseEnter={(e) =>
                    (e.currentTarget.style.background =
                      "rgba(16,185,129,0.08)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "transparent")
                    }
                  >
                    <FaGithub className="text-sm" /> Code
                  </a>
                  {project.webapp && project.webapp !== "#" ? (
                    <a
                      href={project.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold text-black transition-all"
                      style={{
                        background: "linear-gradient(135deg, #10b981, #34d399)",
                        fontFamily: "DM Sans",
                      }}
                    >
                      <FaExternalLinkAlt className="text-xs" /> Live Demo
                    </a>
                  ) : (
                    <button
                      onClick={() => setSelected(project)}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition-all"
                      style={{
                        background: "rgba(16,185,129,0.08)",
                        border: "1px solid rgba(16,185,129,0.2)",
                        color: "var(--text-muted)",
                        fontFamily: "DM Sans",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--em-light)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--text-muted)")
                      }
                    >
                      Details →
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(12px)" }}
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-2xl w-full rounded-2xl overflow-hidden"
            style={{
              background: "var(--bg-card2)",
              border: "1px solid rgba(16,185,129,0.3)",
              boxShadow:
                "0 0 80px rgba(16,185,129,0.15), 0 40px 80px rgba(0,0,0,0.6)",
              maxHeight: "90vh",
              overflowY: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full transition-colors"
              style={{ background: "rgba(255,255,255,0.1)", color: "white" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(16,185,129,0.3)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "rgba(255,255,255,0.1)")
              }
            >
              <FaTimes className="text-sm" />
            </button>

            {/* Image */}
            <div style={{ height: "220px", overflow: "hidden", position: "relative" }}>
              {selected.image ? (
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <PlaceholderImage id={selected.id} title={selected.title} />
              )}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "80px",
                  background:
                    "linear-gradient(to top, rgba(15,23,42,1) 0%, transparent 100%)",
                }}
              />
            </div>

            {/* Body */}
            <div className="p-7">
              <h3 className="font-syne font-extrabold text-2xl text-white mb-3">
                {selected.title}
              </h3>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "var(--text-muted)", fontFamily: "DM Sans" }}
              >
                {selected.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-7">
                {selected.tags.map((tag, i) => (
                  <span key={i} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all"
                  style={{
                    border: "1px solid rgba(16,185,129,0.4)",
                    color: "var(--em-light)",
                    fontFamily: "DM Sans",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "rgba(16,185,129,0.08)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "transparent")
                  }
                >
                  <FaGithub /> View Code
                </a>
                {selected.webapp && selected.webapp !== "#" ? (
                  <a
                    href={selected.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-black transition-all"
                    style={{
                      background: "linear-gradient(135deg, #10b981, #34d399)",
                      fontFamily: "DM Sans",
                    }}
                  >
                    <FaExternalLinkAlt className="text-xs" /> Live Demo
                  </a>
                ) : (
                  <span
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      color: "var(--text-muted)",
                      fontFamily: "DM Sans",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    No live demo
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;