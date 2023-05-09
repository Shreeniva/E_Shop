import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Pages/sidebar/Sidebar';
import CommanSearch from './search/CommanSearch';
import MenuIcon from '@mui/icons-material/Menu';
import DropdownBar from './Pages/sidebar/Sidebar';
import { Grid } from '@mui/material';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div style={{ backgroundColor: 'beige', height: '80px' }}>
      <nav>
        <ul>
          <div style={{ display: 'flex' }}>
            <Grid container padding="10px">
              <Grid lg={2}>
              <div onClick={handleSidebarToggle}>
              <DropdownBar isOpen={isOpen} onClose={handleSidebarToggle}/>
            </div>
              </Grid>
              <Grid lg={2} style={{display:"flex", justifyContent:"end"}}>
              <div style={{ display: 'flex' }}>
              <img src="/applogo/applogo.png" height={60} />
            </div>
              </Grid>
              <Grid lg={4}>
              <div style={{ paddingRight: '30px', display: 'flex', justifyContent: 'center' }}>
              <CommanSearch />
            </div>
              </Grid>
              <Grid lg={4}>
              <div style={{ paddingRight: '30px', fontFamily: 'sans-serif', fontSize: 'bold', display: 'flex', justifyContent: 'center' }}>
              <Link to="/">Home</Link>
            </div>
            <div style={{ paddingRight: '30px', fontFamily: 'sans-serif', display: 'flex', justifyContent: 'center' }}>
              <Link to="/route1">Route 1</Link>
            </div>
            <div style={{ paddingRight: '30px', fontFamily: 'sans-serif', display: 'flex', justifyContent: 'center' }}>
              <Link to="/route2">Route 2</Link>
            </div>
              </Grid>
            </Grid>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Header;