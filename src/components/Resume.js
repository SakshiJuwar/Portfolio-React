import React from 'react';
import './Resume.css';

const Resume = () => {
    return (
        <div className="resume-container">
            <div className="resume-header">
                <h1>Resume</h1>
                <div className="divider"></div>
            </div>
            <div className="resume-pdf">
                <iframe
                    src={`${process.env.PUBLIC_URL}/resume.pdf`}
                    title="Resume"
                    width="700px"
                    height="800px"  // Adjust height as needed
                    style={{ border: 'none', marginTop: '20px' }} // Adjust margin-top as needed
                ></iframe>
            </div>
        </div>
    );
};

export default Resume;
