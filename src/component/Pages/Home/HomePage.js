import React from 'react'
import SliderImages from '../../Slider';
import { Card, Grid } from '@mui/material';
import Arrivals from './Arrivals';
import Banner from './Banner';
import Ro from './Ro'


function HomePage() {
   return (
    <div style={{margin:"40px", marginBottom:"200px"}}>
         <Grid style={{ display: 'flex', justifyContent: 'center', padding: 10 ,backgroundColor:'#fff0db'}}>
            <Card elevation={15}>
                <div style={{display:'flex'}}>
                  <Grid container>
                     <Grid lg={4}>
                     <SliderImages pageType="firstSlider"/>
                     </Grid>
                     <Grid lg={4}>
                     <SliderImages pageType="secondSlider"/>
                     </Grid>
                     <Grid lg={4}>
                     <SliderImages pageType="thirdSlider"/>
                     </Grid>
                  </Grid>
                </div>
            </Card>
        </Grid>
        <div style={{ marginTop:"15px", marginBottom:"20px"}}>
            <Arrivals/>
        </div>
        
        <div style={{ marginTop:"15px", marginBottom:"20px"}}>
            <Banner/>
        </div>

        <div style={{ marginTop:"15px", marginBottom:"20px"}}>
            <Ro/>
        </div>
        </div>
   )
}
export default HomePage



