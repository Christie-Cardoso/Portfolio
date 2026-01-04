import React from "react";
import { PORTFOLIO_DATA } from "../../constants/constants";
import Button from "../ui/Button";
import { Download } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 order-2 md:order-1">
          <div className="space-y-4">
            <h2 className="text-emerald-400 font-mono tracking-wider text-sm md:text-base uppercase">
              Olá, me chamo
            </h2>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
              {PORTFOLIO_DATA.name.split(" ")[0]}{" "}
              {PORTFOLIO_DATA.name.split(" ")[1]}
            </h1>
            <h3 className="text-2xl md:text-4xl font-semibold text-slate-400">
              {PORTFOLIO_DATA.role}
            </h3>
          </div>
          <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
            {PORTFOLIO_DATA.bio}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              as="a"
              href="/curriculo.pdf"
              download
              size="lg"
              icon={Download}
              iconPosition="left"
            >
              Baixar Currículo
            </Button>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-emerald-500 to-blue-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-slate-900 rounded-3xl overflow-hidden aspect-square w-80 md:w-96 shadow-2xl">
              <img
                src={PORTFOLIO_DATA.avatar}
                alt={PORTFOLIO_DATA.name}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
