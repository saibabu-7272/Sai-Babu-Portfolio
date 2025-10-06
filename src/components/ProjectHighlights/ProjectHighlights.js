import React, { useState } from 'react';
import './ProjectHighlights.css';
// We'll use placeholder images until we have actual project screenshots
import placeholderImage from '../../assets/profile-placeholder.jpg';
// Import projects data from central data file
import { projectsData as projectsFromData } from '../../data/portfolioData';

const ProjectHighlights = () => {
  // Map the imported projects data to the component's data structure
  const projectsData = projectsFromData.map(project => ({
    ...project,
    image: placeholderImage // Still using placeholder for now until real images are available
  }));

  // State to track current project index
  const [currentProject, setCurrentProject] = useState(0);

  // Navigation handlers
  const goToPrevious = () => {
    setCurrentProject((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentProject((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
  };

  // Get current project
  const project = projectsData[currentProject];

  return (
    <div className="project-highlights">
      <div className="highlights-header">
        <h3>Project Highlights</h3>
        <div className="navigation-dots">
          {projectsData.map((_, index) => (
            <span 
              key={index} 
              className={`nav-dot ${index === currentProject ? 'active' : ''}`}
              onClick={() => setCurrentProject(index)}
            ></span>
          ))}
        </div>
      </div>
      
      <div className="project-card">
        <div className="project-image">
          <img className='projectImage' src={project.image} alt={project.title} />
        </div>
        
        <div className="project-content">
          <h4 className="project-title">{project.title}</h4>
          <p className="project-description">{project.description}</p>
          
          <div className="project-tech-stack">
            {project.techStack.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
          
          <div className="project-features">
            <h5>Key Features:</h5>
            <ul>
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="project-links">
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link live"
            >
              <span className="link-icon">🔗</span>
              <span>Live Demo</span>
            </a>
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link github"
            >
              <span className="link-icon">💻</span>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="project-navigation">
        <button className="nav-button prev" onClick={goToPrevious}>
          <span>◀</span>
        </button>
        <button className="nav-button next" onClick={goToNext}>
          <span>▶</span>
        </button>
      </div>
    </div>
  );
};

export default ProjectHighlights;
