import React from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { PROJECTS } from "../../constants/constants";

interface ProjectsProps {
  featuredOnly?: boolean;
  onViewAll?: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ featuredOnly, onViewAll }) => {
  const { t } = useTranslation();
  const displayProjects = featuredOnly ? PROJECTS.slice(0, 3) : PROJECTS;

  return (
    <section className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {t("projects.title")}
            </h2>
          </div>
          {featuredOnly && (
            <button
              onClick={onViewAll}
              className="flex items-center space-x-2 text-emerald-500 font-bold group cursor-pointer"
            >
              <span>{t("projects.viewAll")}</span>
              <ArrowRight className="h-5 w-5 group-hover: translate-x-1 transition-transform" />
            </button>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col h-full glass rounded-3xl overflow-hidden hover:border-emerald-500/30 transition-all"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                 <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {t(`projects.items.${project.id}.title`)}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                  {t(`projects.items.${project.id}.description`)}
                </p>

                <div className="flex items-center space-x-4 pt-4 border-t border-white/5">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-emerald-400 transition-colors flex items-center text-sm font-semibold cursor-pointer"
                  >
                    {t("projects.demo")}
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
