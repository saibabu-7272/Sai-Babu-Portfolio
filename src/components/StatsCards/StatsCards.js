import React from 'react';
import './StatsCards.css';
// Import stats data from central data file
import { stats } from '../../data/portfolioData';

const StatsCards = () => {
  // Stats data using imported data
  const statsData = [
    {
      id: 'experience',
      title: 'Days in Coding',
      value: stats.experience.toString(),
      icon: '⏱️',
      type: 'primary'
    },
    {
      id: 'projects',
      title: 'Projects Completed',
      value: stats.projects.toString(),
      icon: '📂',
      type: 'primary'
    }
  ];

  // Special cards using imported data
  const specialCards = [
    {
      id: 'openToWork',
      title: stats.openToWork ? 'Open to Work' : 'Not Available',
      description: 'Seeking Full Stack Developer Opportunities',
      icon: '🔍',
      type: stats.openToWork ? 'info' : 'secondary'
    },
    {
      id: 'downloadResume',
      title: 'Download Resume',
      description: 'PDF Format',
      icon: '📄',
      type: 'action',
      onClick: () => {
        // In a real implementation, this would link to a resume download
        // We could use stats.resumeUrl for a real file download
        alert('Resume download would start here!');
      }
    }
  ];

  return (
    <div className="stats-container">
      {/* Regular stats cards */}
      <div className="stats-row">
        {statsData.map((stat) => (
          <div key={stat.id} className={`stat-card stat-${stat.type}`}>
            <div className="stat-content">
              <div className="stat-value">{stat.value}+
              </div>
              <div className="stat-title">{stat.title}</div>
            </div>
            <div className="stat-icon">
              <span>{stat.icon}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Special cards */}
      <div className="stats-row">
        {specialCards.map((card) => (
          <div 
            key={card.id} 
            className={`special-card special-${card.type}`}
            onClick={card.onClick}
            role={card.onClick ? 'button' : 'none'}
          >
            <div className="special-icon">
              <span>{card.icon}</span>
            </div>
            <div className="special-content">
              <div className="special-title">{card.title}</div>
              <div className="special-description">{card.description}</div>
            </div>
            {card.type === 'action' && (
              <div className="special-arrow">→</div>
            )}
          </div>         
        ))}
        
      </div>
      {/*view resume*/}
      
      <a href='https://drive.google.com/file/d/1mwaMgFMfw8-KtFqubUXHlvvA7OvZnoII/view?usp=sharing' target="_black" >
        <div className="special-card">
          <div>View Resume</div>
        </div>
      </a>
    </div>
  );
};

export default StatsCards;
