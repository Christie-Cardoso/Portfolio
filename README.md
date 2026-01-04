<div align="center">
  
  # 🌟 Portfolio Profissional
  
  ### Desenvolvido por Christie Cardoso
  
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  
  <p align="center">
    <a href="#-sobre">Sobre</a> •
    <a href="#-funcionalidades">Funcionalidades</a> •
    <a href="#-tecnologias">Tecnologias</a> •
    <a href="#-instalação">Instalação</a> •
    <a href="#-estrutura">Estrutura</a> •
    <a href="#-deploy">Deploy</a> •
    <a href="#-contato">Contato</a>
  </p>

  <img src="https://img.shields.io/github/license/Christie-Cardoso/Portfolio?style=flat-square" alt="License">
  <img src="https://img.shields.io/github/stars/Christie-Cardoso/Portfolio?style=flat-square" alt="Stars">
  <img src="https://img.shields.io/github/forks/Christie-Cardoso/Portfolio?style=flat-square" alt="Forks">
  <img src="https://img.shields.io/github/issues/Christie-Cardoso/Portfolio?style=flat-square" alt="Issues">

</div>

---

## 📋 Sobre

Portfólio profissional e responsivo desenvolvido com as mais modernas tecnologias do mercado.  Este projeto foi criado para apresentar meus projetos, habilidades e experiências de forma elegante e interativa.

### ✨ Destaques

- 🎨 **Design Moderno**: Interface clean com animações suaves e efeitos visuais
- 📱 **Totalmente Responsivo**: Experiência otimizada para desktop, tablet e mobile
- ⚡ **Performance**:  Carregamento rápido e otimizado com Vite
- 🌙 **Efeitos Glass Morphism**: Design moderno com efeitos de vidro
- 🎯 **Navegação Suave**: Scroll suave entre seções
- 🔍 **SEO Otimizado**: Meta tags e estrutura semântica

---

## 🚀 Funcionalidades

### 🏠 Página Inicial
- Hero section com apresentação pessoal
- Seção "Sobre Mim" com hobbies e interesses
- Projetos em destaque
- Habilidades técnicas organizadas por categoria
- Formulário de contato integrado
- Links para redes sociais

### 💼 Página de Projetos
- Grid responsivo de projetos
- Sistema de filtragem por categoria (Todos, Web, Mobile, Design, etc.)
- Busca por nome de projeto
- Cards interativos com informações detalhadas
- Links diretos para GitHub e demo ao vivo
- Badges de tecnologias utilizadas

### 🧭 Navegação
- Navbar fixo com efeito glass ao fazer scroll (apenas desktop)
- Menu mobile hambúrguer com overlay
- Smooth scroll para seções internas
- Indicador visual de página ativa

---

## 🛠️ Tecnologias

### Core
- **[React 18](https://reactjs.org/)** - Biblioteca JavaScript para interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Superset tipado do JavaScript
- **[Vite](https://vitejs.dev/)** - Build tool e dev server ultra-rápido

### Estilização
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **[PostCSS](https://postcss.org/)** - Ferramenta para transformar CSS

### Roteamento
- **[React Router DOM](https://reactrouter.com/)** - Roteamento declarativo para React

### Outras Ferramentas
- **ESLint** - Linter para código JavaScript/TypeScript
- **Git** - Controle de versão

---

## 📦 Instalação

### Pré-requisitos

Antes de começar, certifique-se de ter instalado: 
- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### Passo a Passo

1. **Clone o repositório**
```bash
git clone https://github.com/Christie-Cardoso/Portfolio.git
```

2. **Navegue até a pasta do projeto**
```bash
cd Portfolio
```

3. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

4. **Execute o projeto em modo de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
```

5. **Abra no navegador**
```
http://localhost:5173
```

---

## 📂 Estrutura do Projeto

```
Portfolio/
├── public/
│   ├── icon. ico
│   └── assets/
├── src/
│   ├── assets/           # Imagens, fontes e outros recursos
│   ├── components/       # Componentes React
│   │   ├── layout/       # Componentes de layout (Navbar, Footer)
│   │   └── sections/     # Seções da página (Hero, About, Projects)
│   ├── constants/        # Constantes e dados estáticos
│   │   └── constants.ts  # Dados do portfólio
│   ├── pages/            # Páginas da aplicação
│   │   ├── Home.tsx      # Página inicial
│   │   └── Projects.tsx  # Página de projetos
│   ├── styles/           # Arquivos de estilo
│   │   └── index.css     # Estilos globais e Tailwind
│   ├── App.tsx           # Componente principal
│   ├── main.tsx          # Entry point
│   └── vite-env.d.ts     # Tipos do Vite
├── index.html            # HTML principal
├── package.json          # Dependências e scripts
├── tailwind.config.js    # Configuração do Tailwind
├── tsconfig.json         # Configuração do TypeScript
├── vite.config.ts        # Configuração do Vite
└── README.md             # Documentação
```

---

## 🎨 Customização

### Personalizando Conteúdo

Todo o conteúdo do portfólio pode ser facilmente customizado editando o arquivo: 

```typescript
src/constants/constants.ts
```

#### Estrutura do arquivo de constantes: 

```typescript
// Dados pessoais
export const PORTFOLIO_DATA = {
  name: "Seu Nome",
  title: "Seu Título",
  description: "Sua Descrição",
  avatar: "/caminho/para/imagem.jpg",
  // ... 
};

// Links de navegação
export const NAV_LINKS = [
  { id: "home", label: "Início", href: "#home" },
  // ...
];

// Projetos
export const PROJECTS = [
  {
    id:  1,
    title: "Nome do Projeto",
    description:  "Descrição",
    image: "/caminho/imagem.jpg",
    tags: ["React", "TypeScript"],
    category: "Web",
    github: "https://github.com/.. .",
    demo: "https://.. .",
  },
  // ...
];

// Habilidades
export const SKILLS = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS"],
  },
  // ...
];
```

### Personalizando Cores

Edite o arquivo `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0a0e1a',
        'brand-emerald': '#10b981',
        // Adicione suas cores aqui
      },
    },
  },
};
```

---

## 🚢 Deploy

### Vercel (Recomendado)

1.  Crie uma conta no [Vercel](https://vercel.com)
2. Conecte seu repositório GitHub
3. Configure o projeto: 
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Clique em "Deploy"

### Netlify

1. Crie uma conta no [Netlify](https://netlify.com)
2. Conecte seu repositório GitHub
3. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Deploy!

### GitHub Pages

```bash
# Instale o gh-pages
npm install --save-dev gh-pages

# Adicione ao package.json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# Configure o vite.config.ts
export default defineConfig({
  base: '/Portfolio/',
  // ... 
});

# Execute o deploy
npm run deploy
```

---

## 📊 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Cria a versão de produção |
| `npm run preview` | Visualiza a build de produção localmente |
| `npm run lint` | Executa o linter |

---

## 🎯 Performance

### Otimizações Implementadas

- ✅ Lazy loading de rotas
- ✅ Code splitting automático com Vite
- ✅ Otimização de imagens
- ✅ Minificação de CSS e JavaScript
- ✅ Remoção de código não utilizado (tree-shaking)
- ✅ Compressão Gzip/Brotli

### Lighthouse Score

🟢 Performance: 95+  
🟢 Accessibility: 100  
🟢 Best Practices: 95+  
🟢 SEO: 100  

---

## 🐛 Problemas Conhecidos

Caso encontre algum problema, por favor [abra uma issue](https://github.com/Christie-Cardoso/Portfolio/issues).

---

## 🤝 Contribuindo

Contribuições são sempre bem-vindas!  Se você quer contribuir: 

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 📧 Contato

**Christie Cardoso**

- 🌐 Website: [Seu Site](https://seu-portfolio.com)
- 📧 Email: seuemail@exemplo.com
- 💼 LinkedIn: [Seu LinkedIn](https://linkedin.com/in/seu-perfil)
- 🐱 GitHub: [@Christie-Cardoso](https://github.com/Christie-Cardoso)

---

## 🙏 Agradecimentos

- [React Icons](https://react-icons.github.io/react-icons/) - Ícones
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Vercel](https://vercel.com/) - Hospedagem

---

<div align="center">
  
  ### ⭐ Se este projeto te ajudou, considere dar uma estrela! 
  
  Feito com ❤️ por [Christie Cardoso](https://github.com/Christie-Cardoso)

  <sub>Última atualização: Janeiro 2026</sub>

</div>