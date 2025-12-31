import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { PROJECTS } from "../constants/constants";

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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-emerald-500 transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
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
              <div
                key={project.id}
                className="group flex flex-col glass rounded-4xl overflow-hidden hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-10"
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
                  <div className="absolute inset-0 bg-linear-to-t fronao m-brand-dark via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-emerald-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">
                    {project.tags[0]}
                  </div>
                </div>

                <div className="p-8 space-y-4 flex-1 flex flex-col">
                  <h3 className="text-3xl font-bold text-white leading-tight group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm flex-1">
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
                    <a
                      href={project.link}
                      className="flex items-center text-white font-bold text-sm hover:text-emerald-400 transition-colors"
                    >
                      Demo Live
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                    <a
                      href={project.github}
                      className="flex items-center text-slate-400 font-bold text-sm hover:text-white transition-colors"
                    >
                      Code
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
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
            <button
              onClick={() => {
                setFilter("All");
                setSearch("");
              }}
              className="text-emerald-500 font-bold underline"
            >
              Limpar filtros
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
