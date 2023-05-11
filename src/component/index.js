import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Pages/sidebar/Sidebar';
import CommanSearch from './search/CommanSearch';
import MenuIcon from '@mui/icons-material/Menu';
import DropdownBar from './Pages/sidebar/Sidebar';
import { Grid } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import VolunteerActivismRoundedIcon from '@mui/icons-material/VolunteerActivismRounded';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div style={{ backgroundColor: '#d9b99b', height: '80px' }}>
      <nav>
        <ul>
          <div style={{ display: 'flex' }}>
            <Grid container padding="10px">
              <Grid lg={2}>
                <div style={{ display: 'flex' }}>
                  <img src="/applogo/applogo.png" height={60} />
                </div>
              </Grid>
              <Grid lg={6} style={{ display: "flex", justifyContent: 'flex-start', padding: 5 }}>
                <div >
                  <CommanSearch />
                </div>
              </Grid>
              <Grid lg={4} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }} >
                {/* <Grid style={{ color: '#374151', height: '50px', fontSize: '30px', padding: 3, marginLeft: '5px' }}>
                  <div onClick={handleSidebarToggle}>
                    <DropdownBar isOpen={isOpen} onClose={handleSidebarToggle} />
                  </div>
                </Grid> */}
                <Grid >
                  <div>
                    <Link to="/">
                      <HomeOutlinedIcon style={{ color: '#374151', height: '50px', fontSize: '30px', padding: 3, marginLeft: '5px' }} />
                    </Link>
                  </div>
                </Grid>
                <Grid >
                  <div>
                    <Link to="/route1">
                      <ShoppingCartRoundedIcon style={{ color: '#374151', height: '50px', fontSize: '30px', padding: 3, marginLeft: '5px' }} />
                    </Link>
                  </div>
                </Grid>
                <Grid >
                  <div>
                    <Link to="/route2">
                      <VolunteerActivismRoundedIcon style={{ color: '#374151', height: '50px', fontSize: '30px', padding: 3, marginLeft: '5px' }} />
                    </Link>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Header;