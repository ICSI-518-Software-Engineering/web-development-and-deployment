import React, { useState, useEffect } from 'react';
import ProfileDetails from './ProfileDetails';

function Profile() {
  const [name, setName] = useState(localStorage.getItem('name') || "Yogitha Goli");
  const [description, setDescription] = useState(localStorage.getItem('description') || "Hello! I’m Yogitha Goli, a current graduate student majoring in computer science at SUNY Albany. I’m deeply passionate about UX UI designing and besides academics, I’m involved in clubs like dance and sports such as badminton, I find these activities to be mind refreshing. I’m a person who is Enthusiastic to learn new skills, grow and excel in.");

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