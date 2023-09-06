import React, { useState } from 'react';
 // Correct the path to your CSS file
// import './App.css';
// // Rest of the code...


const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onClick={toggleDropdown}>
        Click me
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
          <li>option 4</li>
           <li>option 5</li>
           <li>option 6</li>
          {/* Add more menu items as needed */}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
