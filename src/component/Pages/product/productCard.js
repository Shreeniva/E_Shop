import { Box, Button, Grid, Typography } from '@mui/material'
import { orange } from '@mui/material/colors'
import React from 'react'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import "./productCard.css"

export default function ProductCard({productDetail, pageType}) {
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

  return (
          <div style={{ cursor: 'pointer' }} className="products-list-item article:hover">
            <article style={{width:"90%"}}>
              <Box bgcolor='#fff0db' borderRadius='15px' height="100%" width="100%" style={{width:"fitContent"}}>
                <Box textAlign='left'>
                  <img src={pageType === "Ro" ? "images/purifier.jpg" : "/images/shirt.jpg"}  alt='' style={{ height: "100%", width: "100%", borderRadius: "15px" }} />
                </Box>

                <figcaption>

                  <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }} className="products-list-item article:hover">
                    <Typography variant='p12_400' color="primaryColors.loginText">{productDetail.name}</Typography>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <StarRateRoundedIcon sx={{ fontSize: 20, color: orange }} /><span style={{ fontSize: "14px", color: "#888888" }}>4</span>
                    </div>
                  </div>
                  <div>
                    <Box mt='6px'>
                      <Typography variant='p16_500_18' color="primaryColors.mobileCardText" fontFamily='Inter' className="break"> {productDetail.name} </Typography>
                    </Box>

                  </div>
                  <br />
                </figcaption>
              </Box>
            </article>
          </div>
  )
}
