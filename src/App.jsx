import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutPage from "./components/aboutpage/About";
import Skills from "./components/skillpage/Skills";
import Projects from "./components/ProjectPage/Projects";
import Contact from "./components/ContactPage/Contact";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="dark"
      />
      <AboutPage />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
