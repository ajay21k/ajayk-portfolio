// Header.jsx
import React, { useState, useEffect } from "react";
import "boxicons/css/boxicons.min.css";
import { Link, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // close menu when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const toggleMobileMenu = () => setMobileOpen((prev) => !prev);

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20 relative z-50">
      <Link to="/" onClick={() => setMobileOpen(false)}>
        <h1
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="text-3xl md:text-4xl lg:text-5xl font-light m-0"
        >
          PORTFOLIO
        </h1>
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center space-x-4">
        <Link
           data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
          to="/education"
          className="text-base tracking-wider transition-colors hover:text-[#e99b63] z-50"
        >
          EDUCATION
        </Link>
        <Link
           data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          to="/project"
          className="text-base tracking-wider transition-colors hover:text-[#e99b63] z-50"
        >
          PROJECTS
        </Link>
        <Link
           data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2000"
          to="/certificates"
          className="text-base tracking-wider transition-colors hover:text-[#e99b63] z-50"
        >
          CERTIFICATION
        </Link>
        <Link
           data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2500"
          to="/ach"
          className="text-base tracking-wider transition-colors hover:text-[#e99b63] z-50"
        >
          ACHIEVEMENTS
        </Link>
      </nav>

      {/* Reach Out */}
      <a
        href="mailto:ajaykathir21k@gmail.com"
        className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50"
      >
        Reach Out
      </a>

      {/* Mobile toggle */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden text-3xl p-2"
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileOpen}
        aria-controls="mobileMenu"
      >
        <i className={`bx ${mobileOpen ? "bx-x" : "bx-menu"}`}></i>
      </button>

      {/* Mobile menu */}
      <div
        id="mobileMenu"
        className={`${
          mobileOpen ? "block" : "hidden"
        } fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md`}
      >
        <nav className="flex flex-col gap-6 items-center">
    
         
          <Link
          
            to="/education"
            onClick={() => setMobileOpen(false)}
            className="text-base tracking-wider hover:text-[#e99b63]"
          >
            EDUCATION
          </Link>
          <Link
            to="/project"
            onClick={() => setMobileOpen(false)}
            className="text-base tracking-wider hover:text-[#e99b63]"
          >
            PROJECTS
          </Link>
                <Link
            to="/certificates"
            onClick={() => setMobileOpen(false)}
            className="text-base tracking-wider hover:text-[#e99b63]"
          >
            CERTIFICATION
          </Link>
           <Link
            to="/ach"
            onClick={() => setMobileOpen(false)}
            className="text-base tracking-wider hover:text-[#e99b63]"
          >
            ACHIEVEMENTS
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
