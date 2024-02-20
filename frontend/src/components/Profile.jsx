import React, { useState, useEffect } from 'react';

function Profile() {
  const [name, setName] = useState(localStorage.getItem('name') || 'Your Name');
  const [description, setDescription] = useState(localStorage.getItem('description') || 'Your Biography');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem('name', name);
    localStorage.setItem('description', description);
  }, [name, description]);

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col-md-3">
          {/* Profile Picture Container */}
          <div className="profile-picture-container" style={{ width: '300px', height: '300px' }}>
            <img
              src="https://via.placeholder.com/300"
              alt="Profile"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-md">
          {/* Information Container */}
          <div className="information-container">
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control border border-primary mt-3"
                id="name"
                placeholder="Enter name"
                value={name}
                onChange={handleNameChange}
                style={{ maxWidth: '200px', width: '100%' }}
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control border border-danger border-double"
                id="description"
                rows="7"
                placeholder="Enter description"
                value={description}
                onChange={handleDescriptionChange}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
