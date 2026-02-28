// Experience Section Logo's
import acismLogo from "./assets/company_logo/acism_logo.jpg";

// Education Section Logo's
import dypu from "./assets/education_logo/dypu.png";
import tps from "./assets/education_logo/tps_logo.png";
import marwari from "./assets/education_logo/marwari_college.png";
import paramount from "./assets/education_logo/paramount.png";
import kyoImg from "./assets/work_logo/kyo.png";
import traderImg from "./assets/work_logo/trader.png";
import researchImg from "./assets/work_logo/research-portal.png";
import voiceImg from "./assets/work_logo/voice-to-text.png";
import eshopImg from "./assets/work_logo/eshop.png";
import storeRatingImg from "./assets/work_logo/store-rating.png";

// Project Images (existing)
import fjpd from "./assets/work_logo/fjpduns.png";
import loyalty from "./assets/work_logo/lae_rmgp.png";
import hhskBlog from "./assets/work_logo/hhsk-blog.png";
import portfolioWeb from "./assets/work_logo/porfolio-web.png";


// ─── Education ────────────────────────────────────────────
export const education = [
  {
    id: 1,
    degree: "Master of Computer Applications (MCA)",
    field: "Computer Software Engineering",
    institute: "DY Patil University, Pune",
    date: "Jun 2023 – Sep 2025",
    grade: "CGPA: 8.2",
    logo: dypu,
    description:
      "Specialized in Full-Stack Development and Artificial Intelligence with hands-on experience building production-ready ML systems and scalable web applications.",
    highlights: [
      "Developed end-to-end AI/ML projects with 95% model accuracy",
      "Built full-stack applications using Django, Flask, and modern frontend frameworks",
      "Implemented RAG pipelines, NLP systems using Hugging Face, LangChain, and Scikit-learn",
      "Designed RESTful APIs and database architectures using SQL and NoSQL",
      "Completed coursework in DSA, DBMS, Cloud Computing, and Software Engineering",
    ],
    skills: [
      "Python", "Machine Learning", "Deep Learning",
      "Web Development", "Databases", "Data Science", "Statistics", "Cloud",
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
    skills: ["Data Analysis", "Statistics", "Quantitative Reasoning", "Research", "Critical Thinking"],
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

// ─── Experience ───────────────────────────────────────────
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
    skills: ["Python", "Xsemble", "Machine Learning", "Scikit-learn", "NLP", "SQL", "Statistics", "Matplotlib"],
  },
];

// ─── Projects ─────────────────────────────────────────────
// For new projects without screenshots, image is null — Work.jsx shows a gradient placeholder.
export const projects = [
  {
    id: 1,
    title: "Know Your Organization (KYO) – AI Knowledge System",
    image: kyoImg, 
    description:
      "Production-ready RAG platform enabling employees to get instant, source-backed answers from internal documents. Features role-based access control (Employee, Reviewer, Content Owner, Admin), document approval workflow, audit logging, and a query history system. Deployed on AWS EC2 with PostgreSQL + pgvector and Vercel CDN. Achieves sub-2-second query response times.",
    tags: ["Python","React", "Django REST Framework", "PostgreSQL", "pgvector", "RAG", "Hugging Face", "Mistral-7B", "AWS EC2", "Vercel", "Redis", "Celery"],
    github: "https://github.com/hhsksonu/Internal-Knowledge-Operations-Software",
    webapp: "https://www.knowyourorg.com/",
  },
  {
    id: 2,
    title: "Fake Job Post Detector using NLP & SHAP",
    image: fjpd,
    description:
      "Built an NLP-based fake job posting classifier using TF-IDF and XGBoost, achieving 95% accuracy. Handled class imbalance with SMOTE, improving minority recall by 18%. Integrated SHAP for explainable AI and packaged the model into deployment-ready .pkl files.",
    tags: ["Python", "Scikit-learn", "XGBoost", "TF-IDF", "SHAP", "SMOTE", "Streamlit"],
    github: "https://github.com/hhsksonu/fake-job-detector-using-nlp",
    webapp: "https://fake-job-detector-using-nlp-op3wr9fxrao2tul767qoax.streamlit.app/",
  },
  {
    id: 3,
    title: "Hhsksonu Blog",
    image: hhskBlog,
    description:
      "Personal blog where I write about programming, ML, and project experiences. Showcases my tutorials, insights, and technical experiments built with Django.",
    tags: ["Python", "Django", "HTML5", "CSS3", "JavaScript", "Blog"],
    github: "https://github.com/hhsksonu/Blog-website-Django",
    webapp: "https://hhsksonu.pythonanywhere.com/",
  },
  {
    id: 4,
    title: "Loyalty Analytics Engine – Real-Money Gaming Platform",
    image: loyalty,
    description:
      "Developed a loyalty analytics engine to score, rank, and reward users monthly. Implemented slot-based segmentation and proportional bonus distribution for ₹50,000, increasing engagement by 20%. Automated the pipeline using Google Sheets integration.",
    tags: ["Python", "Pandas", "Google Colab", "GSpread", "OAuth2", "Data Analytics"],
    github: "https://github.com/hhsksonu/Loyalty-Analytics-Engine-Gaming-Platform",
    webapp: "#",
  },
  {
    id: 5,
    title: "Trader Performance vs Market Sentiment Analysis",
    image: traderImg, 
    description:
      "Analyzed the relationship between Bitcoin Fear/Greed Index and Hyperliquid trader behavior. Segmented traders into leverage-based, activity-based, and performance-based groups. Built a Random Forest classifier to predict next-day profitability and developed 3 evidence-based trading strategies with statistical validation.",
    tags: ["Python", "Pandas", "Scikit-learn", "Random Forest", "EDA", "Statistics", "Jupyter Notebook", "Matplotlib"],
    github: "https://github.com/hhsksonu/trader_sentiment_analysis",
    webapp: "#",
  },
  {
    id: 6,
    title: "Internal Research Tools Portal",
    image: researchImg,
    description:
      "AI-powered financial document analysis platform that extracts 14 income statement line items from PDFs. Features smart PDF detection (text vs. scanned), dual extraction pipeline (pdfplumber + Tesseract OCR), GPT-4o-mini fallback, and multi-year Excel export. Built with FastAPI backend and React frontend.",
    tags: ["FastAPI", "React", "Python", "pdfplumber", "Tesseract OCR", "OpenAI GPT-4o", "pandas", "openpyxl"],
    github: "https://github.com/hhsksonu/Internal-Research-Tools-Portal",
    webapp: "#",
  },
  {
    id: 7,
    title: "Sonu Kumar Portfolio",
    image: portfolioWeb,
    description:
      "My personal portfolio website built to showcase my projects, skills, and experience. Includes multiple sections for projects, experience, education, and contact info.",
    tags: ["React", "Tailwind CSS", "Vite", "JavaScript", "Portfolio"],
    github: "https://github.com/hhsksonu/portfolio-website",
    webapp: "https://hhsksonu.vercel.app/",
  },
  {
    id: 8,
    title: "Voice to Text Desktop Application",
    image: voiceImg, 
    description:
      "Cross-platform desktop app that converts real-time speech into text using Deepgram's Nova-2 AI model. Built with React + Tauri (Rust backend) for a tiny ~5MB bundle vs 150MB Electron. Features WebSocket streaming for <200ms latency, dark/light mode, multi-language support, and export to .txt.",
    tags: ["React", "Tauri", "Rust", "Deepgram API", "WebSocket", "Vite", "CSS3"],
    github: "https://github.com/hhsksonu/voice-to-text",
    webapp: "#",
  },
  {
    id: 9,
    title: "EShop – E-commerce Web Application (Clone)",
    image: eshopImg, 
    description:
      "React-based e-commerce store with product listing, search, category filtering, price sorting, cart management, and a mock checkout flow. Product data from Platzi Fake Store API. Firebase authentication for login/signup. Deployed live on Netlify.",
    tags: ["React", "Firebase Auth", "Context API", "Axios", "CSS3", "Netlify"],
    github: "https://github.com/hhsksonu/clone-ecommerce-store",
    webapp: "https://eshopsk.netlify.app/",
  },
  {
    id: 10,
    title: "Store Rating System",
    image: storeRatingImg, 
    description:
      "Full-stack web app with role-based access control for Admins, Normal Users, and Store Owners. Users can browse, search, and rate stores (1–5 stars). Admins manage users and stores with filtering/sorting dashboards. Built with Node.js + Express, PostgreSQL, JWT auth, and bcrypt password hashing.",
    tags: ["React", "Node.js", "Express.js", "PostgreSQL", "JWT", "bcrypt", "REST API", "CSS3"],
    github: "https://github.com/hhsksonu/store-rating-system",
    webapp: "#",
  },
];