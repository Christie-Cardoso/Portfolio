import React from "react";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import ExperienceTimeline from "../components/sections/ExperienceTimeline";

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <ExperienceTimeline />
    </main>
  );
};

export default Home;
