import React, { useState, useEffect } from 'react';
import './TechStack.css';
// Import tech stack data from central data file
import { techStackData } from '../../data/portfolioData';
// Import icon configuration
import { getIcon } from '../IconConfig';

const TechStack = () => {
  // State for tracking which skill is being hovered/clicked
  const [activeSkill, setActiveSkill] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if device is mobile on component mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Function to render the proficiency indicator
  const renderProficiencyIndicator = (proficiency) => {
    // 5 dots representing 20% each
    const dots = [];
    for (let i = 1; i <= 5; i++) {
      const threshold = i * 20;
      dots.push(
        <div 
          key={i}
          className={`proficiency-dot ${proficiency >= threshold ? 'filled' : ''}`}
        />
      );
    }
    return dots;
  };

  return (
    <div className="tech-stack">
      <div className="tech-stack-header">
        <h3>Tech Stack</h3>
      </div>
      
      <div className="tech-stack-content">
        {Object.entries(techStackData).map(([category, skills]) => (
          <div key={category} className="tech-category">
            <div className="category-header">
              <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
            </div>
            
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="skill-item"
                  onMouseEnter={() => !isMobile && setActiveSkill({category, index})}
                  onMouseLeave={() => !isMobile && setActiveSkill(null)}
                  onClick={() => isMobile && setActiveSkill(
                    activeSkill && activeSkill.category === category && activeSkill.index === index 
                      ? null 
                      : {category, index}
                  )}
                >
                  <div className="skill-icon">{getIcon(skill.iconKey)}</div>
                  <div className="skill-info">
                    <div className="skill-name">{skill.name}</div>
                    <div className="proficiency-indicator">
                      {renderProficiencyIndicator(skill.proficiency)}
                    </div>
                  </div>
                  
                  {/* Tooltip/Popup */}
                  {activeSkill && 
                   activeSkill.category === category && 
                   activeSkill.index === index && (
                    <div className="skill-topics-popup">
                      <h4>{skill.name} Topics</h4>
                      <ul>
                        {skill.topics.map((topic, i) => (
                          <li key={i}>{topic}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
