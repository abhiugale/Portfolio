import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import FeaturedProjects from "./Components/FeaturedProjects";
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import MoreAboutMe from "./Components/MoreAboutMe";
function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <Hero />
          <FeaturedProjects />
          <AboutMe />
          <Contact />
          <Footer />
        </div>
        <Routes>
          <Route path="/more-about-me" element={<MoreAboutMe />} />
          {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
