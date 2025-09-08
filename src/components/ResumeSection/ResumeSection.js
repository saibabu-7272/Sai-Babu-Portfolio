import React from 'react';
import './ResumeSection.css';

const ResumeSection = () => {
  // In a real implementation, this would be a link to the actual resume PDF file
  const handleDownload = () => {
    // This is a placeholder function
    // In a real implementation, this would download the resume file
    alert('Resume download would start here in a real implementation!');
  };

  // Import data from central data file
  const { personalInfo, stats, techStackData } = require('../../data/portfolioData');

  return (
    <div className="resume-section">
      <div className="resume-header">
        <h3>Resume</h3>
      </div>
      
      <div className="resume-preview">
        <div className="resume-paper">
          <div className="resume-content">
            <div className="resume-heading">
              <h2>{personalInfo.name}</h2>
              <p className="resume-title">{personalInfo.title}</p>
            </div>
            
            <div className="resume-contact-info">
              <p>
                <span className="info-label">Email:</span> {personalInfo.email}
              </p>
              <p>
                <span className="info-label">Phone:</span> {personalInfo.phone}
              </p>
              <p>
                <span className="info-label">Location:</span> {personalInfo.location}
              </p>
            </div>
            
            <div className="resume-skills">
              <h3>Skills</h3>
              
              <div className="skills-categories">
                {Object.entries(techStackData).map(([category, skills]) => (
                  <div key={category} className="skill-category">
                    <h4>{category.charAt(0).toUpperCase() + category.slice(1)}:</h4>
                    <p>{skills.map(skill => skill.name).join(', ')}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="resume-actions">
        <button className="download-button" onClick={handleDownload}>
          <span className="download-icon">📥</span>
          <span>Download Resume (PDF)</span>
        </button>
      </div>
    </div>
  );
};

export default ResumeSection;
