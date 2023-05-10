import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Pages/sidebar/Sidebar';
import CommanSearch from './search/CommanSearch';
import MenuIcon from '@mui/icons-material/Menu';
import DropdownBar from './Pages/sidebar/Sidebar';
import { Grid } from '@mui/material';
import CottageRoundedIcon from '@mui/icons-material/CottageRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import VolunteerActivismRoundedIcon from '@mui/icons-material/VolunteerActivismRounded';
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
                  <DropdownBar isOpen={isOpen} onClose={handleSidebarToggle} />
                </div>
              </Grid>
              <Grid lg={2} style={{ display: "flex", justifyContent: "end" }}>
                <div style={{ display: 'flex' }}>
                  <img src="/applogo/applogo.png" height={60} />
                </div>
              </Grid>
              <Grid lg={4}>
                <div style={{ paddingRight: '30px', display: 'flex', justifyContent: 'center' }}>
                  <CommanSearch />
                </div>
              </Grid>
              <Grid lg={4} style={{ display: 'flex', flexDirection: 'row' }} >
                <Grid container>
                  <Grid lg={4}>
                    <div>
                      <Link to="/">
                        <CottageRoundedIcon style={{color:'black',height:'50px',fontSize:'40px'}}  />
                      </Link>
                    </div>
                  </Grid>
                  <Grid lg={4}>
                    <div>
                      <Link to="/route1">
                        <ShoppingCartRoundedIcon style={{color:'black',height:'50px',fontSize:'40px'}} />
                      </Link>
                    </div>
                  </Grid>
                  <Grid lg={4}>
                    <div>
                      <Link to="/route2">
                        <VolunteerActivismRoundedIcon style={{color:'black',height:'50px',fontSize:'40px'}} />
                      </Link>
                    </div>
                  </Grid>
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