import React from "react";
import { education } from "../../constants";

const EducationCard = ({ edu }) => (
  <div
    className="
      w-full max-w-md p-6 sm:p-8 rounded-2xl
      bg-[#050414]
      border border-[#00ff88]/40
      shadow-[0_0_30px_#00ff8833]
      hover:shadow-[0_0_45px_#00ff8855]
      transition-all duration-300 hover:scale-105
    "
  >
    <div className="flex items-center gap-6">
      <div className="w-20 h-14 bg-black rounded-md overflow-hidden border border-[#00ff88]/30">
        <img
          src={edu.logo}
          alt={edu.institute}
          className="w-full h-full object-contain"
        />
      </div>

      <div>
        <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
        <h4 className="text-sm text-gray-300">{edu.institute}</h4>
        <p className="text-xs text-gray-500 mt-1">{edu.date}</p>
      </div>
    </div>

    <p className="mt-4 text-[#00ff88] font-semibold">{edu.grade}</p>
    <p className="mt-3 text-gray-400 text-sm">{edu.description}</p>

    <div className="flex flex-wrap gap-2 mt-4">
      {edu.skills.map((skill, i) => (
        <span
          key={i}
          className="
            text-xs px-3 py-1 rounded-full
            border border-[#00ff88]/40
            text-[#00ff88]
            bg-[#00ff88]/10
          "
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] bg-[#060c18] font-sans"
    >

      {/* Title */}
      <div className="relative text-center mb-20">
        <h2 className="text-4xl font-extrabold text-white tracking-wider">
          EDUCATION
        </h2>
        <div className="w-32 h-1 bg-[#00ff88] mx-auto mt-4 shadow-[0_0_18px_#00ff88]" />
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          Academic journey focused on strong fundamentals, applied engineering,
          and analytical thinking
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative">

        {/* 🔑 ONE GLOBAL VERTICAL LINE */}
        <div
          className="
            absolute left-1/2 top-0 -translate-x-1/2
            w-[2px] h-full
            bg-[#00ff88]/40
            shadow-[0_0_14px_#00ff88]
          "
        />

        <div className="space-y-24">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className="grid grid-cols-1 sm:grid-cols-[1fr_80px_1fr] items-start"
            >
              {/* LEFT */}
              <div className="flex justify-end">
                {index % 2 === 0 && <EducationCard edu={edu} />}
              </div>

              {/* DOT */}
              <div className="relative flex justify-center">
                <div
                  className="
                    relative z-10
                    w-16 h-16 rounded-full
                    border-4 border-[#00ff88]
                    bg-black
                    shadow-[0_0_20px_#00ff88]
                    flex items-center justify-center
                  "
                >
                  <img
                    src={edu.logo}
                    alt={edu.institute}
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex justify-start">
                {index % 2 !== 0 && <EducationCard edu={edu} />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
