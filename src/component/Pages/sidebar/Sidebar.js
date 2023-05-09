import React, { useState } from 'react';
import './DropdownBar.css';
import MenuIcon from '@mui/icons-material/Menu';

const DropdownBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-bar">
      <div className="dropdown-button" onClick={toggleDropdown}>
      <MenuIcon style={{fontSize:"40px"}}/>
      </div>
      {isOpen && (
        <div className="dropdown-content" style={{height:'50vh'}}>

        </div>
      )}
    </div>
  );
};

export default DropdownBar;
