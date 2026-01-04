import React from "react";
import { PROJECTS } from "../../constants/constants";
import Card, { CardImage, CardContent } from "../ui/Card";
import Button from "../ui/Button";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

interface ProjectsProps {
  featuredOnly?: boolean;
  onViewAll?: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ featuredOnly, onViewAll }) => {
  const displayProjects = featuredOnly ? PROJECTS.slice(0, 3) : PROJECTS;

  return (
    <section className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Projetos em Destaque
            </h2>
          </div>
          {featuredOnly && (
            <Button
              variant="link"
              icon={ArrowRight}
              iconPosition="right"
              onClick={onViewAll}
            >
              Ver todos os projetos
            </Button>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project) => (
            <Card
              key={project.id}
              variant="hover-lift"
              padding="none"
              rounded="3xl"
              className="group flex flex-col h-full"
            >
              <CardImage src={project.image} alt={project.title} />

              <CardContent>
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
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex items-center space-x-4 pt-4 border-t border-white/5">
                  <Button
                    as="a"
                    href={project.link}
                    variant="ghost"
                    size="sm"
                    icon={ExternalLink}
                    iconPosition="right"
                    className="text-white hover:text-emerald-400"
                  >
                    Ver Demo
                  </Button>
                  <Button
                    as="a"
                    href={project.github}
                    variant="ghost"
                    size="sm"
                    icon={Github}
                    className="text-slate-400 hover:text-white p-2"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
