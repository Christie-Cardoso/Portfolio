import React from "react";
import { EXPERIENCES } from "../../constants/constants";
import Card from "../ui/Card";

const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Trajetória Profissional
            </h2>
          </div>

          <div className="md:w-2/3 space-y-12">
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.id}
                className="relative pl-10 border-l border-emerald-500/20 last:border-0 pb-12 last:pb-0 group"
              >
                <div
                  className={`absolute top-0 -left-1.25 w-2.5 h-2.5 rounded-full border-2 border-emerald-500 ${
                    exp.current
                      ? "bg-emerald-500 ring-4 ring-emerald-500/20"
                      : "bg-slate-900"
                  } transition-all group-hover:scale-150`}
                ></div>

                <Card
                  padding="md"
                  rounded="2xl"
                  className="group-hover:bg-white/5"
                >
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-emerald-500 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-sm text-slate-500 bg-slate-800 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
