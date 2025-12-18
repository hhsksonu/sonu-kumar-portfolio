// Experience Section Logo's
import acismLogo from "./assets/company_logo/acism_logo.jpg";

// Education Section Logo's
import dypu from "./assets/education_logo/dypu.png";
import tps from "./assets/education_logo/tps_logo.png";
import marwari from "./assets/education_logo/marwari_college.png";
import paramount from "./assets/education_logo/paramount.png";

// Project Section Logo's
import fjpd from "./assets/work_logo/fjpduns.png";
import loyalty from "./assets/work_logo/lae_rmgp.png";
import attendance from "./assets/work_logo/asasudlac.png";
import smartVision from "./assets/work_logo/smart_vision.png";

  
export const education = [
  {
    id: 1,
    degree: "Master of Computer Applications (MCA)",
    field: "Computer Software Engineering",
    institute: "DY Patil University, Pune",
    date: "Jun 2023 – Sep 2025",
    grade: "CGPA: 8.5",
    logo: dypu,
    description:
      "Specialized in Full-Stack Development and Artificial Intelligence with hands-on experience building production-ready ML systems and scalable web applications.",
    highlights: [
      "Developed end-to-end AI/ML projects with 95% model accuracy",
      "Built full-stack applications using Django, Flask, and modern frontend frameworks",
      "Implemented Computer Vision and NLP systems using TensorFlow, OpenCV, and Scikit-learn",
      "Designed RESTful APIs and database architectures using SQL and NoSQL",
      "Completed coursework in DSA, DBMS, Cloud Computing, and Software Engineering",
    ],
    skills: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "Web Development",
      "Databases",
      "Data Science",
      "Statistics",
      "Cloud",
    ],
  },

  {
    id: 2,
    degree: "Bachelor of Arts (Economics)",
    field: "Economics",
    institute: "Thakur Prasad Singh (T.P.S.) College, Patna",
    date: "Aug 2019 – Oct 2022",
    grade: "Grade: 62%",
    logo: tps,
    description:
      "Built a strong analytical and problem-solving foundation through rigorous economics coursework, directly applicable to data science and ML engineering.",
    highlights: [
      "Analyzed economic datasets using statistical methods",
      "Applied quantitative models to real-world economic problems",
      "Developed research, teamwork, and communication skills",
      "Strengthened critical thinking and policy analysis abilities",
    ],
    skills: [
      "Data Analysis",
      "Statistics",
      "Quantitative Reasoning",
      "Research",
      "Critical Thinking",
    ],
  },

  {
    id: 3,
    degree: "Higher Secondary Certificate (Class XII)",
    field: "Science",
    institute: "Marwari College, Bhagalpur",
    date: "Jul 2017",
    grade: "Grade: 75.2%",
    logo: marwari,
    description:
      "Strong academic grounding in Physics, Chemistry, and Mathematics, forming the base for technical problem-solving.",
    highlights: [
      "Strong fundamentals in mathematics and science",
      "Developed logical reasoning and analytical thinking",
    ],
    skills: ["Mathematics", "Physics", "Problem Solving"],
  },

  {
    id: 4,
    degree: "Secondary School Certificate (Class X)",
    field: "General Studies",
    institute: "Paramount Academy, Tarapur",
    date: "Year: 2015",
    grade: "CGPA: 9.2 / 10",
    logo: paramount,
    description:
      "Achieved exceptional academic performance, demonstrating strong fundamentals across core subjects.",
    highlights: [
      "High academic consistency",
      "Strong foundation in mathematics and science",
    ],
    skills: ["Mathematics", "Science", "Discipline"],
  },
];


export const experiences = [
  {
    id: 1,
    role: "AI / ML Intern",
    company: "ACISM (Academy for Computer Innovation & Software Mentoring) · Remote",
    date: "Jan 2025 – Jul 2025",
    img: acismLogo,
    desc: `
      Engineered a modular ML pipeline that reduced manual effort by 70% and setup time by 90%.
      Built 25+ reusable components for preprocessing, training, tuning, evaluation, and inference.
      Designed a Model Selection UI supporting 15+ ML algorithms with clear use-case guidance.
      Improved model accuracy by ~15% using feature scaling and hyperparameter tuning.
      Resolved critical Windows deployment issues, cutting runtime errors by 90%.
      Standardized dependencies with pyproject.toml, reducing intern onboarding time by 50%.
    `,
    skills: [
      "Python",
      "Xsemble",
      "Machine Learning",
      "Scikit-learn",
      "NLP",
      "SQL",
      "Statistics",
      "Matplotlib"
    ],
  },
];
  
export const projects = [
  {
    id: 1,
    title: "Fake Job Post Detector using NLP & SHAP",
    image: fjpd,
    description:
      "Built an NLP-based fake job posting classifier using TF-IDF and XGBoost, achieving 95% accuracy. Handled class imbalance with SMOTE, improving minority recall by 18%. Integrated SHAP for explainable AI and packaged the model into deployment-ready .pkl files.",
    tags: [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "TF-IDF",
      "SHAP",
      "SMOTE",
      "Streamlit",
    ],
    github: "https://github.com/hhsksonu/fake-job-detector-using-nlp",
    webapp: "#",
  },

  {
    id: 2,
    title: "Loyalty Analytics Engine – Real-Money Gaming Platform",
    image: loyalty,
    description:
      "Developed a loyalty analytics engine to score, rank, and reward users monthly. Implemented slot-based segmentation and proportional bonus distribution for ₹50,000, increasing engagement by 20%. Automated the pipeline using Google Sheets integration.",
    tags: [
      "Python",
      "Pandas",
      "Google Colab",
      "GSpread",
      "OAuth2",
      "Data Analytics",
    ],
    github: "https://github.com/hhsksonu/Loyalty-Analytics-Engine-Gaming-Platform",
    webapp: "#",
  },

  {
    id: 3,
    title: "Advanced Student Attendance System using Deep Learning",
    image: attendance,
    description:
      "Created a real-time face-recognition attendance system using OpenCV and TensorFlow. Automated daily attendance logging for 30+ students, reducing manual errors and achieving ~85% recognition accuracy.",
    tags: [
      "Python",
      "OpenCV",
      "TensorFlow",
      "Haar Cascades",
      "Computer Vision",
    ],
    github: "#",
    webapp: "#",
  },

  {
    id: 4,
    title: "Smart Vision – Object Detection System",
    image: smartVision,
    description:
      "Built a custom object detection pipeline using YOLOv3 for surveillance scenarios. Evaluated performance on 250+ images, achieving 85% precision and validating robustness for real-world deployments.",
    tags: [
      "Python",
      "OpenCV",
      "YOLOv3",
      "CNN",
      "Matplotlib",
    ],
    github: "#",
    webapp: "#",
  },
];  