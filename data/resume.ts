export interface ResumeData {
  personal: {
    name: string;
    email: string;
    phone: string;
    location: string;
    summary: string;
  };
  experience: Experience[];
  skills: SkillCategory[];
  education: Education[];
  certifications: Certification[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  graduationYear: string;
  achievements?: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
}

export const resumeData: ResumeData = {
  personal: {
    name: "Madhav Naradala",
    email: "naradalamadhav@gmail.com",
    phone: "+1 (XXX) XXX-XXXX",
    location: "San Francisco, CA",
    summary: "Results-driven software developer with expertise in full-stack development, cloud technologies, and building scalable applications. Passionate about clean code, technical innovation, and delivering high-quality solutions.",
  },
  experience: [
    {
      id: "1",
      company: "Tech Company",
      position: "Senior Software Engineer",
      duration: "2 years",
      startDate: "2022",
      endDate: "Present",
      description: [
        "Led development of microservices architecture handling 1M+ daily requests",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored junior developers and conducted technical code reviews",
        "Optimized database queries improving application performance by 40%",
      ],
      technologies: ["TypeScript", "Node.js", "React", "PostgreSQL", "AWS", "Docker"],
    },
    {
      id: "2",
      company: "Startup XYZ",
      position: "Full Stack Developer",
      duration: "1 year",
      startDate: "2021",
      endDate: "2022",
      description: [
        "Built customer-facing web application using React and Node.js",
        "Designed and implemented REST APIs with proper authentication and authorization",
        "Collaborated with product and design teams to deliver features on schedule",
        "Reduced bundle size by 35% through code optimization and lazy loading",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Firebase"],
    },
  ],
  skills: [
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "TypeScript", "PostgreSQL", "MongoDB", "REST APIs"],
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Linux"],
    },
    {
      category: "Tools & Others",
      skills: ["Git", "VS Code", "Figma", "Webpack", "Jest", "Agile/Scrum"],
    },
  ],
  education: [
    {
      id: "1",
      institution: "University Name",
      degree: "Bachelor of Science",
      field: "Computer Science",
      graduationYear: "2021",
      achievements: [
        "GPA: 3.8/4.0",
        "Dean's List: 4 semesters",
        "President of Tech Club",
      ],
    },
  ],
  certifications: [
    {
      id: "1",
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      issueDate: "2023",
    },
    {
      id: "2",
      title: "Professional Scrum Master I",
      issuer: "Scrum.org",
      issueDate: "2022",
    },
  ],
};
