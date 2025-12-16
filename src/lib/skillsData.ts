// src/lib/skillsData.ts

export interface UniversityModule {
  code: string;
  title: string;
  level: string;
  description: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  tags?: string[]; // Optional property
}

export const universityModules: UniversityModule[] = [
  {
    code: "COS3721",
    title: "Operating Systems and Architecture",
    level: "Undergrad (NQF 7)",
    description: "Focuses on CPU scheduling, process coordination, deadlocks, memory management, and distributed systems architecture."
  },
  {
    code: "COS3751",
    title: "Techniques of Artificial Intelligence",
    level: "Undergrad (NQF 7)",
    description: "Equips students with knowledge representation approaches, heuristic search techniques, and automated reasoning skills."
  },
  {
    code: "COS4807",
    title: "Formal Logic",
    level: "Honours (NQF 8)",
    description: "Advanced study in the methods of formal logic used in computing and validity proofs."
  },
  {
    code: "COS4852",
    title: "Machine Learning",
    level: "Honours (NQF 8)",
    description: "Theoretical and practical aspects of learning techniques in AI to solve complex computational problems."
  },
  {
    code: "COS4861",
    title: "Natural Language Processing",
    level: "Honours (NQF 8)",
    description: "Algorithms for processing words and syntax, focusing on both logical and statistical approaches."
  },
  {
    code: "COS2626",
    title: "Computer Networks I",
    level: "Undergrad (NQF 6)",
    description: "In-depth coverage of TCP/IP, Ethernet, wireless transmission, and network security protocols."
  },
  {
    code: "COS3712",
    title: "Computer Graphics",
    level: "Undergrad (NQF 7)",
    description: "Fundamental principles of modern Computer Graphics and implementation of graphics applications."
  }
];

export const certifications: Certification[] = [
  {
    id: "docker-2025",
    title: "Docker Fundamentals",
    issuer: "O'Reilly",
    date: "Apr 2025",
    description: "Comprehensive training in containerization, image management, and deployment strategies using Docker."
  },
  {
    id: "python-bootcamp",
    title: "100 Days of Code: Python Pro Bootcamp",
    issuer: "Udemy",
    date: "Nov 2024",
    tags: ["Web Scraping", "Selenium", "Flask", "Data Science"],
    description: "Intensive Python training covering automation, web development (Flask), and data science libraries."
  },
  {
    id: "sre-fundamentals",
    title: "SRE Fundamentals",
    issuer: "O'Reilly",
    date: "Nov 2024",
    description: "Site Reliability Engineering principles, focusing on system availability, latency, performance, and capacity."
  }
];