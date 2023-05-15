import { Button, Card, Grid } from '@mui/material'
import React from 'react'
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';

function Mycart() {
  const cart = [
    {
      name: 'cart'
    },
    {
      name: 'cart2'
    },
    {
      name: 'cart3'
    },
    {
      name: 'cart4'
    },
    {
      name: 'cart5'
    },


  ]
  return (
    <div>
      <Grid >
        <Grid container>
          <Grid item lg={8} md={6} style={{ display: 'flex', justifyContent: 'start', fontSize: '50px' }}>
            My Cart
          </Grid>
          <Grid item lg={4} style={{ display: 'flex', justifyContent: 'end', paddingRight: '10px' }}>
            <Button variant='filled' color='#374151' style={{ backgroundColor: '#374151', color: 'white' }}>
              Remove All
            </Button>
          </Grid>
        </Grid>
        {cart.map((v) => <Card style={{ minHeight: '100px', maxHeight: '100px' }}>
          <Grid container>
            <Grid item lg={4}>  {v.name} </Grid>
            <Grid item lg={2}>Qty</Grid>
            <Grid item lg={2}>Price</Grid>
            <Grid item lg={2}><DeleteOutlineSharpIcon /></Grid>
            <Grid item lg={2}></Grid>
          </Grid>
        </Card>)}
      </Grid>
    </div>
  )
}

export default Mycart