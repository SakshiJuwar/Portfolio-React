import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaPython, FaDatabase } from 'react-icons/fa';
import { DiDjango } from 'react-icons/di';
import './Skills.css';

const skills = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'Bootstrap', icon: <FaBootstrap /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'Django', icon: <DiDjango /> },
  { name: 'MySQL', icon: <FaDatabase /> }
];

const Skills = () => {
  return (
    <div className="skills-section">
      <h2 className="skill-heading">My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
