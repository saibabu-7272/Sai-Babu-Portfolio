import React from 'react';
import './CareerTimeline.css';
// Import timeline data from central data file
import { timelineData } from '../../data/portfolioData';

const CareerTimeline = () => {

  // Function to get icon based on timeline item type
  const getTypeIcon = (type) => {
    switch (type) {
      case 'education':
        return '🎓';
      case 'training':
        return '📚';
      case 'project':
        return '🚀';
      case 'internship':
        return '💼';
      default:
        return '📌';
    }
  };

  // Function to get color class based on timeline item type
  const getTypeColorClass = (type) => {
    switch (type) {
      case 'education':
        return 'education';
      case 'training':
        return 'training';
      case 'project':
        return 'project';
      case 'internship':
        return 'internship';
      default:
        return '';
    }
  };

  return (
    <div className="career-timeline">
      <div className="timeline-header">
        <h3>Career Timeline</h3>
      </div>
      
      <div className="timeline-wrapper">
        <div className="timeline-track"></div>
        
        {timelineData.map((item, index) => (
          <div key={item.id} className={`timeline-item ${getTypeColorClass(item.type)}`}>
            <div className="timeline-marker"></div>
            
            <div className="timeline-content">
              <div className="timeline-date">{item.period}</div>
              
              <div className="timeline-card">
                <div className={`timeline-icon ${getTypeColorClass(item.type)}`}>
                  {getTypeIcon(item.type)}
                </div>
                
                <div className="timeline-details">
                  <h4 className="timeline-title">{item.title}</h4>
                  <h5 className="timeline-organization">{item.organization}</h5>
                  <p className="timeline-description">{item.description}</p>
                  
                  {item.skills && item.skills.length > 0 && (
                    <div className="timeline-skills">
                      {item.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="timeline-skill">{skill}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerTimeline;
