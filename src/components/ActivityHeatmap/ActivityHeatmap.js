import React from 'react';
import './ActivityHeatmap.css';
// Import activity heatmap data from central data file
import { activityHeatmapData } from '../../data/portfolioData';

const ActivityHeatmap = () => {
  // Days of the week for the heatmap
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  // Time slots for the heatmap (24 hour format)
  const timeSlots = [
    '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', 
    '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'
  ];
  
  // Use imported activity data from central file
  const activityData = activityHeatmapData;
  
  // Function to get CSS class based on activity level
  const getActivityClass = (level) => {
    switch(level) {
      case 0:
        return 'activity-none';
      case 1:
        return 'activity-low';
      case 2:
        return 'activity-medium';
      case 3:
        return 'activity-high';
      default:
        return 'activity-none';
    }
  };

  return (
    <div className="activity-heatmap">
      <div className="heatmap-header">
        <h3>Work Activity</h3>
        <div className="heatmap-toggle">
          <span className="toggle-label active">ON</span>
          <span className="toggle-label">3h</span>
          <span className="toggle-label">24h</span>
          <span className="toggle-label">14h</span>
        </div>
      </div>
      
      <div className="heatmap-grid">
        <div className="time-labels">
          {timeSlots.map((time, index) => (
            <div key={index} className="time-label">{time}</div>
          ))}
        </div>
        
        <div className="grid-container">
          {daysOfWeek.map((day, dayIndex) => (
            <div key={dayIndex} className="day-column">
              <div className="day-label">{day}</div>
              <div className="day-cells">
                {timeSlots.map((time, timeIndex) => (
                  <div 
                    key={timeIndex} 
                    className={`grid-cell ${getActivityClass(activityData[day][time])}`}
                    title={`${day} at ${time}: ${activityData[day][time] > 0 ? 'Active' : 'No activity'}`}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityHeatmap;
