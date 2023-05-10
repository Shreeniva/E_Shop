import { Card, Grid } from '@mui/material';
import React from 'react'
import persons from '../../photos/persons.jpg';
import wardroom from '../../photos/wardroom.jpg';

function MovingCards() {


    return (
        <Grid style={{ display: 'flex', justifyContent: 'center', padding: 10 ,backgroundColor:'#fff0db'}}>
            <Card elevation={15}>
                {/* <div style={{ display: 'flex' }}>
                    <img src={persons} />
                </div> */}
                <div style={{display:'flex'}}>
                    <img src={wardroom} height={500} />
                </div>
            </Card>
        </Grid>
    );
}

export default MovingCards