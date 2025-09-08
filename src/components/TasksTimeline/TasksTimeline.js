import React, { useState } from 'react';
import './TasksTimeline.css';
// Import tasks timeline data from central data file
import { tasksTimelineData } from '../../data/portfolioData';

const TasksTimeline = () => {
  // Days of the week for the timeline
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  // Current day indicator (0-6, where 0 is Sunday)
  const [currentDay, setCurrentDay] = useState(new Date().getDay()); // Default to today
  
  // Use imported tasks data from central file
  const tasks = tasksTimelineData;

  // Function to get the tasks for a specific day
  const getTasksForDay = (dayIndex) => {
    return tasks.filter(task => task.day === dayIndex);
  };

  // Function to get CSS class based on task type
  const getTaskTypeClass = (type) => {
    switch(type) {
      case 'learning':
        return 'task-learning';
      case 'meeting':
        return 'task-meeting';
      case 'review':
        return 'task-review';
      case 'debugging':
        return 'task-debugging';
      case 'milestone':
        return 'task-milestone';
      default:
        return '';
    }
  };

  return (
    <div className="tasks-timeline">
      <div className="timeline-header">
        <h3>Tasks Overview</h3>
        <div className="timeline-search">
          <button className="search-button" aria-label="Search">
            <span>🔍</span>
          </button>
          <button className="filter-button" aria-label="Filter">
            <span>📝</span>
          </button>
        </div>
      </div>
      
      <div className="timeline-days">
        {days.map((day, index) => (
          <div 
            key={index} 
            className={`day-item ${index === currentDay ? 'current-day' : ''}`}
            onClick={() => setCurrentDay(index)}
          >
            <div className="day-number">{15 + index}</div>
            <div className="day-name">{day}</div>
          </div>
        ))}
      </div>
      
      <div className="timeline-schedule">
        {[12, 13, 14, 15, 16, 17, 18].map((hour) => (
          <div key={hour} className="time-slot">
            <div className="time-label">{hour}:00</div>
            <div className="time-line"></div>
          </div>
        ))}
        
        {getTasksForDay(currentDay).map((task) => {
          // Calculate position based on task time
          const [hours, minutes] = task.time.split(':').map(Number);
          const topPosition = (hours - 12) * 60 + minutes;
          const heightValue = parseInt(task.duration) * 60;
          
          return (
            <div 
              key={task.id} 
              className={`task-item ${getTaskTypeClass(task.type)}`}
              style={{
                top: `${topPosition}px`,
                height: `${heightValue}px`
              }}
            >
              <div className="task-content">
                <div className="task-time">{task.time}</div>
                <div className="task-title">{task.title}</div>
                
                {task.assignees && (
                  <div className="task-assignees">
                    {task.assignees.map((person, idx) => (
                      <div key={idx} className="assignee-avatar">
                        {person.charAt(0)}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TasksTimeline;
