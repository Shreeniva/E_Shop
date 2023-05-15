import { Box, Button, Grid, Typography } from '@mui/material'
import { orange } from '@mui/material/colors'
import React from 'react'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import "./productCard.css"

export default function ProductCard() {
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
    ]

    const bigImg = (x) => {
       x.style.height = "464px";
       x.style.width = "464px";
      }
      
      
      
      const normalImg = (x)=> {
       x.style.height = "32px";
       x.style.width = "32px";
      }

  return (
    <div >
      <Grid container>
        <Grid lg={12}>
          <Grid container>
            <Grid lg={10}>
              <h2 >Arrivals</h2>
            </Grid>
            <Grid lg={2} style={{ display: "flex", justifyContent: "end" }}>
              <Box>
                <Button style={{ backgroundColor: "#374151", color: "white" }}>Explore</Button>
              </Box>
            </Grid>
          </Grid>

        </Grid>
        {dress.map((v)=><Grid lg={3}>
          <div style={{ cursor: 'pointer', height: "350px", width: "350px" }} className="products-list-item article:hover">
            <article style={{ height: "250px", width: "300px" }}>
              <Box bgcolor='#fff0db' borderRadius='15px' style={{width:"fitContent"}}>
                <Box textAlign='left' height="250px" width="300px"  >
                  <img src="/images/shirt.jpg"  alt='' style={{ height: "100%", width: "100%", borderRadius: "15px" }} />
                </Box>

                <figcaption>

                  <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }} className="products-list-item article:hover">
                    <Typography variant='p12_400' color="primaryColors.loginText">{v.name}</Typography>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <StarRateRoundedIcon sx={{ fontSize: 20, color: orange }} /><span style={{ fontSize: "14px", color: "#888888" }}>4</span>
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
        </Grid>)}
      </Grid>
    </div>
  )
}
