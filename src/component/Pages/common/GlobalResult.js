import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

export default function GlobalResult() {
    const dress = [
        {
          name: 'shirt1'
        },
        {
          name: 'shirt2'
        },
        {
          name: 'shirt3'
        },
        {
          name: 'shirt4'
        },
        {
          name: 'shirt5'
        },
        {
          name: 'shirt6'
        },
        {
          name: 'shirt7'
        },
        {
          name: 'shirt8'
        },
        {
          name: 'shirt9'
        },
        {
          name: 'shirt10'
        },
        {
          name: 'shirt11'
        },
        {
          name: 'shirt12'
        },
        {
          name: 'shirt13'
        },
        {
          name: 'shirt14'
        },
        {
          name: 'shirt15'
        },
        {
          name: 'shirt16'
        },
        ]
  return (
    <div>
        
            <Grid container>
                <Grid lg={12}>
                    <Typography style={{fontFamily:"initial", fontSize:"26px", fontWeight:"600"}}> Results </Typography>
                </Grid>
            {dress.map((v) =><Grid lg={3} padding="10px"> 
             <div style={{ cursor: 'pointer' }} className="products-list-item article:hover">
            <article style={{width:"90%"}}>
                        <Box bgcolor='#fff0db' borderRadius='15px' height="100%" width="100%" style={{width:"fitContent"}}>
                <Box textAlign='left'>
                  <img src="/images/shirt.jpg"  alt='' style={{ height: "100%", width: "100%", borderRadius: "15px" }} />
                </Box>

                <figcaption>

                  <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }} className="products-list-item article:hover">
                    <Typography variant='p12_400' color="primaryColors.loginText">{v.name}</Typography>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <StarRateRoundedIcon sx={{ fontSize: 20, color: 'orange' }} /><span style={{ fontSize: "14px", color: "#888888" }}>4</span>
                    </div>
                  </div>
                  <div>
                    <Box mt='6px'>
                      <Typography variant='p16_500_18' color="primaryColors.mobileCardText" fontFamily='Inter' className="break"> {v.name} </Typography>
                    </Box>

                  </div>
                  <br />
                </figcaption>
              </Box>
              </article> 
            </div>
          </Grid> )}
                </Grid>

    </div>
  )
}
