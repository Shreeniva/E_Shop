import React from 'react'
import MovingCards from './MovingCards';
import SliderImages from '../Slider';
import { Card, Grid } from '@mui/material';

function HomePage() {
   return (
         <Grid style={{ display: 'flex', justifyContent: 'center', padding: 10 ,backgroundColor:'#fff0db'}}>
            <Card elevation={15}>
                {/* <div style={{ display: 'flex' }}>
                    <img src={persons} />
                </div> */}
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
   )
}
export default HomePage



