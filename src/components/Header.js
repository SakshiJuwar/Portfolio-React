import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = ({ toggleTheme }) => {

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleToggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    toggleTheme(); // Call the toggleTheme function passed from parent
  };

  return (
    <header>
      <nav>
        <h1>Sakshi Manohar Juwar</h1>
        <div className="nav-right">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/project">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          {isDarkTheme ? (
            <FaSun className="theme-icon" onClick={handleToggleTheme} />
          ) : (
            <FaMoon className="theme-icon" onClick={handleToggleTheme} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;