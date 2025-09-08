import React from 'react';
import './LearningTracker.css';
// Import learning tracker data from central data file
import { learningTrackerData } from '../../data/portfolioData';

const LearningTracker = () => {
  // Map the data from our central file to component structure
  const learningData = learningTrackerData.map(item => ({
    id: item.id,
    label: item.subject,
    duration: `${item.hours}:00:00`,
    icon: item.icon,
    progress: item.progress
  }));

  return (
    <div className="learning-tracker">
      <div className="tracker-header">
        <h3>Learning Tracker</h3>
        <div className="tracker-actions">
          <button className="tracker-action play" aria-label="Play">
            <span>▶️</span>
          </button>
        </div>
      </div>
      
      <div className="tracker-display">
        <div className="tracker-time">
          {/* Main tracked time - total of all learning hours */}
          <div className="time-total">418:00:50</div>
        </div>
      </div>

      <div className="tracker-items">
        {learningData.map((item) => (
          <div key={item.id} className="tracker-item">
            <div className="item-icon" style={{ backgroundColor: getRandomColor(item.id) }}>
              {item.icon}
            </div>
            <div className="item-info">
              <div className="item-label">{item.label}</div>
              <div className="item-duration">{item.duration}</div>
            </div>
            <div className="item-progress">
              <div 
                className="progress-bar" 
                style={{ width: `${item.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Function to generate consistent random colors based on ID
function getRandomColor(id) {
  // Simple hash function to generate a number from a string
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  // Convert to hex color
  let color = '#';
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xFF;
    color += ('00' + value.toString(16)).substr(-2);
  }
  
  return color;
}

export default LearningTracker;
