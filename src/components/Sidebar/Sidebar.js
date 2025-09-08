import React from 'react';
import './Sidebar.css';
import WeatherWidget from '../WeatherWidget/WeatherWidget';
// Import personal info from central data file
import { personalInfo } from '../../data/portfolioData';

const Sidebar = () => {
  // Navigation items with dynamic GitHub and LinkedIn links from central data
  const navItems = [
    { id: 'home', icon: '🏠', label: 'Home', link: '#home' },
    { id: 'projects', icon: '📂', label: 'Projects', link: '#projects' },
    { id: 'skills', icon: '🔨️', label: 'Skills', link: '#skills' },
    { id: 'timeline', icon: '📅', label: 'Timeline', link: '#timeline' },
    { id: 'resume', icon: '📄', label: 'Resume', link: '#resume' },
    { id: 'contact', icon: '📬', label: 'Contact', link: '#contact' },
    { id: 'github', icon: '💻', label: 'GitHub', link: personalInfo.socialLinks.github },
    { id: 'linkedin', icon: '👔', label: 'LinkedIn', link: personalInfo.socialLinks.linkedin }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <WeatherWidget city="Hyderabad" />
      </div>
      <div className="sidebar-nav">
        {navItems.map((item) => (
          <a 
            key={item.id} 
            href={item.link} 
            className="sidebar-nav-item"
            target={item.id === 'github' || item.id === 'linkedin' ? '_blank' : ''}
            rel={item.id === 'github' || item.id === 'linkedin' ? 'noopener noreferrer' : ''}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span className="sidebar-label">{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
