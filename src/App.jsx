import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="relative min-h-screen" style={{ background: "#030712" }}>
      {/* Single unified mesh gradient — fixed so it covers the entire page always */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 15% 20%, rgba(16,185,129,0.07) 0%, transparent 55%), " +
            "radial-gradient(ellipse 60% 50% at 85% 80%, rgba(245,158,11,0.04) 0%, transparent 55%), " +
            "#030712",
        }}
      />

      {/* Subtle grid overlay — fixed, full page */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), " +
            "linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
          opacity: 0.4,
        }}
      />

      {/* All page content on top of the unified background */}
      <div className="relative z-10">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;