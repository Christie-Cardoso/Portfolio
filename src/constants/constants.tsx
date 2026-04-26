import { ChefHat, Gamepad2, Dumbbell, Volleyball } from "lucide-react";
import type { Project, Skill, Experience } from "../types/types";

export const PROJECTS: Project[] = [
  {
    id: "0",
    title: "Portal Câmara",
    description:
      "Plataforma de transparência parlamentar para acompanhamento de gastos, votações e proposições de Deputados Federais. Desenvolvida com Next.js e Tailwind CSS, utiliza a API de Dados Abertos da Câmara para fornecer dados reais e atualizados, com dashboards interativos e comparativos entre parlamentares.",
    image:
      "https://res.cloudinary.com/dmvm1mlgv/image/upload/v1777244780/portal_dznxdq.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "API REST",
      "Vercel",
    ],
    link: "https://portal-camara.vercel.app",
    github: "https://github.com/Christie-Cardoso/portal-camara",
  },
  {
    id: "1",
    title: "Portfolio Pessoal",
    description:
      "Site de portfólio pessoal desenvolvido com React e TypeScript, apresentando projetos, habilidades e experiências profissionais. Conta com formulário de contato integrado a uma API serverless para envio de emails, design moderno com Tailwind CSS e animações suaves.",
    image:
      "https://res.cloudinary.com/dmvm1mlgv/image/upload/v1767549351/portfolio_bj5eou.png",
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Node. js",
      "Serverless API",
    ],
    link: "https://christiecardoso.software",
    github: "https://github.com/Christie-Cardoso/Portfolio",
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
  badge: "Sobre Mim",
  title: "Desenvolvedora Full Stack com experiência em",
  location: "Arquitetura de Software.",
  paragraphs: [
    "Meu nome é <strong class='text-white'>Christie Cardoso</strong> e sou desenvolvedora <strong class='text-white'>Full Stack</strong>, com cerca de 2 anos de experiência. Trabalho principalmente com sistemas web, tanto no front quanto no back, sempre tentando manter o código simples e bem organizado.",
    "Concluí minha pós-graduação em <strong class='text-emerald-400'>Arquitetura de Software Distribuído pela PUC Minas</strong> (2025). Hoje trabalho na MyPetOne, mexendo em sistemas internos, automação de processos e integrações com ERPs e marketplaces.",
    "No front uso bastante React e Next.js. No back, Node.js e PostgreSQL. Costumo usar Docker e Prisma no dia a dia pra manter padrão e facilitar manutenção.",
  ],
  education: [
    { school: "PUC Minas", degree: "Pós-Graduação 2025", color: "emerald" },
    {
      school: "Rocketseat",
      degree: "Discover Rocketseat 2023",
      color: "blue",
    },
  ],
};

export const SKILLS: Skill[] = [
  // Frontend
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    category: "Frontend",
  },

  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    category: "Frontend",
  },

  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: "Frontend",
  },

  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    category: "Frontend",
  },

  {
    name: "Tailwind",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
    category: "Frontend",
  },

  {
    name: "Sass",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    category: "Frontend",
  },

  {
    name: "WordPress",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
    category: "Frontend",
  },

  // Backend & Database
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    category: "Backend & Database",
  },

  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    category: "Backend & Database",
  },

  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    category: "Backend & Database",
  },

  {
    name: "Prisma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
    category: "Backend & Database",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    category: "Backend & Database",
  },

  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    category: "Backend & Database",
  },

  // Tools & DevOps
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    category: "Tools & DevOps",
  },
  {
    name: "AWS",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    category: "Tools & DevOps",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    category: "Tools & DevOps",
  },
  {
    name: "GitHub Actions",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    category: "Tools & DevOps",
  },
  {
    name: "Jest",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
    category: "Tools & DevOps",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    category: "Tools & DevOps",
  },
  {
    name: "Linux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    category: "Tools & DevOps",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp1",
    company: "MyPetOne",
    role: "Desenvolvedor de Software Júnior",
    period: "Mai 2025 - Atual",
    description:
      "Participo no desenvolvimento e aprimoramento de sistemas internos escaláveis, com foco na automação de fluxos importantes e integração via APIs REST com grandes Marketplaces. No front-end, trabalho com React e Next.js usando Tailwind CSS para criar interfaces ágeis e de boa performance. Também colaboro na padronização de ambientes com Docker e na arquitetura de dados com PostgreSQL/MongoDB utilizando Prisma ORM, sempre buscando melhorar a eficiência e minimizar erros operacionais.",
    current: true,
  },
  {
    id: "exp2",
    company: "Domyni",
    role: "Estagiário de Desenvolvimento Web",
    period: "Ago 2023 - Fev 2024",
    description:
      "Desenvolvi soluções personalizadas para sites em WordPress, utilizando PHP e JavaScript. Meu foco estava na otimização de performance (Web Vitals) e na melhoria da UI/UX para oferecer uma experiência mais fluida ao usuário. Também fiquei responsável pela gestão dos ambientes de hospedagem via cPanel, incluindo a configuração de temas, plugins e manutenção preventiva para garantir o bom funcionamento e alta disponibilidade dos sites.",
    current: false,
  },
  {
    id: "exp3",
    company: "Rheoli Brasil",
    role: "Estagiário de Infraestrutura",
    period: "Jun 2023 - Ago 2023",
    description:
      "Prestei suporte técnico para usuários finais e auxiliei na administração de infraestrutura de redes. Implementei rotinas de backup e recuperação de dados para garantir a integridade da informação e a continuidade dos processos. Também fiquei envolvido na gestão de chamados técnicos e na configuração de máquinas em ambientes híbridos (Windows/Linux), sempre buscando resolver problemas de forma eficiente.",
    current: false,
  },
];

export const CONTACT_CONTENT = {
  title: "Contato",
  description:
    "Estou disponível para projetos freelance que me permitam aplicar e expandir minhas habilidades técnicas, sempre buscando novos desafios para crescer como desenvolvedor.",
  socialsTitle: "Me encontre em",
  directContactTitle: "Contato Direto",
  form: {
    nameLabel: "Seu Nome",
    namePlaceholder: "Ex: João Silva",
    emailLabel: "Seu E-mail",
    emailPlaceholder: "email@exemplo.com",
    subjectLabel: "Assunto",
    subjectPlaceholder: "Sobre o que vamos conversar?",
    messageLabel: "Sua Mensagem",
    messagePlaceholder: "Conte um pouco sobre sua ideia ou projeto...",
    buttonText: "Enviar Mensagem",
  },
};
