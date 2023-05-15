import { Button, Card, Grid } from '@mui/material'
import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import MaterialTable, { MTableToolbar } from '@material-table/core'

function wishlist() {

  return (
    <Grid Container>
        <Grid item lg={12} md={12}>
        <Card>
        <div style={{ maxWidth: "100%" }}>
        <MaterialTable
          columns={[
            { title: "Adı", field: "name" },
            { title: "Soyadı", field: "surname" },
            { title: "Doğum Yılı", field: "birthYear", type: "numeric" },
            {
              title: "Doğum Yeri",
              field: "birthCity",
              lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
            },
          ]}
          data={[
            {
              name: "Mehmet",
              surname: "Baran",
              birthYear: 1987,
              birthCity: 63,
            },
          ]}
          title="Demo Title"
        />
      </div>
        </Card>
        </Grid>
        <Grid>

        </Grid>
        <Grid>

        </Grid>
    </Grid>
  )
}

export default wishlist