// DropdownButton.js
import React, { useState } from 'react';
import './DropdownButton.css'; // Optional: Import CSS for styling

const DropdownButton = ({ taskId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-button">
        Options
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <a href="#edit" className="dropdown-item">Edit</a>
          <a href="#delete" className="dropdown-item">Delete</a>
          <a href="#details" className="dropdown-item">View Details</a>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
