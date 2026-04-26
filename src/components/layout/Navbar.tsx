import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../../constants/constants";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, target: string) => {
    if (isHome) {
      e.preventDefault();
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${target}`);
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
        <nav
          className={`
            relative flex items-center justify-end md:justify-center transition-[max-width,padding,background-color,border-radius] duration-500 ease-in-out
            ${
              isScrolled
                ? " py-3 rounded-2xl bg-white/3 backdrop-blur-md w-full max-w-2xl"
                : " py-4 w-full max-w-7xl bg-transparent"
            }
          `}
        >
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 md:justify-center w-full">
            {NAV_LINKS.map((link) =>
              isHome ? (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-emerald-400 transition-all hover:bg-white/5 rounded-xl group relative overflow-hidden"
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </a>
              ) : (
                <Link
                  key={link.id}
                  to={`/${link.href}`}
                  className="px-4 py-2 text-sm font-medium text-slate-300 hover: transition-all hover:bg-white/5 rounded-xl group relative overflow-hidden"
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </Link>
              )
            )}

            <Link
              to="/projects"
              className={`
                px-5 py-2 text-sm font-medium transition-all rounded-xl ml-2
                ${
                  location.pathname === "/projects"
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                    : "text-slate-300 hover:text-emerald-400 hover:bg-white/5"
                }
              `}
            >
              Projetos
            </Link>

            <div className="pl-6 ml-2 border-l border-white/10">
              {isHome ? (
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "contact")}
                  className="px-6 py-2.5 rounded-xl bg-emerald-500 text-white text-sm font-bold hover: transition-all shadow-lg shadow-emerald-500/20 active: scale-95 hover:-translate-y-0.5"
                >
                  Contato
                </a>
              ) : (
                <Link
                  to="/#contact"
                  className="px-6 py-2.5 rounded-xl bg-emerald-500 text-white text-sm font-bold hover: transition-all shadow-lg shadow-emerald-500/20 active: scale-95 hover:-translate-y-0.5"
                >
                  Contato
                </Link>
              )}
            </div>
          </div>

          {/* Mobile Toggle Button - Ícones Lucide */}
          <button
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 z-40 bg-brand-dark/95 backdrop-blur-xl transition-all duration-300 md: hidden
          ${
            isMobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-6">
          {NAV_LINKS.map((link, idx) =>
            isHome ? (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`text-2xl font-bold text-slate-300 hover:text-white hover:scale-110 transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.id}
                to={`/${link.href}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-2xl font-bold text-slate-300 hover:text-white hover:scale-110 transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {link.label}
              </Link>
            )
          )}

          <Link
            to="/projects"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-2xl font-bold text-emerald-400 hover: hover:scale-110 transition-all duration-300 ${
              isMobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            Projetos
          </Link>

          <div
            className={`pt-8 transition-all duration-300 ${
              isMobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            {isHome ? (
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="px-8 py-4 rounded-2xl bg-linear-to-r from-emerald-500 to-emerald-600 text-white text-lg font-bold shadow-xl shadow-emerald-500/20 active:scale-95 block text-center"
              >
                Entrar em Contato
              </a>
            ) : (
              <Link
                to="/#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-8 py-4 rounded-2xl bg-linear-to-r from-emerald-500 to-emerald-600 text-white text-lg font-bold shadow-xl shadow-emerald-500/20 active:scale-95 block text-center"
              >
                Entrar em Contato
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
