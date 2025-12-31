import { ChefHat, Gamepad2, Dumbbell, Volleyball } from "lucide-react";
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
  name: "Christie Cardoso",
  role: "Desenvolvedora Full Stack",
  bio: "Atuo no desenvolvimento de sistemas web com foco em React, Next.js e Node.js. Tenho 2 anos de experiência prática e pós-graduação em Arquitetura de Software Distribuído.",
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

export const HOBBIES = [
  { name: "Gastronomia", icon: ChefHat },
  { name: "Video Game", icon: Gamepad2 },
  { name: "Academia", icon: Dumbbell },
  { name: "Futebol", icon: Volleyball },
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "Meu nome é <strong class='text-white'>Christie Cardoso</strong> e sou desenvolvedora <strong class='text-white'>Full Stack</strong>, com cerca de 2 anos de experiência. Trabalho principalmente com sistemas web, tanto no front quanto no back, sempre tentando manter o código simples e bem organizado.",
    "Concluí minha pós-graduação em <strong class='text-emerald-400'>Arquitetura de Software Distribuído pela PUC Minas</strong> (2025). Hoje trabalho na MyPetOne, mexendo em sistemas internos, automação de processos e integrações com ERPs e marketplaces.",
    "No front uso bastante React e Next.js. No back, Node.js e PostgreSQL. Costumo usar Docker e Prisma no dia a dia pra manter padrão e facilitar manutenção.",
  ],
  education: [
    { school: "PUC Minas", degree: "Pós-Graduação 2025", color: "emerald" },
    {
      school: "Rocketseat",
      degree: "Certificação IA & Frontend",
      color: "blue",
    },
  ],
};
