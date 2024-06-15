import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Project from './components/Project';
import Skills from './components/Skills';
import './App.css';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa'; // import social icons
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      <div className={`app ${theme}`}>
        <Header toggleTheme={toggleTheme} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/project" element={<Project />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </div>
        
      </div>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className={theme === 'dark' ? 'social-icon-dark' : 'social-icon-light'} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className={theme === 'dark' ? 'social-icon-dark' : 'social-icon-light'} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className={theme === 'dark' ? 'social-icon-dark' : 'social-icon-light'} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className={theme === 'dark' ? 'social-icon-dark' : 'social-icon-light'} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className={theme === 'dark' ? 'social-icon-dark' : 'social-icon-light'} />
        </a>
        <a href="https://telegram.com" target="_blank" rel="noopener noreferrer">
          <FaTelegram className={theme === 'dark' ? 'social-icon-dark' : 'social-icon-light'} />
        </a>
        
      </div>

      <div className="email">
        <p>sakshijuwar81120@gmail.com</p>
      </div>
    </Router>
  );
};

export default App;
