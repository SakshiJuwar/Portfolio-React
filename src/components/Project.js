import React from 'react';
import './Project.css';


const projects = [
  {
    title: 'Online Gas Booking',
    duration: '4th April 2024 - 10th April 2024',
    role: 'Full Stack Developer',
    description: 'Developed a comprehensive Online Gas Booking system that allows users to book cylinders, check booking status, and manage their profiles. Implemented user authentication, profile creation, and CRUD operations to enhance user experience and engagement.',
    technologies: {
      frontend: 'HTML, CSS, JavaScript, Bootstrap',
      backend: 'Python, Django Framework',
      database: 'MySQL'
    }
  },
  {
    title: 'Ekart Online Shopping Website',
    duration: 'August 2023 - September 2023',
    role: 'Full Stack Developer (Self-Practice)',
    description: 'Created an e-commerce platform with functionalities including user login, registration, product listing, add to cart, place order, and payment integration using Razorpay. Additionally, developed sections for About Us and Contact Us to provide comprehensive information to users.',
    technologies: {
      frontend: 'HTML, CSS, JavaScript, Bootstrap',
      backend: 'Python, Django Framework',
      database: 'MySQL',
      tools: 'Visual Studio Code (1.88.1)'
    }
  },
  {
    title: 'Online Movie Watching Website',
    duration: 'August 2023 - September 2023',
    role: 'Frontend Developer (Self-Practice)',
    description: 'Designed and developed a website for streaming movies online for free without downloading. The website features user registration and login functionalities, providing a seamless experience for users to watch movies.',
    technologies: {
      frontend: 'HTML, CSS, JavaScript'
    }
  }
];

const Project = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <center><p className="pro-line">________________________________</p></center>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <p><strong>Duration:</strong> {project.duration}</p>
          <p><strong>Role:</strong> {project.role}</p>
          <p>{project.description}</p>
          <p><strong>Technologies Used:</strong></p>
          <ul>
            <li><strong>Frontend:</strong> {project.technologies.frontend}</li>
            {project.technologies.backend && <li><strong>Backend:</strong> {project.technologies.backend}</li>}
            {project.technologies.database && <li><strong>Database:</strong> {project.technologies.database}</li>}
            {project.technologies.tools && <li><strong>Tools:</strong> {project.technologies.tools}</li>}
          </ul>
        </div>
      ))}
      <img src="shape3.png" alt="Vector Shape 3" className="vector-shape3" />
      <img src="shape4.png" alt="Vector Shape 4" className="vector-shape4" />
    </div>
  );
}

export default Project;
