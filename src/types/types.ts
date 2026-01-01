export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: "Frontend" | "Backend & Database" | "Tools & DevOps";
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  current: boolean;
}
