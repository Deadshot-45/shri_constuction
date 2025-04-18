import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Common/NavBar";
import Home from "./Components/Pages/Home";
import Footer from "./Components/Common/Footer";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import ScrollToTop from "./Components/Common/ScrollToTop";
import Projects from "./Components/Pages/Projects";

const App = () => {
  return (
    <div className="min-h-screen">
      
      <Router>
        <ScrollToTop />
        <NavBar />
        <div className="my-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
            {/* Redirect to Home for any undefined routes */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
