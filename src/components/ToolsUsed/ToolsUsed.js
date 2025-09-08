import React from 'react';
import './ToolsUsed.css';
// Import tools data from central data file
import { toolsUsedData } from '../../data/portfolioData';

const ToolsUsed = () => {
  // Use imported tools data
  const toolsData = toolsUsedData;

  return (
    <div className="tools-used">
      <div className="tools-header">
        <h3>Tools Used</h3>
        <span className="tools-badge">5</span>
      </div>
      
      <div className="tools-list">
        {toolsData.map((tool) => (
          <div key={tool.id} className="tool-item">
            <div className="tool-icon">
              <span>{tool.icon}</span>
            </div>
            <div className="tool-info">
              <div className="tool-name">{tool.name}</div>
              <div className="tool-progress-container">
                <div 
                  className="tool-progress-bar" 
                  style={{ width: `${tool.proficiency}%` }}
                ></div>
              </div>
            </div>
            <div className="tool-proficiency">
              {tool.proficiency}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsUsed;
