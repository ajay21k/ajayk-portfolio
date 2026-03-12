import Header from "./components/Header";
import Hero from "./components/Hero";
import Certificates from "./components/Certificates/Certificates";
import Project from "./components/project/Project";
import gradient from "../src/assets/gradient.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Education from "./components/Education/Education";
import Ach from "./components/Ach/Ach";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <Router>
      {/* Background Layer */}
      <div className="absolute inset-0 -z-10">
        <img
          src={gradient}
          alt="Gradient"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg]"></div>
      </div>

      {/* Header is always on top */}
      <Header />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/project" element={<Project />} />
        <Route path="/education" element={<Education />} />
        <Route path="/ach" element={<Ach />} />
      </Routes>
    </Router>
  );
}
