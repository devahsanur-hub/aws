import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Qualification from "./components/Qualification";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import About from "./components/About"

function App() {
  return (
    <>
      <Navbar />
      <Home />
      {/* <About/> */}
      <Qualification />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
