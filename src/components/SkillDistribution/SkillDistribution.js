import React, { useEffect, useRef, useState } from 'react';
import './SkillDistribution.css';
// Import skill distribution data from central data file
import { skillDistributionData } from '../../data/portfolioData';

const SkillDistribution = () => {
  // Reference to the canvas element
  const canvasRef = useRef(null);
  
  // State for tracking which skill is being hovered/clicked
  const [activeSkill, setActiveSkill] = useState(null);
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
  
  // Using data from central file
  const skillsData = skillDistributionData;

  // Draw the pie chart using canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 10;
    
    // Clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw background circle
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    context.fillStyle = '#2a2a2a';
    context.fill();
    
    // Draw inner circle (empty space)
    context.beginPath();
    context.arc(centerX, centerY, radius * 0.6, 0, 2 * Math.PI);
    context.fillStyle = '#1a1a1a';
    context.fill();
    
    // Draw percentage text in center
    context.font = 'bold 24px Arial';
    context.fillStyle = '#ffffff';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText('100%', centerX, centerY);
    
    // Draw pie segments
    let startAngle = -0.5 * Math.PI; // Start at top (12 o'clock)
    
    skillsData.forEach(skill => {
      const segmentAngle = (skill.percentage / 100) * 2 * Math.PI;
      
      context.beginPath();
      context.moveTo(centerX, centerY);
      context.arc(centerX, centerY, radius, startAngle, startAngle + segmentAngle);
      context.closePath();
      context.fillStyle = skill.color;
      context.fill();
      
      // Add small spacing between segments
      startAngle += segmentAngle + 0.02;
    });
    
  }, []);

  return (
    <div className="skill-distribution">
      <div className="distribution-header">
        <h3>Skill Distribution</h3>
      </div>
      
      <div className="distribution-chart">
        <canvas ref={canvasRef} width="200" height="200"></canvas>
      </div>
      
      <div className="distribution-legend">
        {skillsData.map((skill, index) => (
          <div 
            key={`skill-${index}`} 
            className="legend-item"
            onMouseEnter={() => !isMobile && setActiveSkill(index)}
            onMouseLeave={() => !isMobile && setActiveSkill(null)}
            onClick={() => isMobile && setActiveSkill(activeSkill === index ? null : index)}
          >
            <div className="legend-color" style={{ backgroundColor: skill.color }}></div>
            <div className="legend-info">
              <div className="legend-percentage">{skill.percentage}%</div>
              <div className="legend-label">{skill.skill}</div>
            </div>
            
            {/* Tooltip/Popup */}
            {activeSkill === index && (
              <div className="skill-topics-popup">
                <h4>{skill.skill} Topics</h4>
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
  );
};

export default SkillDistribution;
