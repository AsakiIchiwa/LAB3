import React from 'react';
import PropTypes from 'prop-types';

const UserProfile = ({ userData, theme = 'light' }) => {
  return (
    <div className={`profile-card theme-${theme}`}>
      <div className="profile-frame">
        <div className="frame-corners">
          <span className="corner tl"></span>
          <span className="corner tr"></span>
          <span className="corner bl"></span>
          <span className="corner br"></span>
        </div>
        
        <div className="profile-header">
          <h2>⚔️ Character Profile ⚔️</h2>
        </div>

        <div className="avatar-container">
          <div className="avatar-glow"></div>
          <div className="avatar-ring"></div>
          <img 
            src={userData.avatarUrl} 
            alt={userData.name}
            className="profile-avatar"
          />
          <div className="level-badge">LV 99</div>
        </div>

        <div className="profile-stats">
          <div className="stat-bar">
            <span className="stat-icon">🏷️</span>
            <div className="stat-details">
              <span className="label">Name</span>
              <span className="value">{userData.name}</span>
            </div>
          </div>
          <div className="stat-bar">
            <span className="stat-icon">📧</span>
            <div className="stat-details">
              <span className="label">Contact</span>
              <span className="value">{userData.email}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

UserProfile.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
    avatarUrl: PropTypes.string,
    imageSize: PropTypes.number
  }).isRequired,
  theme: PropTypes.string
};

export default UserProfile;