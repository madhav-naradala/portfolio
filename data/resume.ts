export interface ResumeData {
  personal: {
    name: string;
    email: string;
    phone?: string;
    location?: string;
    summary: string;
  };
  experience: Experience[];
  skills: SkillCategory[];
  education: Education[];
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
  gpa?: string;
}

export const resumeData: ResumeData = {
  personal: {
    name: 'Madhav Naradala',
    email: 'naradalamadhav@gmail.com',
    phone: '+1 (678) 243-0909',
    location: 'Celina, Texas',
    summary:
      'Full Stack Java Developer experienced in building scalable enterprise applications using Java, Spring Boot, microservices, React, cloud services, messaging systems, and relational and NoSQL databases.',
  },

  experience: [
    {
      id: 'fidelity',
      company: 'Fidelity Investments',
      position: 'Full Stack Java Developer',
      duration: 'March 2025 – Present',
      startDate: 'March 2025',
      endDate: 'Present',
      description: [],
      technologies: [
        'Java',
        'Spring Boot',
        'Microservices',
        'React',
        'REST APIs',
      ],
    },
    {
      id: 'cvs',
      company: 'CVS Health',
      position: 'Full Stack Java Developer',
      duration: 'May 2024 – January 2025',
      startDate: 'May 2024',
      endDate: 'January 2025',
      description: [],
      technologies: [
        'Java',
        'Spring Boot',
        'Microservices',
        'React',
        'REST APIs',
      ],
    },
    {
      id: 'us-bank',
      company: 'US Bank',
      position: 'Full Stack Java Developer',
      duration: 'November 2022 – April 2024',
      startDate: 'November 2022',
      endDate: 'April 2024',
      description: [],
      technologies: [
        'Java',
        'Spring Boot',
        'Microservices',
        'Kafka',
        'SQL',
      ],
    },
    {
      id: 'jpmorgan',
      company: 'JP Morgan Chase',
      position: 'Full Stack Java Developer',
      duration: 'October 2021 – November 2022',
      startDate: 'October 2021',
      endDate: 'November 2022',
      description: [],
      technologies: [
        'Java',
        'Spring Boot',
        'REST APIs',
        'React',
        'AWS',
      ],
    },
    {
      id: 'paypal',
      company: 'PayPal',
      position: 'Java Developer',
      duration: 'June 2020 – September 2021',
      startDate: 'June 2020',
      endDate: 'September 2021',
      description: [],
      technologies: [
        'Java',
        'Spring Boot',
        'Microservices',
        'REST APIs',
        'Databases',
      ],
    },
    {
      id: 'tech-mahindra',
      company: 'Tech Mahindra',
      position: 'Java Developer',
      duration: 'June 2017 – July 2018',
      startDate: 'June 2017',
      endDate: 'July 2018',
      description: [],
      technologies: ['Java', 'SQL', 'REST APIs', 'Git'],
    },
  ],

  skills: [
    {
      category: 'Languages & Frameworks',
      skills: [
        'Java',
        'Spring Boot',
        'Spring Framework',
        'Microservices',
        'RESTful APIs',
      ],
    },
    {
      category: 'Frontend',
      skills: [
        'React.js',
        'Angular',
        'TypeScript',
        'JavaScript',
        'HTML',
        'CSS',
      ],
    },
    {
      category: 'Databases',
      skills: ['Oracle', 'PostgreSQL', 'MongoDB', 'SQL', 'NoSQL'],
    },
    {
      category: 'Cloud & DevOps',
      skills: [
        'AWS EC2',
        'AWS S3',
        'AWS RDS',
        'Docker',
        'Kubernetes',
        'Jenkins',
        'Git',
      ],
    },
    {
      category: 'Messaging & Testing',
      skills: ['Apache Kafka', 'JUnit', 'Mockito'],
    },
  ],

  education: [
    {
      id: 'fit',
      institution: 'Florida Institute of Technology',
      degree: 'Master of Science',
      field: 'Computer Information Systems',
      graduationYear: '2020',
      gpa: '3.36',
    },
    {
      id: 'gitam',
      institution: 'GITAM University',
      degree: 'Bachelor of Engineering',
      field: 'Electronics and Communication Engineering',
      graduationYear: '2017',
      gpa: '7.57',
    },
  ],
};
