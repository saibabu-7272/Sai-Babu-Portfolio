import React from 'react';
import './App.css';

// Import all components from centralized index
import {
  Sidebar,
  ProfileCard,
  LearningTracker,
  SkillDistribution,
  ActivityHeatmap,
  TasksTimeline,
  StatsCards,
  ToolsUsed,
  ProjectHighlights,
  AboutSection,
  ResumeSection,
  ContactForm,
  TechStack,
  CareerTimeline
} from './components';

function App() {
  return (
    <div id="home" className="app-container">
      <Sidebar />
      
      <main className="main-content">
        <div className="portfolio-grid">
          {/* SECTION 1: PERSONAL DETAILS/PROFILE (TOP) */}
          <div className="grid-item profile-card-area">
            <ProfileCard />
          </div>
          
          <div className="grid-item stats-area">
            <StatsCards />
          </div>
          
          <div className="grid-item full-width-area">
            <AboutSection />
          </div>

          
          {/* SECTION 2: SKILLS */}
          {/* <div className="grid-item skill-area">
            <SkillDistribution />
          </div>
           */}
          {/* Project Highlights - Moved right after pie chart as requested */}
          <div className="grid-item full-width-area">
            <ProjectHighlights />
          </div>
          
          {/* Tech Stack - Moved right after Project Highlights as requested */}
          <div className="grid-item full-width-area">
            <TechStack />
          </div>
          
          {/* <div className="grid-item learning-area">
            <LearningTracker />
          </div> */}
{/* 
          <div className="grid-item heatmap-area">
            <ActivityHeatmap />
          </div>
          
          <div className="grid-item timeline-area">
            <TasksTimeline />
          </div>
           */}

          
          {/* SECTION 5: EDUCATION/CAREER */}
          <div className="grid-item full-width-area">
            <CareerTimeline />
          </div>

          {/* SECTION 4: TOOLS */}
          <div className="grid-item tools-area">
            <ToolsUsed />
          </div>
          
          {/* SECTION 6: CONTACT (FOOTER) */}
          <div className="grid-item full-width-area">
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
