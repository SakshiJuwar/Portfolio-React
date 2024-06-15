import React from 'react';
import './Home.css';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa'; // import social icons

const Home = () => {
  return (
    <section id="home">
      <div className="content">
        <h2 className="hello">
          <span className="hello-bubble">Hello!</span>
        </h2>
        <div className="name-container">
          <span className="im">I'm</span> <span className="sakshi">Sakshi</span>&nbsp;
          <img src="helloimg.png" alt="Profile" className="hand-icon" />
        </div>
        <p className="headline">Passionate web designer and developer creating engaging and intuitive digital experiences.Blending creativity with technology to build responsive and user-friendly web applications.</p>
        <div className="buttons">
          <a href="/resume.pdf" download className="download-link">
             <button className="download">Download CV</button>
          </a>
          <a href="/contact" className="get-in-contact">
             <button className="get-in-touch">Get in Touch</button>
          </a>
        </div>
      </div>
      <div className="profile-pic">
        <img src="vectorshapepic.png" alt="Vector Shape" className="vector-shape" />
        <img src="myimg.jpg" alt="Profile" className="profile-image" />
      </div>
    </section>
  );
};

export default Home;
