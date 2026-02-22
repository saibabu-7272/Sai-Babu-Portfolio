import React, { useEffect, useRef, useState } from 'react';
import './SkillDistribution.css';
import { skillDistributionData } from '../../data/portfolioData';

const SkillDistribution = () => {
  const canvasRef = useRef(null);

  const [activeSkill, setActiveSkill] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Draw pie chart
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 10;

    // Clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Outer background circle
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    context.fillStyle = '#2a2a2a';
    context.fill();

    // Inner circle (donut style)
    context.beginPath();
    context.arc(centerX, centerY, radius * 0.6, 0, 2 * Math.PI);
    context.fillStyle = '#1a1a1a';
    context.fill();

    // Center text
    context.font = 'bold 24px Arial';
    context.fillStyle = '#ffffff';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText('100%', centerX, centerY);

    // Draw segments
    let startAngle = -0.5 * Math.PI;

    skillDistributionData.forEach((skill) => {
      const segmentAngle = (skill.percentage / 100) * 2 * Math.PI;

      context.beginPath();
      context.moveTo(centerX, centerY);
      context.arc(centerX, centerY, radius, startAngle, startAngle + segmentAngle);
      context.closePath();
      context.fillStyle = skill.color;
      context.fill();

      startAngle += segmentAngle + 0.02; // spacing
    });

  }, []); // safe because data is static

  return (
    <div className="skill-distribution">
      <div className="distribution-header">
        <h3>Skill Distribution</h3>
      </div>

      <div className="distribution-chart">
        <canvas ref={canvasRef} width="200" height="200" />
      </div>

      <div className="distribution-legend">
        {skillDistributionData.map((skill, index) => (
          <div
            key={skill.skill} // stable key
            className="legend-item"
            onMouseEnter={() => !isMobile && setActiveSkill(index)}
            onMouseLeave={() => !isMobile && setActiveSkill(null)}
            onClick={() =>
              isMobile && setActiveSkill(activeSkill === index ? null : index)
            }
          >
            <div
              className="legend-color"
              style={{ backgroundColor: skill.color }}
            />

            <div className="legend-info">
              <div className="legend-percentage">
                {skill.percentage}%
              </div>
              <div className="legend-label">
                {skill.skill}
              </div>
            </div>

            {activeSkill === index && (
              <div className="skill-topics-popup">
                <h4>{skill.skill} Topics</h4>
                <ul>
                  {skill.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
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