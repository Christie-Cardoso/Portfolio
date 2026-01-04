import React from "react";
import { SKILLS } from "../../constants/constants";
import Card from "../ui/Card";

const Skills: React.FC = () => {
  const categories: ("Frontend" | "Backend & Database" | "Tools & DevOps")[] = [
    "Frontend",
    "Backend & Database",
    "Tools & DevOps",
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-125 h-125 bg-blue-500/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-emerald-500/5 rounded-full blur-[120px] -ml-64 -mb-64"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-20 text-center mx-auto">
          <h2 className="text-emerald-500 font-mono text-sm tracking-[0.3em] uppercase font-bold mb-4">
            TECNOLOGIAS
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ferramentas de{" "}
            <span className="gradient-text">Desenvolvimento</span>
          </h3>
        </div>

        <div className="space-y-20">
          {categories.map((cat) => (
            <div key={cat} className="space-y-10">
              <div className="flex items-center space-x-6">
                <h4 className="text-2xl font-bold text-white whitespace-nowrap">
                  {cat}
                </h4>
                <div className="h-px w-full bg-linear-to-r from-white/10 to-transparent"></div>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6">
                {SKILLS.filter((s) => s.category === cat).map((skill) => (
                  <Card
                    key={skill.name}
                    variant="hover-lift"
                    padding="md"
                    rounded="4xl"
                    className="flex flex-col items-center justify-center"
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 mb-4 flex items-center justify-center relative group">
                      {/* Glow background on hover */}
                      <div className="absolute inset-0 bg-white/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-full h-full object-contain relative z-10 transition-all duration-500 group-hover:scale-110"
                      />
                    </div>

                    <span className="text-slate-500 font-medium text-xs group-hover:text-emerald-400 transition-colors text-center uppercase tracking-wider">
                      {skill.name}
                    </span>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
