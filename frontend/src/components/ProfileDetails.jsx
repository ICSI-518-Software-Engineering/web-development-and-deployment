import React, { useState, useEffect } from 'react';
import image from '../assets/image.jpg'

function ProfileDetails({ name, description, handleNameChange, handleDescriptionChange }) {
  return (
    <>
      <div className="col-3">
        {/* Profile Picture Container */}
        <div className="profile-picture-container" style={{ width: '300px', height: '500px' }}>
          <img
            src={image}
            alt="Profile"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="col">
        {/* Information Container */}
        <div className="information-container">
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control mt-3 border border-primary"
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={handleNameChange}
              style={{ maxWidth: '200px', width: '100%' }}
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control border border-danger"
              id="description"
              rows="10"
              placeholder="Enter description"
              value={description}
              onChange={handleDescriptionChange}
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileDetails;
