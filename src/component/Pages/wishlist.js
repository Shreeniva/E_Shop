import { Card, Grid } from '@mui/material'
import React from 'react'

function wishlist() {
  const array = [
    {
      name:'1'
    },
    {
      name:'2'
    },
    {
      name:'3'
    },
    {
      name:'4'
    }
]
  return (
    <Grid style={{padding:10}}>
      {array.map((v) => <Card style={{ minHeight: '100px', maxHeight: '100px', boxShadow: '3px 3px 6px 1px', borderRadius: '10px' }}>
        {v.name}
      </Card>)}
    </Grid>
  )
}

export default wishlist