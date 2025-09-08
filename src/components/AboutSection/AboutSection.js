import React from 'react';
import './AboutSection.css';
// Import data from central data file
import { personalInfo, educationData } from '../../data/portfolioData';

const AboutSection = () => {
  // Use data from imported files
  const aboutData = {
    objective: personalInfo.bio,
    education: educationData
  };

  return (
    <div className="about-section">
      <div className="about-header">
        <h3>About Me</h3>
      </div>
      
      <div className="about-content">
        <div className="objective">
          <h4 className="section-title">Objective</h4>
          <p className="objective-text">{aboutData.objective}</p>
        </div>
        
        <div className="education">
          <h4 className="section-title">Education</h4>
          <div className="education-timeline">
            {aboutData.education.map((item) => (
              <div key={item.id} className="education-item">
                <div className="timeline-dot"></div>
                <div className="education-content">
                  <h5 className="institution">{item.institution}</h5>
                  <p className="degree">{item.degree}</p>
                  <p className="period">{item.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
