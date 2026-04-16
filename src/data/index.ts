import type { Project, Skill, Experience, NavItem } from '@/types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/abhishek-ugale-b877b4213/',
  github: 'https://github.com/abhiugale',
  email: 'abhiugale2002@gmail.com',
  instagram: 'https://www.instagram.com/abhiugale_/',
  resume: '/assets/Resume/Abhishek_Sunil_Ugale_26.pdf',
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'SmartERP',
    description: 'A comprehensive ERP system for college management with modules for students, faculty, attendance, and results.',
    longDescription: 'Developed a fully-featured SmartERP System for College Management with role-based access, real-time dashboards, student management, faculty portal, attendance tracking, and academic result processing.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    category: 'fullstack',
    imgSrcs: [
      '/assets/SmartERP/img-1.png',
      '/assets/SmartERP/img-2.png',
      '/assets/SmartERP/img-3.png',
      '/assets/SmartERP/img-4.png',
    ],
    liveDemoLink: '',
    githubLink: 'https://github.com/abhiugale',
    featured: true,
  },
  {
    id: 2,
    title: 'Movie Recommender',
    description: 'A movie recommendation web app built with JSP & Servlet using collaborative filtering algorithms.',
    longDescription: 'Developed a movie recommender web application using JSP & Servlet with collaborative filtering for personalized recommendations.',
    techStack: ['Java', 'JSP', 'Servlet', 'MySQL', 'Bootstrap'],
    category: 'fullstack',
    imgSrcs: [
      '/assets/MovieRecommender/img-1.png',
      '/assets/MovieRecommender/img-2.png',
      '/assets/MovieRecommender/img-3.png',
    ],
    liveDemoLink: '',
    githubLink: 'https://github.com/abhiugale/MovieRecommender',
    featured: true,
  },
  {
    id: 3,
    title: 'KrishiKraft e-Commerce',
    description: 'A comprehensive agricultural e-commerce platform with product listings, services, and optimized checkout experience.',
    longDescription: 'KrishiKraft is a comprehensive agricultural platform with Home, Product listing, Services, and Checkout pages. Built with HTML, CSS, JavaScript, PHP, and MySQL.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    category: 'frontend',
    imgSrcs: [
      '/assets/Krishikraft/img-1.png',
      '/assets/Krishikraft/img-2.png',
      '/assets/Krishikraft/img-3.png',
    ],
    liveDemoLink: '',
    githubLink: '',
    featured: true,
  },
  {
    id: 4,
    title: 'Background Generator',
    description: 'A React.js web app that enables users to create visually stunning backgrounds with gradient options and real-time preview.',
    longDescription: 'A background generator web application using React.js with real-time gradient preview.',
    techStack: ['React', 'CSS', 'JavaScript'],
    category: 'frontend',
    imgSrcs: [
      '/assets/BG-Generator/img-1.png',
      '/assets/BG-Generator/img-2.png',
    ],
    liveDemoLink: '',
    githubLink: 'https://github.com/abhiugale/background-generator.git',
  },
  {
    id: 5,
    title: 'Event Management System',
    description: 'A full-featured event management platform with user registrations, ticketing, and attendee management using React & MySQL.',
    longDescription: 'Built a comprehensive event management system covering event creation, management, promotion, and attendee management.',
    techStack: ['React', 'Node.js', 'MySQL', 'Express'],
    category: 'fullstack',
    imgSrcs: [
      '/assets/Event-Management/img-1.png',
      '/assets/Event-Management/img-2.png',
      '/assets/Event-Management/img-3.png',
    ],
    liveDemoLink: '',
    githubLink: 'https://github.com/abhiugale/event-management.git',
  },
  {
    id: 6,
    title: 'Real Estate Website',
    description: 'A real estate platform with property listings, mortgage calculator, and seamless checkout. Hosted on Firebase.',
    longDescription: 'Orchestrated the creation of Home, Property listing, Mortgage Calculator, and Checkout pages. Hosted on Firebase.',
    techStack: ['React', 'Firebase', 'CSS', 'JavaScript'],
    category: 'frontend',
    imgSrcs: [
      '/assets/Real-Estate/img-1.png',
      '/assets/Real-Estate/img-2.png',
      '/assets/Real-Estate/img-3.png',
    ],
    liveDemoLink: 'https://realestate-22a2a.web.app/',
    githubLink: 'https://github.com/abhiugale/Real-Estate-Project.git',
  },
];

export const SKILLS: Skill[] = [
  { name: 'Java', category: 'language', level: 5 },
  { name: 'JavaScript', category: 'language', level: 5 },
  { name: 'TypeScript', category: 'language', level: 4 },
  { name: 'C++', category: 'language', level: 3 },
  { name: 'HTML', category: 'language', level: 5 },
  { name: 'CSS', category: 'language', level: 5 },
  { name: 'SpringBoot', category: 'framework', level: 4 },
  { name: 'Hibernate', category: 'framework', level: 3 },
  { name: 'React.js', category: 'framework', level: 5 },
  { name: 'Nest.js', category: 'framework', level: 3 },
  { name: 'MongoDB', category: 'database', level: 4 },
  { name: 'MySQL', category: 'database', level: 4 },
  { name: 'Git', category: 'tool', level: 5 },
  { name: 'VS Code', category: 'tool', level: 5 },
  { name: 'Compass', category: 'tool', level: 4 },
  { name: 'NPM', category: 'tool', level: 5 },
  { name: 'AWS', category: 'cloud', level: 4 },
  { name: 'AWS S3', category: 'cloud', level: 4 },
  { name: 'AWS Lambda', category: 'cloud', level: 3 },
  { name: 'AWS RDS', category: 'cloud', level: 4 },
  { name: 'Vercel', category: 'cloud', level: 5 },
  { name: 'Render', category: 'cloud', level: 4 },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    role: 'Software Developer Engineer (Tech Lead)',
    company: 'Nexoraa Technosolve Pvt. Ltd.',
    period: 'Dec 2025 — Present',
    description: [
      'Architecting a multi-tenant Portfolio ecosystem for Nexoraa Technosolve using the MERN stack, ensuring scalable infrastructure for diverse business needs.',
      'Engineered a sophisticated real-time chatbot system utilizing WebSockets, React, and Nest.js, integrated with MongoDB for high-concurrency data handling.',
      'Developed a high-performance Flutter mobile application for support agents, featuring a tiered access hierarchy (SuperAdmin, Tenant Admin, and Agent).',
      'Implemented a centralized management dashboard allowing users to monitor and control multiple chatbots simultaneously across different client accounts.',
      'Automated client-to-company communication channels by integrating secure SMTP services and dynamic contact forms.',
      'Serving as Technical Lead to mentor junior developers, conducting rigorous code reviews and defining software architecture standards.',
      'Driving technical excellence by championing modular design patterns and ensuring robust code quality across all project verticals.'
    ],
    technologies: ['React.js', 'Nest.js', 'MongoDB', 'Flutter', 'WebSocket', 'REST APIs'],
  }
];
