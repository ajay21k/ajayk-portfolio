import Header from "./components/Header";
import Hero from "./components/Hero";
import Certificates from "./components/Certificates/Certificates";
import Project from "./components/project/Project";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Education from "./components/Education/Education";
import Ach from './components/Ach/Ach'
export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []); // ✅ run only once

  return (
    <Router>
      <main>
        {/* Gradient image */}
        <img
          className="absolute top-0 right-0 opacity-60 -z-10"
          src="/gradient.png"
          alt="Gradient"
        />

        <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10"></div>

        {/* Header is global */}
        <Header />

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/project" element={<Project />} />
          <Route path="/education" element={<Education/>}/>
          <Route path="ach" element={<Ach/>}/>
          <Route path="project" element={<Project/>}/>
        </Routes>
      </main>
    </Router>
  );
}
