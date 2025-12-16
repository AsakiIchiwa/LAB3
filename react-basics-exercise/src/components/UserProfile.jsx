import React from 'react';
import PropTypes from 'prop-types';

const UserProfile = ({ userData, theme = 'light' }) => {
  return (
    <div className={`profile-card theme-${theme}`}>
      <div className="profile-header">
        <div className="corner-ornament top-left"></div>
        <div className="corner-ornament top-right"></div>
        <h2 className="profile-title">⚔️ Character Profile ⚔️</h2>
      </div>
      <div className="profile-content">
        <div className="avatar-container">
          <div className="avatar-frame"></div>
          <img 
            src={userData.avatarUrl} 
            alt={userData.name}
            width={userData.imageSize}
            height={userData.imageSize}
            className="profile-avatar"
          />
        </div>
        <div className="profile-stats">
          <div className="stat-row">
            <span className="stat-label">🏷️ Name:</span>
            <span className="stat-value">{userData.name}</span>
          </div>
          <div className="stat-row">
            <span className="stat-label">📧 Contact:</span>
            <span className="stat-value">{userData.email}</span>
          </div>
        </div>
      </div>
      <div className="corner-ornament bottom-left"></div>
      <div className="corner-ornament bottom-right"></div>
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