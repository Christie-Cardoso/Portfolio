# Portfolio

Este é o meu portfólio pessoal, desenvolvido para apresentar minhas habilidades, projetos e experiência profissional de uma forma moderna e interativa.

## Visão Geral do Projeto

O projeto é um site de página única (Single Page Application - SPA) construído com React e TypeScript. Ele apresenta uma interface limpa e responsiva, com seções para "Sobre Mim", "Habilidades", "Experiência", "Projetos" e "Contato". A navegação é suave e a aplicação é projetada para ser performática e escalável.

## Tecnologias Utilizadas

O projeto utiliza um conjunto de tecnologias modernas para o desenvolvimento web:

- **React:** Biblioteca para construção de interfaces de usuário.
- **TypeScript:** Superset de JavaScript que adiciona tipagem estática.
- **Vite:** Ferramenta de build extremamente rápida para desenvolvimento front-end.
- **Tailwind CSS:** Framework de CSS utilitário para estilização.
- **React Router:** Para roteamento de páginas.
- **React Hook Form:** Para gerenciamento de formulários.
- **Zod:** Para validação de schemas.
- **Lucide React:** Biblioteca de ícones.
- **EmailJS:** Para envio de e-mails do formulário de contato.

## Arquitetura

O projeto segue uma arquitetura baseada em componentes, comum em aplicações React.

- **`src/`**: Diretório principal do código-fonte.
  - **`main.tsx`**: Ponto de entrada da aplicação.
  - **`App.tsx`**: Componente principal que gerencia o roteamento e a estrutura geral da página.
  - **`components/`**: Contém componentes reutilizáveis.
    - **`layout/`**: Componentes de layout como `Navbar` e `Footer`.
    - **`sections/`**: Componentes que representam as seções da página inicial (`Hero`, `About`, `Skills`, etc.).
  - **`pages/`**: Contém os componentes de página, como `Home` e `Projects`.
  - **`styles/`**: Arquivos de estilo globais.
  - **`constants/`**: Constantes utilizadas na aplicação.
  - **`types/`**: Definições de tipos TypeScript.

## Como Funciona

A aplicação é inicializada no `main.tsx`, que renderiza o componente `App`. O `App.tsx` configura o `BrowserRouter` do `react-router-dom` para gerenciar as rotas. A rota principal (`/`) renderiza a página `Home`, que por sua vez é composta por várias seções (`About`, `Skills`, etc.). Há também uma rota para `/projects` que carrega a página de projetos de forma assíncrona (lazy loading) para melhor performance.

## Começando

Para executar o projeto localmente, siga estes passos:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Christie-Cardoso/Portfolio
   ```
2. **Instale as dependências:**
   ```bash
   npm install
   ```
3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

## Scripts Disponíveis

- **`npm run dev`**: Inicia o servidor de desenvolvimento com Vite.
- **`npm run build`**: Compila a aplicação para produção.
- **`npm run lint`**: Executa o linter ESLint.
- **`npm run preview`**: Inicia um servidor local para visualizar a build de produção.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está sob a licença MIT.
