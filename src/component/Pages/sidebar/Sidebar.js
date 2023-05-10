import React, { useState } from 'react';
import './DropdownBar.css';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const DropdownBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-bar">
      <div className="dropdown-button" onClick={toggleDropdown}>
      <MenuRoundedIcon />
      </div>
      {isOpen && (
        <div className="dropdown-content" style={{height:'50vh'}}>

        </div>
      )}
    </div>
  );
};

export default DropdownBar;
