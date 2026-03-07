export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  imgSrcs: string[];
  liveDemoLink?: string;
  githubLink?: string;
  featured?: boolean;
  category: 'fullstack' | 'frontend' | 'mobile' | 'backend';
}

export interface Skill {
  name: string;
  category: 'language' | 'framework' | 'tool' | 'database' | 'cloud';
  level?: number; // 1-5
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies?: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NavItem {
  label: string;
  href: string;
}
