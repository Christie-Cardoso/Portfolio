import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { PROJECTS } from "../constants/constants";
import Card, { CardContent } from "../components/ui/Card";
import Button from "../components/ui/Button";
import { Search, ExternalLink, Github, ArrowLeft } from "lucide-react";

const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const categories = useMemo(() => {
    const allTags = PROJECTS.flatMap((p) => p.tags);
    return ["All", ...Array.from(new Set(allTags))];
  }, []);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesFilter = filter === "All" || project.tags.includes(filter);
      const matchesSearch =
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [filter, search]);

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="mb-16 space-y-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <Link
                to="/"
                className="flex items-center text-slate-400 hover:text-white mb-4 transition-colors group"
              >
                <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                Voltar para Início
              </Link>
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                Galeria de <span className="gradient-text">Projetos</span>
              </h1>
            </div>

            <div className="relative group max-w-sm w-full">
              <input
                type="text"
                placeholder="Buscar projeto ou tecnologia..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-slate-900/80 border border-white/10 rounded-2xl px-12 py-4 text-white placeholder:text-slate-600 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all shadow-xl"
              />
              <Search className="h-5 w-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-emerald-500 transition-colors" />
            </div>
          </div>

          <div className="flex flex-wrap gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                  filter === cat
                    ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20"
                    : "bg-slate-800 text-slate-400 border border-white/5 hover:bg-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project, idx) => (
              <Card
                key={project.id}
                variant="hover-lift"
                padding="none"
                rounded="4xl"
                className="group flex flex-col animate-in fade-in slide-in-from-bottom-10"
                style={{
                  animationDelay: `${idx * 50}ms`,
                  animationFillMode: "both",
                }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 bg-emerald-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">
                    {project.tags[0]}
                  </div>
                </div>

                <CardContent>
                  <h3 className="text-3xl font-bold text-white leading-tight group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm flex-1 mt-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono text-slate-500 bg-white/5 px-2 py-0.5 rounded"
                      >
                        #{tag.toLowerCase()}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-6 pt-6 border-t border-white/5">
                    <Button
                      as="a"
                      href={project.link}
                      variant="ghost"
                      size="sm"
                      icon={ExternalLink}
                      iconPosition="right"
                      className="text-white hover:text-emerald-400"
                    >
                      Demo Live
                    </Button>
                    <Button
                      as="a"
                      href={project.github}
                      variant="ghost"
                      size="sm"
                      icon={Github}
                      iconPosition="right"
                      className="text-slate-400 hover:text-white"
                    >
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="py-40 text-center space-y-6 glass rounded-3xl border-white/5 animate-pulse">
            <h3 className="text-3xl font-bold text-slate-500">
              Nenhum projeto encontrado
            </h3>
            <p className="text-slate-600">
              Tente buscar por outro termo ou categoria.
            </p>
            <Button
              variant="link"
              onClick={() => {
                setFilter("All");
                setSearch("");
              }}
            >
              Limpar filtros
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
