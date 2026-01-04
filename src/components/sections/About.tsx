import React from "react";
import { HOBBIES, ABOUT_CONTENT } from "../../constants/constants";
import Card from "../ui/Card";

const About: React.FC = () => {
  return (
    <div id="about" className="py-32 container mx-auto px-6">
      <div className="grid lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <h2 className="text-emerald-500 font-mono text-sm tracking-[0.3em] uppercase font-bold">
              {ABOUT_CONTENT.badge}
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              {ABOUT_CONTENT.title}{" "}
              <span className="gradient-text">{ABOUT_CONTENT.location}</span>
            </h3>
          </div>
          <div className="text-slate-400 space-y-6 text-lg leading-relaxed">
            {ABOUT_CONTENT.paragraphs.map((p, idx) => (
              <p key={idx} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            {ABOUT_CONTENT.education.map((edu, idx) => (
              <div
                key={idx}
                className={`glass px-6 py-4 rounded-2xl border-white/5 bg-${edu.color}-500/5`}
              >
                <p className={`text-${edu.color}-500 font-bold text-2xl`}>
                  {edu.school}
                </p>
                <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">
                  {edu.degree}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 space-y-10">
          <Card
            glow
            glowColor="emerald"
            rounded="4xl"
            padding="lg"
            className="relative overflow-hidden group"
          >
            <h4 className="text-xl font-bold text-white mb-8 flex items-center">
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
              Lado Pessoal & Hobbies
            </h4>

            <div className="grid grid-cols-2 gap-4">
              {HOBBIES.map((hobby) => {
                const Icon = hobby.icon;
                return (
                  <div
                    key={hobby.name}
                    className="flex flex-col items-center justify-center text-center p-4 rounded-2xl bg-white/2 border border-white/5 hover:bg-white/5 hover:border-emerald-500/30 transition-all cursor-default"
                  >
                    <Icon
                      className="w-8 h-8 mb-3 text-emerald-500"
                      strokeWidth={1.5}
                    />
                    <p className="text-white font-bold text-sm">{hobby.name}</p>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
