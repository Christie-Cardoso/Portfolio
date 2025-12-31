import React, { useEffect, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

import Home from "./pages/Home";

// Lazy load the Projects page
const Projects = lazy(() => import("./pages/Projects"));

// Loading component
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin"></div>
  </div>
);

// Component to handle hash scrolling on route change
const ScrollToAnchor = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If we have a hash, scroll to it
    if (hash) {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Slight delay to ensure page render
    } else {
      // If no hash, and it's a new page, scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-brand-dark">
        <ScrollToAnchor />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/projects"
            element={
              <Suspense fallback={<PageLoader />}>
                <Projects />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
