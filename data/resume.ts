export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  location: string;
  summary: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  overview: string;
  description: string[];
  technologies: string[];
  accent: 'green' | 'red' | 'blue' | 'indigo' | 'cyan' | 'orange';
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  graduationYear: string;
  gpa?: string;
}

export interface ResumeData {
  personal: PersonalInfo;
  experience: Experience[];
  skills: SkillGroup[];
  education: Education[];
}

export const resumeData: ResumeData = {
  personal: {
    name: 'Madhav Naradala',
    title: 'Full Stack Java Developer',
    email: 'naradalamadhav@gmail.com',
    location: 'Celina, Texas',
    summary:
      'Full Stack Java Developer experienced in building scalable enterprise applications using Java, Spring Boot, microservices, React, Angular, cloud services, messaging systems, and relational and NoSQL databases.',
  },

  experience: [
    {
      id: 'fidelity-investments',
      company: 'Fidelity Investments',
      position: 'Full Stack Developer',
      duration: 'March 2025 – Present',
      overview:
        'Building and modernizing enterprise applications through Angular framework upgrades, Java and Spring Boot backend services, AWS deployments, monorepo development, and Backstage developer tooling.',
      description: [
        'Led and supported Angular framework upgrades, resolving breaking changes and replacing deprecated APIs.',
        'Delivered full-stack enhancements across Angular interfaces and backend services.',
        'Implemented API updates, business logic enhancements, and data-handling improvements.',
        'Supported AWS deployments, environment configuration, build pipelines, and release validation.',
        'Worked in a monorepo architecture across frontend applications, backend services, and shared libraries.',
        'Contributed to Backstage developer portal implementation and internal developer-productivity improvements.',
        'Investigated production defects, completed root-cause analysis, and delivered reliable fixes.',
      ],
      technologies: [
        'Java',
        'Spring Boot',
        'Angular',
        'TypeScript',
        'Apache Camel',
        'AWS',
        'Backstage',
        'Microservices',
        'REST APIs',
        'SQL',
        'NoSQL',
        'Docker',
        'Jenkins',
        'JUnit',
        'CI/CD',
      ],
      accent: 'green',
    },
    {
      id: 'cvs-health',
      company: 'CVS Health',
      position: 'Full Stack Developer',
      duration: 'May 2024 – January 2025',
      overview:
        'Developed an internal application-management portal that displayed team ownership, services, databases, servers, technologies, repositories, action items, and open defects across the organization.',
      description: [
        'Developed responsive and reusable user-interface components using React and TypeScript.',
        'Built backend services and REST APIs using Java 17 and Spring Boot.',
        'Created independently deployable microservices using Docker and Kubernetes.',
        'Integrated internal and external services using REST APIs, Kafka, and RabbitMQ.',
        'Implemented authentication and authorization using OAuth2 and JWT.',
        'Designed SQL and NoSQL data solutions using PostgreSQL, MySQL, and MongoDB.',
        'Created unit and frontend tests using JUnit, Mockito, Jest, and React Testing Library.',
      ],
      technologies: [
        'Java 17',
        'Spring Boot',
        'React',
        'TypeScript',
        'Redux',
        'Kafka',
        'RabbitMQ',
        'Docker',
        'Kubernetes',
        'MongoDB',
        'PostgreSQL',
        'Jenkins',
        'JUnit',
        'Mockito',
        'AWS',
      ],
      accent: 'red',
    },
    {
      id: 'us-bank',
      company: 'US Bank',
      position: 'Full Stack Developer',
      duration: 'November 2022 – April 2024',
      overview:
        'Built banking applications, customer portals, reporting services, and cloud integrations using Java, Spring Boot, Angular, React, Liferay, MongoDB, Kafka, and AWS.',
      description: [
        'Developed and maintained customer-facing banking applications using Java and Spring technologies.',
        'Created microservices backed by MongoDB for housing-loan and underwriting reports.',
        'Developed reusable Angular and React user-interface components.',
        'Migrated Liferay applications and portlets to newer Liferay DXP versions.',
        'Designed secure and scalable cloud solutions using AWS EC2, VPC, Lambda, SQS, and Elastic Beanstalk.',
        'Replaced Java Messaging Service integrations with AWS SQS for bulk processing.',
        'Owned deployments and created automation scripts for staging and production environments.',
      ],
      technologies: [
        'Java',
        'Spring Boot',
        'Angular',
        'React',
        'Liferay',
        'MongoDB',
        'Kafka',
        'AWS',
        'SQS',
        'Lambda',
        'MySQL',
        'SOAP',
        'REST APIs',
      ],
      accent: 'blue',
    },
    {
      id: 'jp-morgan-chase',
      company: 'JP Morgan Chase',
      position: 'Full Stack Developer',
      duration: 'October 2021 – November 2022',
      overview:
        'Designed resilient applications for private cloud, public cloud, on-premises, mobile, and desktop platforms with integrated telemetry, monitoring, alerting, and log aggregation.',
      description: [
        'Designed and implemented applications using Java, Spring MVC, Angular, React, and Node.js.',
        'Developed and managed MongoDB clusters and database integrations.',
        'Implemented MVC architecture and reusable Java design patterns.',
        'Created proof-of-concept solutions and deployed them to AWS production environments.',
        'Built cloud infrastructure using VPC, Route 53, ELB, EBS, EC2, and S3.',
        'Migrated microservices to AWS and deployed applications using Elastic Beanstalk.',
        'Implemented production monitoring and alerting using AWS CloudWatch.',
      ],
      technologies: [
        'Java',
        'Spring MVC',
        'Angular',
        'React',
        'Node.js',
        'MongoDB',
        'AWS',
        'CloudWatch',
        'Kotlin',
        'Hibernate',
        'Kafka',
        'Bootstrap',
      ],
      accent: 'indigo',
    },
    {
      id: 'paypal',
      company: 'PayPal',
      position: 'Frontend Developer',
      duration: 'June 2020 – September 2021',
      overview:
        'Created responsive single-page applications using Angular and React while integrating REST APIs, Spring Boot microservices, Kafka, MongoDB, AWS, and secure authentication services.',
      description: [
        'Developed responsive applications using Angular, React, TypeScript, JavaScript, HTML, and CSS.',
        'Created single-page applications and reusable component-based interfaces.',
        'Integrated frontend applications with REST APIs and Spring Boot services.',
        'Implemented microservice communication using REST APIs and Apache Kafka.',
        'Developed backend components using Java, Spring Boot, Hibernate, and JPA.',
        'Worked with MongoDB, AWS infrastructure, authentication, and Spring Security.',
        'Resolved cross-browser compatibility issues across major browsers.',
      ],
      technologies: [
        'Angular',
        'React',
        'TypeScript',
        'JavaScript',
        'Java',
        'Spring Boot',
        'Kafka',
        'MongoDB',
        'AWS',
        'REST APIs',
        'HTML',
        'CSS',
      ],
      accent: 'cyan',
    },
    {
      id: 'tech-mahindra',
      company: 'Tech Mahindra',
      position: 'Software Developer',
      duration: 'June 2017 – July 2018',
      overview:
        'Developed Java and Spring applications, REST and SOAP services, responsive Angular interfaces, MongoDB integrations, Redis caching, Docker deployments, and AWS infrastructure.',
      description: [
        'Developed enterprise applications using Java, Spring, dependency injection, and Spring MVC.',
        'Created REST APIs and SOAP web services with authentication and validation.',
        'Built responsive interfaces using Angular, JavaScript, Bootstrap, HTML, and CSS.',
        'Implemented MongoDB data-access solutions and Redis caching.',
        'Used AWS API Gateway, ECS, EC2, Auto Scaling, VPC, and Elastic Beanstalk.',
        'Applied software-design patterns including Singleton, Front Controller, Value Object, and DAO.',
        'Supported release planning, deployment coordination, issue tracking, and production releases.',
      ],
      technologies: [
        'Java',
        'Spring MVC',
        'Angular',
        'JavaScript',
        'MongoDB',
        'Redis',
        'AWS',
        'Docker',
        'REST APIs',
        'SOAP',
        'Bootstrap',
        'JIRA',
      ],
      accent: 'orange',
    },
  ],

  skills: [
    {
      category: 'Backend Development',
      skills: [
        'Java',
        'Java 8',
        'Java 11',
        'Java 17',
        'Spring Boot',
        'Spring MVC',
        'Spring Security',
        'Spring Cloud',
        'Hibernate',
        'JPA',
        'Kotlin',
        'Node.js',
        'REST APIs',
        'SOAP',
        'Microservices',
      ],
    },
    {
      category: 'Frontend Development',
      skills: [
        'React',
        'Angular',
        'AngularJS',
        'TypeScript',
        'JavaScript',
        'Redux',
        'HTML5',
        'CSS3',
        'Bootstrap',
        'Tailwind CSS',
        'JQuery',
      ],
    },
    {
      category: 'Cloud and DevOps',
      skills: [
        'AWS',
        'EC2',
        'S3',
        'Lambda',
        'SQS',
        'CloudWatch',
        'VPC',
        'Elastic Beanstalk',
        'Docker',
        'Kubernetes',
        'Jenkins',
        'Git',
        'GitHub Actions',
        'CI/CD',
      ],
    },
    {
      category: 'Databases and Messaging',
      skills: [
        'SQL',
        'PostgreSQL',
        'MySQL',
        'Oracle',
        'MongoDB',
        'DynamoDB',
        'Redis',
        'Kafka',
        'RabbitMQ',
      ],
    },
    {
      category: 'Testing and Quality',
      skills: [
        'JUnit',
        'Mockito',
        'Jest',
        'React Testing Library',
        'SonarQube',
        'TDD',
        'Code Reviews',
        'Performance Testing',
      ],
    },
    {
      category: 'Tools and Architecture',
      skills: [
        'IntelliJ IDEA',
        'Backstage',
        'Monorepo',
        'Liferay',
        'MVC',
        'Agile',
        'Scrum',
        'JIRA',
        'Design Patterns',
        'Distributed Systems',
      ],
    },
  ],

  education: [
    {
      id: 'florida-institute-of-technology',
      degree: "Master's Degree",
      field: 'Computer Information Systems',
      institution: 'Florida Institute of Technology',
      graduationYear: 'May 2020',
      gpa: '3.36',
    },
    {
      id: 'gitam-university',
      degree: "Bachelor's Degree",
      field: 'Electronics & Communication Engineering',
      institution: 'GITAM University',
      graduationYear: 'June 2017',
      gpa: '7.57',
    },
  ],
};