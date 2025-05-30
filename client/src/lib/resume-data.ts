export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  responsibilities: string[];
}

export interface Project {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  icon: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
  gradient: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  date: string;
  courses: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  certificateId: string;
  dateEarned: string;
}

export const personalInfo = {
  name: "Russel Tagaca",
  title: "Software Test Engineer & Backend Developer",
  email: "russelelauria@outlook.com",
  phone: "908-992-9777",
  location: "Rahway, NJ",
  github: "https://github.com/russel-tagaca"
};

export const experiences: Experience[] = [
  {
    title: "Software Test Engineer",
    company: "General Motors",
    location: "Warren, Michigan",
    period: "03/2022 - Present",
    current: true,
    responsibilities: [
      "Worked closely with analysts and developers to build out functional/regression test strategies using automation scripts or for business process automations such as for hiring applicants on critical applications including Workday and UKG. Written in Python and Java.",
      "Created automation systems that downloads web-scraped information, extracts data from the web while using them to perform API calls to other web services. All together- chaining API processes with others to streamline dataflows. Leveraged asynchronous programming and sometimes multithreading to execute tasks concurrently.",
      "Built Azure Pipelines and Github Actions Workflows to perform scheduled daily builds on automation scripts.",
      "Integrated Github Actions Workflows with Slack, enabling seamless code execution from the cloud using direct Slack messages to a channel, improving efficiency while minimizing manual efforts.",
      "Contributed to reducing manual efforts in Workday by creating automation scripts for data creation or feature testing, saving the company at least 40,000 worker hours and over $2 million in labor costs.",
      "Implemented multithreading and parallel execution in application test strategies, improving resource utilization and test runtime efficiency - resulting in improvements over 100%.",
      "Enhanced test efficiency by using session-scoped fixtures in pytest to manage expensive or time-consuming operations."
    ]
  },
  {
    title: "Software Test Engineer",
    company: "ValueMomentum",
    location: "Piscataway, New Jersey",
    period: "09/2019 - 01/2021",
    current: false,
    responsibilities: [
      "Developed test automation scripts for critical TCS BaNCS applications using Selenium and TestNG.",
      "Outlined manual test scripts on ADO for various banking and financial modules.",
      "Performed regression and smoke testing in a monthly basis with a team of 3 developers."
    ]
  },
  {
    title: "Backend Software Engineer",
    company: "ScanAvert",
    location: "Newark, New Jersey",
    period: "01/2019 - 05/2019",
    current: false,
    responsibilities: [
      "Implemented app logic on a mobile based solution for a food allergy detection system written in Python.",
      "Developed RESTful web services using Spring Boot, tested using Postman."
    ]
  },
  {
    title: "Technology Analyst",
    company: "PJT Partners",
    location: "New York, New York",
    period: "05/2017 - 05/2018",
    current: false,
    responsibilities: [
      "Designed and built the company's first mobile app for Emergency Preparedness exclusively for the iPhone and an instant messaging bot for Slack.",
      "Reduced the need to create physical HR related pamphlets, saving HR operating expenses by over $800K.",
      "Support desk, assisted employees on configuring hardware, software, and other IT related services."
    ]
  }
];

export const projects: Project[] = [
  {
    title: "AI Vision OCR",
    description: "Built an optical character recognition project using Microsoft's Azure AI Vision and AI Document Intelligence to read, parse text, and generate meaningful caption from an invoice or receipt image.",
    features: [
      "Microsoft Azure AI Vision integration",
      "Google Cloud Vision AI implementation",
      "Deployed on Azure Kubernetes Service",
      "Frontend built with HTML and Flask backend API"
    ],
    technologies: ["Azure AI", "Google Cloud", "Kubernetes", "Flask"],
    icon: "eye"
  },
  {
    title: "Simple Kubernetes Login App",
    description: "Built a simple frontend React/Vite app that connects to a Flask python backend. The app is built and served using Docker. Traffic coming is load balanced and route handled by Traefik which also acts as a reverse proxy for the app infrastructure and sits in the cluster with the other containers.",
    features: [
      "React/Vite frontend application",
      "Flask Python backend API",
      "Docker containerization",
      "Traefik load balancer and reverse proxy"
    ],
    technologies: ["React", "Vite", "Docker", "Traefik"],
    icon: "shield-check"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "code",
    skills: ["Python", "Java", "JavaScript", "C/C++/C#", "Swift", "SQL"],
    gradient: "from-blue-primary to-cyan-accent"
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    skills: ["Azure", "Docker", "Kubernetes", "CI/CD", "Git", "Load Balancing"],
    gradient: "from-cyan-accent to-blue-light"
  },
  {
    title: "Testing & Automation",
    icon: "vial",
    skills: ["Selenium", "Microsoft Playwright", "JMeter", "TestNG", "Azure DevOps", "Agile"],
    gradient: "from-navy to-blue-primary"
  },
  {
    title: "Web Technologies",
    icon: "globe",
    skills: ["React", "HTML", "CSS", "Spring Boot", ".NET"],
    gradient: "from-blue-light to-cyan-accent"
  },
  {
    title: "Databases & Tools",
    icon: "database",
    skills: ["MySQL", "Maven", "Visual Studio"],
    gradient: "from-cyan-accent to-navy"
  },
  {
    title: "Languages",
    icon: "language",
    skills: ["English", "Tagalog", "Spanish"],
    gradient: "from-blue-primary to-navy"
  }
];

export const interests = [
  "Automation",
  "Blockchain technologies",
  "Cloud resource management",
  "Docker",
  "Kubernetes"
];

export const education: Education = {
  degree: "Computer Science",
  institution: "New Jersey Institute of Technology",
  location: "Newark, New Jersey",
  date: "08/2019",
  courses: [
    "MATH 112 Calculus II",
    "PHYS 121 Physics II",
    "CS 431 Intro Database Systems",
    "CS 252 Computer Org & Architect",
    "CS 435 Adv Data Struct-Alg Design"
  ]
};

export const certifications: Certification[] = [
  {
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    certificateId: "585J67-E56E8C",
    dateEarned: "Jan 2025"
  }
];
