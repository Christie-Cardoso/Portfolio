import React from "react";
import { useTranslation, Trans } from "react-i18next";
import { HOBBIES, ABOUT_CONTENT } from "../../constants/constants";

const About: React.FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <div id="about" className="py-32 container mx-auto px-6">
      <div className="grid lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <h2 className="text-emerald-500 font-mono text-sm tracking-[0.3em] uppercase font-bold">
              {t("about.badge")}
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              {t("about.title")}{" "}
              <span className="gradient-text">{t("about.location")}</span>
            </h3>
          </div>
          <div className="text-slate-400 space-y-6 text-lg leading-relaxed">
            <p>
              <Trans i18nKey="about.p1">
                Meu nome é <strong className="text-white">Christie Cardoso</strong> e sou desenvolvedora <strong className="text-white">Full Stack</strong>, com cerca de 2 anos de experiência. Trabalho principalmente com sistemas web, tanto no front quanto no back, sempre tentando manter o código simples e bem organizado.
              </Trans>
            </p>
            <p>
              <Trans i18nKey="about.p2">
                Concluí minha pós-graduação em <strong className="text-emerald-400">Arquitetura de Software Distribuído pela PUC Minas</strong> (2025). Hoje trabalho na MyPetOne, mexendo em sistemas internos, automação de processos e integrações com ERPs e marketplaces.
              </Trans>
            </p>
            <p>
              <Trans i18nKey="about.p3">
                No front uso bastante React e Next.js. No back, Node.js e PostgreSQL. Costumo usar Docker e Prisma no dia a dia pra manter padrão e facilitar manutenção.
              </Trans>
            </p>
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
          <div className="glass p-8 rounded-[2.5rem] border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <h4 className="text-xl font-bold text-white mb-8 flex items-center">
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
              {i18n.language === "pt" ? "Lado Pessoal & Hobbies" : "Personal Side & Hobbies"}
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
                    <p className="text-white font-bold text-sm">{t(`hobbies.${hobby.name}`)}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
