import React from 'react'
import MovingCards from './MovingCards';
import SliderImages from '../Slider';
import { Card, Grid } from '@mui/material';
import ProductCard from './product/productCard';

function HomePage() {
   return (
    <div style={{margin:"40px"}}>
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
        <div style={{ marginTop:"15px", marginBottom:"200px"}}>
            <ProductCard/>
        </div>
        </div>
   )
}
export default HomePage



