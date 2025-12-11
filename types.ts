export type Language = 'en' | 'vi';

export interface Translation {
  nav: {
    about: string;
    education: string;
    experience: string;
    skills: string;
    projects: string;
    contact: string;
    resume: string;
  };
  hero: {
    role: string;
    greeting: string;
    description: string;
    cta: string;
  };
  sectionTitles: {
    about: string;
    education: string;
    experience: string;
    skills: string;
    projects: string;
    contact: string;
    certificates: string;
  };
  common: {
    present: string;
    techStack: string;
    viewProject: string;
  };
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  details: string;
}

export interface ProjectItem {
  name: string;
  description: string;
  techStack: string[];
  url?: string;
  features?: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  github: string;
  linkedin?: string;
}