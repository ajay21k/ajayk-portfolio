import React, { useEffect, useState } from "react";
import netflix from "../../assets/netflix_2015_logo.svg";
import youtube from "../../assets/play.png";
import bitcoin from "../../assets/Bitcoin.svg";
import ecom1 from "../../assets/ecom1.jpg"
import "./Project.css";

const Project = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="projects-page">
  <h2
  data-aos="fade-down"
  data-aos-duration="3000"
  className="cert-title text-center text-3xl font-bold mb-8 mt-10"
>
  My Certifications
</h2>


      <div className="floating-icons">
  <a
    href="https://ajay21k.github.io/netflix-clone/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="2500"
      src={netflix}
      alt="Netflix"
      className="logo net"
      style={{
        transform: `rotateY(${mouse.x * 25}deg) rotateX(${mouse.y * -25}deg)`,
      }}
    />
  </a>

  <a
    href="https://ajay21k.github.io/youtube-clone/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="3000"
      src={youtube}
      alt="YouTube"
      className="logo you"
      style={{
        transform: `rotateY(${mouse.x * -25}deg) rotateX(${mouse.y * 25}deg)`,
      }}
    />
  </a>

  <a
    href="https://your-bitcoin-project-link.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="3500"
      src={bitcoin}
      alt="Bitcoin"
      className="logo bit"
      style={{
        transform: `rotateY(${mouse.x * 15}deg) rotateX(${mouse.y * -15}deg)`,
      }}
    />
  </a>

  <a
    href="https://ajay21k.github.io/ecom/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="4000"
      src={ecom1}
      alt="E-commerce"
      className="logo ecom1"
      style={{
        transform: `rotateY(${mouse.x * 20}deg) rotateX(${mouse.y * -20}deg)`,
      }}
    />
  </a>
</div>

    </div>
  );
};

export default Project;
