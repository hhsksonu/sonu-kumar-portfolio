import React from "react";

const skillsData = {
  "Frontend Stack": [
    { name: "HTML", level: 80 },
    { name: "CSS", level: 80 },
    { name: "Bootstrap", level: 85 },
    { name: "Tailwind CSS", level: 60 },
  ],
  "Backend Stack": [
    { name: "Python", level: 95 },
    { name: "Django", level: 80 },
    { name: "Flask", level: 80 },
    { name: "Express.js", level: 75 },
    { name: "REST APIs", level: 80 },
  ],
  "AI / ML Stack": [
    { name: "Machine Learning", level: 90 },
    { name: "Computer Vision", level: 85 },
    { name: "NLP", level: 85 },
    { name: "Feature Engineering", level: 88 },
    { name: "Scikit-learn", level: 90 },
    { name: "TensorFlow", level: 80 },
    { name: "XGBoost", level: 85 },
    { name: "OpenCV", level: 82 },
  ],
  "Data & Analytics": [
    { name: "Statistics", level: 85 },
    { name: "EDA", level: 90 },
    { name: "ETL", level: 80 },
    { name: "NumPy", level: 90 },
    { name: "Matplotlib", level: 85 },
    { name: "Power BI", level: 75 },
    { name: "Jupyter Notebooks", level: 95 },
  ],
  Databases: [
    { name: "SQL", level: 88 },
    { name: "PostgreSQL", level: 82 },
    { name: "MongoDB", level: 75 },
    { name: "Microsoft SQL", level: 85 },
  ],
  Languages: [
    { name: "Python", level: 95 },
    { name: "SQL", level: 88 },
    { name: "R", level: 70 },
    { name: "C", level: 65 },
    { name: "C++", level: 65 },
  ],
  Tools: [
    { name: "Git", level: 85 },
    { name: "Jupyter", level: 95 },
    { name: "VS Code", level: 90 },
    { name: "Postman", level: 88 },
    { name: "Power BI", level: 75 },
    { name: "Excel", level: 80 },
  ],
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-24 px-[6vw] md:px-[10vw] text-white"
    >
      {/* unified background (same as About) */}
      <div className="absolute inset-0 bg-[#060c18]" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold tracking-wide">
            SKILLS
          </h2>
          <div className="w-28 h-1 bg-green-400 mx-auto mt-4 shadow-[0_0_18px_#00ff88]" />
          <p className="text-gray-400 mt-5 max-w-3xl mx-auto text-lg">
            Technical skills backed by real projects, hands-on experience, and
            production use
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div
              key={category}
              className="
                bg-[#0b0b14]
                border border-green-400/30
                rounded-2xl
                p-6 sm:p-8
                shadow-[0_0_35px_rgba(74,222,128,0.15)]
                hover:shadow-[0_0_45px_rgba(74,222,128,0.25)]
                transition
              "
            >
              <h3 className="text-xl font-semibold text-green-400 mb-8 text-center">
                {category}
              </h3>

              <div className="space-y-5">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-green-400">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-[#1a1a2e] rounded-full h-2 overflow-hidden">
                      <div
                        className="
                          h-2 rounded-full
                          bg-gradient-to-r from-green-500 to-green-300
                          shadow-[0_0_10px_rgba(74,222,128,0.6)]
                        "
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
