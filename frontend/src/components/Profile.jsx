import React, { useState, useEffect } from 'react';
import ProfileDetails from './ProfileDetails';

function Profile() {
  const [name, setName] = useState(localStorage.getItem('name') || 'Name');
  const [description, setDescription] = useState(localStorage.getItem('description') || 'Description');

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
        <ProfileDetails
          name={name}
          description={description}
          handleNameChange={handleNameChange}
          handleDescriptionChange={handleDescriptionChange}
        />
      </div>
    </div>
  );
}

export default Profile;
