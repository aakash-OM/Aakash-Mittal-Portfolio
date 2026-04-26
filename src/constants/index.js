import {
  mobile,
  backend,
  creator,
  web,
  python,
  tensorflow,
  pytorch,
  docker,
  fastapi,
  pandas,
  langchain,
  openai,
  huggingface,
  sklearn,
  aws,
  reactjs,
  nextJs,
  tailwind,
  typescript,
  nodejs,
  mongodb,
  mysql,
  git,
  publicis,
  iitindore,
  meritshot,
  ineuron,
  digitalwheel,
  ocrIcu,
  icuTracking,
  mcqGenerator,
  housePrice,
  linkedIn,
  github,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  { id: navigationPaths.about, title: "About" },
  { id: navigationPaths.work, title: "Work" },
  { id: navigationPaths.contact, title: "Contact" },
];

const services = [
  {
    title: "AI-Powered Web Apps",
    icon: web,
  },
  {
    title: "ML & Data Analytics",
    icon: creator,
  },
  {
    title: "Business Automation",
    icon: mobile,
  },
  {
    title: "Full-Stack Development",
    icon: backend,
  },
];

const technologies = [
  // AI / LLM
  { name: "LangChain", icon: langchain, category: "AI / LLM" },
  { name: "OpenAI", icon: openai, category: "AI / LLM" },
  { name: "HuggingFace", icon: huggingface, category: "AI / LLM" },
  // Data Science
  { name: "Python", icon: python, category: "Data Science" },
  { name: "TensorFlow", icon: tensorflow, category: "Data Science" },
  { name: "PyTorch", icon: pytorch, category: "Data Science" },
  { name: "Pandas", icon: pandas, category: "Data Science" },
  { name: "Scikit-learn", icon: sklearn, category: "Data Science" },
  // Frontend
  { name: "React.js", icon: reactjs, category: "Frontend" },
  { name: "Next.js", icon: nextJs, category: "Frontend" },
  { name: "TypeScript", icon: typescript, category: "Frontend" },
  { name: "Tailwind CSS", icon: tailwind, category: "Frontend" },
  // Backend
  { name: "Node.js", icon: nodejs, category: "Backend" },
  { name: "FastAPI", icon: fastapi, category: "Backend" },
  // Database
  { name: "MongoDB", icon: mongodb, category: "Database" },
  { name: "MySQL", icon: mysql, category: "Database" },
  // Tools / DevOps
  { name: "Docker", icon: docker, category: "Tools" },
  { name: "AWS", icon: aws, category: "Tools" },
  { name: "Git", icon: git, category: "Tools" },
];

const experiences = [
  {
    title: "Generative AI Engineer",
    company_name: "Publicis Resources",
    company_website: "https://www.publicisgroupe.com/",
    icon: publicis,
    iconBg: "#0072CE",
    date: "August 2025 – Feb 2026",
    points: [
      "Contributing to the Agent@Scale project by McKinsey & Company, designing and developing AI agents.",
      "Fine-tuned the company's chatbot models to improve accuracy and response quality.",
      "Reviewed, cleaned, and curated organizational datasets to ensure high data quality and reliability.",
    ],
  },
  {
    title: "Project Associate | Data Scientist",
    company_name: "IIT Indore — Centre of Excellence in Digital HealthCare",
    company_website: "https://www.iiti.ac.in/",
    icon: iitindore,
    iconBg: "#8B0000",
    date: "March 2024 – Jan 2025",
    points: [
      "Developed AI models for a Digital Twin Critical Healthcare Project.",
      "Conducted product performance analysis, improving ICU monitoring efficiency by 30%.",
      "Collaborated with AIIMS Delhi and University of Cambridge on AI-driven healthcare solutions.",
      "Automated data pipelines, reducing data processing time by 40%.",
    ],
  },
  {
    title: "Associate Data Scientist",
    company_name: "Meritshot",
    company_website: "https://www.meritshot.com/",
    icon: meritshot,
    iconBg: "#00897B",
    date: "July 2023 – Feb 2024",
    points: [
      "Developed an MCQ Generator using LLMs and Vector Databases, reducing manual content creation by 50%.",
      "Conducted A/B testing and data analysis to optimize content recommendation models.",
      "Explored user engagement metrics to improve retention strategies.",
    ],
  },
  {
    title: "Trainee Data Scientist",
    company_name: "Ineuron",
    company_website: "https://ineuron.ai/",
    icon: ineuron,
    iconBg: "#5C6BC0",
    date: "May 2022 – June 2023",
    points: [
      "Developed AI-powered web applications such as a Review Scraper and Fire Detection System.",
      "Optimized Flask-based APIs, reducing latency by 35%.",
      "Managed SQL & MongoDB databases; improved customer insights through data-driven strategies.",
    ],
  },
  {
    title: "Data Analyst",
    company_name: "Digital Wheel",
    company_website: "https://www.linkedin.com/",
    icon: digitalwheel,
    iconBg: "#7B1FA2",
    date: "Jan 2021 – April 2022",
    points: [
      "Led data analysis for product performance tracking, enhancing insights for strategic decisions.",
      "Built interactive dashboards (PowerBI, Metabase) to track key business metrics.",
      "Collaborated with cross-functional teams to optimize AI-powered solutions.",
    ],
  },
];

const projects = [
  {
    name: "OCR from ICU Screens",
    description:
      "99.8% accurate OCR model for real-time ICU screen parameter extraction. Integrated with 360-degree rotational cameras and collaborated with AIIMS Delhi & University of Cambridge on deployment.",
    tags: [
      { name: "OCR / YOLO", color: "blue-text-gradient" },
      { name: "Azure", color: "green-text-gradient" },
      { name: "LLM", color: "pink-text-gradient" },
    ],
    image: ocrIcu,
    source_code_link: "https://github.com/aakash-OM",
  },
  {
    name: "Real-Time ICU Event Tracking",
    description:
      "Web dashboard monitoring ICU activities — lab coat detection, BP measurement, and hand hygiene — using YOLOv5. Reduced compliance violations by 35% through AI-driven event tracking.",
    tags: [
      { name: "YOLOv5", color: "blue-text-gradient" },
      { name: "PySpark", color: "green-text-gradient" },
      { name: "Azure MySQL", color: "pink-text-gradient" },
    ],
    image: icuTracking,
    source_code_link: "https://github.com/aakash-OM",
  },
  {
    name: "MCQ Generator Webapp",
    description:
      "Automated MCQ generation from any text input using LLMs, cutting content creation time by 80%. Deployed via GitHub Actions & Docker with seamless CI/CD integration.",
    tags: [
      { name: "LangChain", color: "blue-text-gradient" },
      { name: "OpenAI", color: "green-text-gradient" },
      { name: "Streamlit", color: "pink-text-gradient" },
    ],
    image: mcqGenerator,
    source_code_link: "https://github.com/aakash-OM",
  },
  {
    name: "Boston House Price Prediction",
    description:
      "Machine learning model predicting house prices with 92% accuracy. Integrated a REST API for real-time predictions with a Flask backend and clean frontend interface.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Flask", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],
    image: housePrice,
    source_code_link: "https://github.com/aakash-OM",
  },
];

const personalInfo = {
  name: "Aakash",
  fullName: "Aakash Mittal",
  email: "aakashnew0207@gmail.com",
  mobile: "+917906835097",
  role: "AI/ML Engineer & Data Scientist",
  about: `AI & Data Science engineer crafting intelligent, real-world solutions using LLMs, analytics, and full-stack systems.
  I transform complex data into scalable products that solve meaningful problems. Proven ability to enhance healthcare AI
  through projects with IIT Indore, AIIMS Delhi, and the University of Cambridge.`,
  projectsIntro: `The following projects showcase my skills and experience through real-world AI and data science work.
  Each project is briefly described with links to code repositories. They reflect my ability to build end-to-end
  intelligent systems, work across the full stack, and deliver measurable impact.`,
};

const publicUrls = {
  resume:
    "https://drive.google.com/file/d/1-s4BhQ-YBhWS8ghsDby8-AM0Csr1oiyq/view?usp=sharing",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/aakash-mittal-b3900118a/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/aakash-OM",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
