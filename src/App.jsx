import React from 'react';
import Header from "./components/header/header";
import Navbar from "./components/nav/nav";
import Home from "./components/home/home";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

function WebContent() {
  return (
    <>
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>
      <div className="bg-circle3"></div>
      <div className="bg-circle4"></div>
      <Header />
      <div>
        <Navbar />
        <div>
          <Home />
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default WebContent;

