import React from 'react';
import './Ach.css';

const Ach = () => {
  const internships = [
    {
      title: "React Internship - Vinsup Infotech",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      spin: true, // will spin the React logo
    },
    {
      title: "Artificial Intelligence Internship - Top Engineers & Mechanica IIT-MADRAS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      title: "Python Programming Internship - Top Engineers & Mechanica IIT-MADRAS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      title: "Solution Architecture Job Simulation - Forage",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
  ];

  const achievements = [
    "3rd Prize on Paper Presentation - Techastra’24, Dr.MGR Educational and Research Institute",
    "2nd Prize on Logo Design - Spirit 2k24, J.J College of Engineering and Technology",
    "3rd Prize on SDG ADZAP - ENVIRON’24, K.RAMKRISHNAN College of Engineering"
  ];

  return (
    <div className="ach-container">
      <h1 data-aos="fade-down" data-aos-duration="3000">Internships</h1>
    {internships.map((item, index) => (
  <div
    key={index}
    className={`timeline-item internship ${item.spin ? 'spin-logo' : ''}`}
    data-aos="fade-up"
    data-aos-duration="2000"
  >
    {item.title}
    <img src={item.logo} alt={item.title} className="timeline-logo" />
  </div>
))}


      <h1 data-aos="fade-down" data-aos-duration="3000">Achievements</h1>
      {achievements.map((item, index) => (
        <h5 key={index} className="timeline-item" data-aos="fade-up" data-aos-duration="2000">
          {item}
        </h5>
      ))}
    </div>
  );
};

export default Ach;
