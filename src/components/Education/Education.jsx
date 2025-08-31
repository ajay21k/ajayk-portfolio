import React from 'react';
import './Education.css';

const Education = () => {
  const skills = [
    {
      name: 'React',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      name: 'HTML',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    },
    {
      name: 'CSS',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    },
    {
      name: 'JavaScript',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
  ];

  return (
    <div className="education-container">
      <h1 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="3000">
        Education
      </h1>

      <h3 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="2500">
        HSC
      </h3>
      <h5 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="2000">
        Hitlon.Matric.hr.sec.school - 81.5%
      </h5>

     <h3 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
  Bachelor
</h3>
<div >
  <h5 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1750">Computer Science and Engineering</h5>
</div>
<h6 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
  SRM TRP Engineering college - 8.35cgpa (According to current Sem)
</h6>


      <h1 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="3000">
        SKILLS
      </h1>
      <div className="skills-container">
        {skills.map((skill) => (
  <div
    className={`skill-item ${skill.name === 'React' ? 'spin-logo' : ''}`}
    key={skill.name}
    data-aos="fade-up"
    data-aos-duration="1500"
  >
    <img src={skill.logo} alt={skill.name} />
    <h4>{skill.name}</h4>
  </div>
))}

      </div>
    </div>
  );
};

export default Education;
