import React from 'react';
import './About.css'; // Ensure this path is correct
//import shapeImage from './shapeImage.png'; // Import your shape image
//import shapeImageRight from './shape1.png'; // Ensure these paths are correct
//import handImageLeft from './handimg2.png'; // Ensure these paths are correct
//import shapeImageBottom from './shape3.png'; // Ensure this path is correct
//import vectorShape from './vectorShape.png'; // Import the new vector shape image

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="header-name">This is it. ;) &nbsp;&nbsp;&nbsp; ____________________________________________________</h1>
        <p>Sakshi Manohar Juwar is an Indian <strong> Front End Developer</strong> with a passion for designing beautiful and functional user experiences. Typically, she’s Driven & permanently Curious. She's obsessed with designing things and even more obsessed with designing cool & clean stuff for the web and mobile. She has been in the business of creating since she hung her first painting on the wall when she was 11.</p>
        <p>She holds a <strong>bachelor's degree in Computer Science</strong> from Mumbai University. During her graduation, she has been actively involved in the web design. She has designed websites for my practice. Currently she’s based in Mumbai, <strong>India</strong>, where she’s working as an independent creative.</p>
        <p>Her interests, however, extend beyond the web and she loves helping people with branding and print design. She even loves designing <strong>3D floor plans</strong>.</p>
        <p>When she’s not designing, she’s probably hanging out with friends, watching series, sketching, or exploring new creative projects inspired by YouTube tutorials.</p>  
        <center><h1>_________________________</h1></center>
      </div>
      <img src="shape1.png" alt="Shape" className="shape-image-right" /> 
      <img src="handimg2.png" alt="Hand Shape" className="shape-image-left" />
      <img src="shape3.png" alt="Bottom Shape" className="shape-image-bottom" /> 
      <img src="shape4.png" alt="Vector Shape" className="vector-shape-bottom-right" /> 
    </div>
  );
};

export default About;
