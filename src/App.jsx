import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutPage from "./components/aboutpage/About";
import Skills from "./components/skillpage/Skills";
import Projects from "./components/ProjectPage/Projects";
import Contact from "./components/ContactPage/Contact";


 const App =()=> {

  return (
       <>
      <Navbar />
      <Hero />
      <AboutPage />
      <Skills />
      <Projects />
      <Contact />
    </>
      )}
  

export default App;
