import React from "react";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
    </main>
  );
};

export default Home;
