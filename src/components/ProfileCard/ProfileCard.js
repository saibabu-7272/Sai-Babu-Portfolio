import React from 'react';
import './ProfileCard.css';
// We'll use placeholder image until we have actual profile image
import placeholderImage from '../../assets/profile-placeholder.jpg';
// Import profile data from central data file
import { personalInfo } from '../../data/portfolioData';

const ProfileCard = () => {
  // Transform data into component format
  const profile = {
    name: personalInfo.name,
    title: personalInfo.title,
    location: personalInfo.location,
    email: personalInfo.email,
    phone: personalInfo.phone,
    socialLinks: [
      {
        id: 'github',
        label: 'GitHub',
        icon: '💻',
        url: personalInfo.socialLinks.github
      },
      {
        id: 'linkedin',
        label: 'LinkedIn',
        icon: '👔',
        url: personalInfo.socialLinks.linkedin
      }
    ]
  };

  return (
    <div className="profile-card">
      <div className="profile-card-content">
        <div className="profile-image-container">
          <img src={placeholderImage} alt={profile.name} className="profile-image" />
        </div>
        <div className="profile-info">
          <h2 className="profile-name">{profile.name}</h2>
          <p className="profile-title">{profile.title}</p>
          <p className="profile-location">
            <span className="location-icon">📍</span> {profile.location}
          </p>
          <p className="profile-email">
            <span className="email-icon">✉️</span> {profile.email}
          </p>
        </div>
        <div className="profile-social-links">
          {profile.socialLinks.map((link) => (
            <a 
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label={link.label}
            >
              <span className="social-icon">{link.icon}</span>
            </a>
          ))}
        </div>
        <div className="profile-contact-buttons">
          <button className="contact-button phone">
            <span className="phone-icon">📞</span>
          </button>
          <button className="contact-button message">
            <span className="message-icon">💬</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
