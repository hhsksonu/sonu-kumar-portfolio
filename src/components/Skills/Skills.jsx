import React, { useState } from "react";

const skillsData = {
  "Backend": [
    { name: "Python", level: 95 },
    { name: "Django", level: 80 },
    { name: "Flask", level: 70 },
    { name: "FastAPI", level: 60 },
    { name: "Django REST Framework", level: 60 },
    { name: "REST APIs", level: 80 },
  ],
  "AI / ML": [
    { name: "Machine Learning", level: 90 },
    { name: "NLP", level: 85 },
    { name: "LLMs", level: 50 },
    { name: "Hugging Face", level: 70 },
    { name: "LangChain", level: 50 },
    { name: "RAG", level: 60 },
    { name: "Feature Engineering", level: 60 },
    { name: "Model Train & Testing", level: 85 },
    { name: "Model Evaluation", level: 70 },
    { name: "Scikit-learn", level: 90 },
    { name: "XGBoost", level: 85 },
  ],
  "Data & Analytics": [
    { name: "Statistics", level: 85 },
    { name: "EDA", level: 90 },
    { name: "NumPy / Pandas", level: 92 },
    { name: "Matplotlib", level: 85 },
    { name: "ETL", level: 80 },
  ],
  "Frontend": [
    { name: "HTML5", level: 80 },
    { name: "CSS3", level: 80 },
    { name: "Bootstrap", level: 85 },
    { name: "Tailwind CSS", level: 60 },
    { name: "React.js", level: 65 },
  ],
  "Databases": [
    { name: "SQL", level: 88 },
    { name: "PostgreSQL", level: 82 },
    { name: "MongoDB", level: 75 },
    { name: "Microsoft SQL", level: 85 },
  ],
  "Tools & Cloud": [
    { name: "AWS (EC2, S3, IAM)", level: 60 },
    { name: "Jupyter Notebook", level: 90 },
    { name: "Vercel", level: 70 },
    { name: "Git / GitHub", level: 85 },
    { name: "VS Code", level: 90 },
    { name: "Postman", level: 88 },
    { name: "Excel", level: 80 },
  ],
};

const Skills = () => {
  // Default to "Backend" so it opens on Backend tab automatically
  const [active, setActive] = useState("Backend");
  const categories = Object.keys(skillsData);
  const current = skillsData[active];

  return (
    <section id="skills" className="relative py-28">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--em)", fontFamily: "DM Sans" }}
          >
            What I Know
          </p>
          <h2 className="font-syne font-extrabold text-4xl sm:text-5xl text-white">
            Technical Skills
          </h2>
          <div
            className="w-12 h-0.5 mx-auto mt-5 rounded-full"
            style={{
              background: "linear-gradient(90deg, var(--em), var(--em-light))",
              boxShadow: "0 0 12px rgba(16,185,129,0.5)",
            }}
          />
          <p
            className="mt-5 max-w-xl mx-auto text-base leading-relaxed"
            style={{ color: "var(--text-muted)", fontFamily: "DM Sans" }}
          >
            Production-grade expertise backed by real projects, hands-on
            experience, and measurable results.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              style={{
                fontFamily: "DM Sans",
                background:
                  active === cat
                    ? "linear-gradient(135deg, #10b981, #34d399)"
                    : "rgba(255,255,255,0.04)",
                color: active === cat ? "#000" : "var(--text-muted)",
                border:
                  active === cat
                    ? "none"
                    : "1px solid rgba(255,255,255,0.08)",
                fontWeight: active === cat ? "700" : "500",
                boxShadow:
                  active === cat ? "0 0 20px rgba(16,185,129,0.3)" : "none",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Panel */}
        <div
          className="rounded-2xl p-8 sm:p-10"
          style={{
            background: "var(--bg-card2)",
            border: "1px solid var(--border)",
          }}
        >
          <h3
            className="font-syne font-bold text-xl mb-8"
            style={{ color: "var(--em-light)" }}
          >
            {active}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-7">
            {current.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2.5">
                  <span
                    className="text-sm font-medium text-white"
                    style={{ fontFamily: "DM Sans" }}
                  >
                    {skill.name}
                  </span>
                  <span
                    className="text-xs font-semibold"
                    style={{
                      color: "var(--em-light)",
                      fontFamily: "DM Sans",
                    }}
                  >
                    {skill.level}%
                  </span>
                </div>
                <div className="skill-bar-track">
                  <div
                    className="skill-bar-fill"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Also familiar with */}
        <div className="mt-12 text-center">
          <p
            className="text-sm mb-5"
            style={{ color: "var(--text-muted)", fontFamily: "DM Sans" }}
          >
            Also familiar with
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "R", "C", "C++", "SHAP", "SMOTE", "OAuth2",
              "GSpread", "Google Colab", "YOLOv3",
              "Haar Cascades", "pyproject.toml",
            ].map((t) => (
              <span key={t} className="tag-pill">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;