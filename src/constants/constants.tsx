import type { Project } from "../types/types";

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Teste 1",
    description: "Teste 1",
    image: "",
    tags: ["Next.js", "API REST", "Node.js", "Docker"],
    link: "#",
    github: "#",
  },
  {
    id: "2",
    title: "Teste 1",
    description: "Teste 2",
    image: "",
    tags: ["React", "WordPress", "PHP", "Lighthouse"],
    link: "#",
    github: "#",
  },
  {
    id: "3",
    title: "Teste 1",
    description: "Teste 1",
    image: "",
    tags: ["Docker", "GitHub Actions", "AWS", "Linux"],
    link: "#",
    github: "#",
  },
];
export const PORTFOLIO_DATA = {
  name: "Christie Cardoso Cavalcante",
  role: "Desenvolvedor Full Stack",
  bio: "Sou desenvolvedor Full Stack com 2 anos de experiência prática, com foco em React, Next.js e Node.js. Pós-graduado em Arquitetura de Software Distribuído, com atuação em automação de processos e desenvolvimento de sistemas escaláveis.",
  email: "christiecardoso@hotmail.com",
  location: "Belo Horizonte, MG",
  linkedin: "https://www.linkedin.com/in/christie-cardoso",
  github: "https://github.com/Christie-Cardoso",
  phone: "(31) 99303-4536",
  avatar:
    "https://res.cloudinary.com/dmvm1mlgv/image/upload/v1767217526/profile.jpg",
};

export const NAV_LINKS = [
  { label: "Sobre", href: "#about", id: "about" },
  { label: "Tecnologias", href: "#skills", id: "skills" },
  { label: "Experiência", href: "#experience", id: "experience" },
];
