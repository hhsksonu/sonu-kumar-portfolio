import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="work"
      className="relative py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] bg-[#060c18] font-sans"
    >

      {/* Section Title */}
      <div className="relative text-center mb-16">
        <h2 className="text-4xl font-extrabold text-white tracking-wider">
          PROJECTS
        </h2>
        <div className="w-32 h-1 bg-[#00ff88] mx-auto mt-4 shadow-[0_0_18px_#00ff88]" />
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          High-impact projects built with performance, scalability,
          and clean engineering in mind
        </p>
      </div>

      {/* Projects Grid */}
      <div className="relative grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="
              group cursor-pointer rounded-2xl overflow-hidden
              border border-[#00ff88]/30
              bg-[#050414]
              hover:border-[#00ff88]
              hover:shadow-[0_0_30px_#00ff8866]
              transition-all duration-300
            "
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover
                group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm line-clamp-3 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="
                      text-xs px-3 py-1 rounded-full
                      border border-[#00ff88]/40
                      text-[#00ff88]
                      bg-[#00ff88]/10
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 px-4"
          onClick={() => setSelectedProject(null)}   // 👈 close on backdrop click
        >
          <div
            className="relative max-w-3xl w-full bg-[#050414] rounded-xl
                 border border-[#00ff88]/40 shadow-[0_0_40px_#00ff8844]"
            onClick={(e) => e.stopPropagation()}    // 👈 prevent inner click
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-white text-3xl hover:text-[#00ff88]"
            >
              &times;
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-t-xl"
            />

            <div className="p-6">
              <h3 className="text-2xl font-extrabold text-white mb-3">
                {selectedProject.title}
              </h3>

              <p className="text-gray-400 mb-6">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 rounded-full
                         border border-[#00ff88]/40 text-[#00ff88]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 text-center py-2 rounded-lg
                       border border-[#00ff88] text-[#00ff88]
                       hover:bg-[#00ff88]/10 transition"
                >
                  View Code
                </a>

                <a
                  href={selectedProject.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 text-center py-2 rounded-lg
                       bg-[#00ff88] text-black font-bold
                       hover:shadow-[0_0_20px_#00ff88] transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
