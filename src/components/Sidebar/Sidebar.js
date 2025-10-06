import React from 'react';
import './Sidebar.css';
import WeatherWidget from '../WeatherWidget/WeatherWidget';
// Import personal info from central data file
import { personalInfo } from '../../data/portfolioData';
// Import icon configuration
import { getIcon } from '../IconConfig';

const Sidebar = () => {
  // Navigation items with dynamic GitHub and LinkedIn links from central data
  const navItems = [
    { id: 'home', iconKey: 'home', label: 'Home', link: '#home' },
    { id: 'projects', iconKey: 'projects', label: 'Projects', link: '#projects' },
    { id: 'skills', iconKey: 'skills', label: 'Skills', link: '#skills' },
    { id: 'timeline', iconKey: 'timeline', label: 'Timeline', link: '#timeline' },
    { id: 'resume', iconKey: 'resume', label: 'Resume', link: '#resume' },
    { id: 'contact', iconKey: 'contact', label: 'Contact', link: '#contact' },
    { id: 'github', iconKey: 'github', label: 'GitHub', link: personalInfo.socialLinks.github },
    { id: 'linkedin', iconKey: 'linkedin', label: 'LinkedIn', link: personalInfo.socialLinks.linkedin }
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
            <span className="sidebar-icon">{getIcon(item.iconKey)}</span>
            <span className="sidebar-label">{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
