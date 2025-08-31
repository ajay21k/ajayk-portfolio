import React from "react";
import "./Certificates.css";
import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // import AOS styles


import cert1 from "../../assets/Aws-cert.jpg";
import cert2 from "../../assets/codesoft-cert.jpg";
import cert3 from "../../assets/Oracle-sql.jpg";
import cert4 from "../../assets/skillcraft.jpg";
import cert5 from "../../assets/ppt-cert.jpg";
import cert6 from "../../assets/ML-cert.jpg";
import cert7 from "../../assets/ppt2-cert.jpg";
import cert8 from "../../assets/adzap.jpg";
import cert9 from "../../assets/jj-cert.jpg";
import cert10 from "../../assets/jj-cert1.jpg";
import cert11 from "../../assets/top-cert.jpg";
import cert12 from "../../assets/iit.jpg";
import cert13 from "../../assets/iit1.jpg";
import cert14 from "../../assets/iitwork2.jpg";
import cert15 from "../../assets/iit3.jpg";

const certificates = [
  { id: 1, image: cert1, title: "AWS - Forage", orientation: "landscape" },
  { id: 2, image: cert2, title: "Machine Learning Internship", orientation: "landscape" },
  { id: 3, image: cert3, title: "Oracle SQL", orientation: "landscape" },
  { id: 4, image: cert4, title: "Machine Learning Internship", orientation: "landscape" },
  { id: 5, image: cert5, title: "Paper Presentation", orientation: "landscape" },
  { id: 6, image: cert6, title: "Introduction to Machine Learning", orientation: "landscape" },
  { id: 13, image: cert13, title: "Artificial Intelligence - IIT Madras", orientation: "portrait" },
  { id: 14, image: cert14, title: "IoT Workshop - IIT Madras", orientation: "portrait" },
  { id: 15, image: cert15, title: "Web Development Workshop - IIT Madras", orientation: "portrait" },
  { id: 7, image: cert7, title: "Paper Presentation - III Prize", orientation: "portrait" },
  { id: 8, image: cert8, title: "ADZAP - III Prize", orientation: "portrait" },
  { id: 9, image: cert9, title: "Treasure Hunt - II Prize", orientation: "portrait" },
  { id: 10, image: cert10, title: "Logo Design - II Prize", orientation: "landscape" },
  { id: 11, image: cert11, title: "Data Science & Visualization - IIT Madras", orientation: "portrait" },
  { id: 12, image: cert12, title: "Python Internship - IIT Madras", orientation: "portrait" },
];

export default function Certificates() {
  useEffect(() => {
  AOS.init({ once: true }); // animate only once
}, []);

  return (
    <section className="py-12 px-6">
     <h2
  data-aos="fade-down"
  data-aos-duration="3000"
  className="cert-title text-center text-3xl font-bold mb-8"
>
  My Certifications
</h2>


  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        {certificates.map((c) => (
<div
  key={c.id}
     data-aos="fade-down"          // fade-down effect
    data-aos-duration="2000" 
  className={`flip-card rounded-xl shadow-lg mx-auto w-full ${
  c.orientation === "portrait"
    ? "h-[28rem]"
    : "h-[16rem]"
}`}

>


            <div className="flip-card-inner rounded-xl">
             {/* FRONT */}
<div className="flip-card-face front">
  <img
    src={c.image}
    alt={c.title}
    className="w-full h-full object-cover rounded-xl"
  />
</div>

              {/* BACK */}
              <div className="flip-card-face back">
                <h5 className="text-lg sm:text-xl font-semibold">{c.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
