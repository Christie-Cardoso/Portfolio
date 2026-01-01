import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Christie Cardoso.</p>
      </div>
    </footer>
  );
};

export default Footer;
