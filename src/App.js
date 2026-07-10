import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Developer from "./components/Developer";
import Qualification from "./components/Qualification";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <Home />
      <Developer />
      <Pricing />
      <Services />
      <Projects />
      <Skills />
      <Qualification />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
