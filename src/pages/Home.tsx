import React from "react";
import { useNavigate } from "react-router-dom";

import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import ExperienceTimeline from "../components/sections/ExperienceTimeline";
import Projects from "../components/sections/Projects";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <ExperienceTimeline />
      <div id="projects">
        <Projects featuredOnly onViewAll={() => navigate("/projects")} />
      </div>
    </main>
  );
};

export default Home;
