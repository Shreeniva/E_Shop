import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import ProductCard from '../product/productCard'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Arrivals({v}) {
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
    <div >
      <Grid container>
        <Grid lg={12}>
          <Grid container>
            <Grid lg={10}>
              <h2 >RO-Purifier</h2>
            </Grid>
            <Grid lg={2} style={{ display: "flex", justifyContent: "end" }}>
              <Box>
              <Link to="/globalResult">  <Button style={{ backgroundColor: "#374151", color: "white" }}>Explore</Button></Link>
              </Box>
            </Grid>
          </Grid>

        </Grid>
        {dress.map((v)=><Grid lg={3}>
        <ProductCard productDetail={v} pageType="Ro"/>
        </Grid>)}
      </Grid>
    </div>
  )
}
