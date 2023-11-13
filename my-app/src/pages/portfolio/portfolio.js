import React, { useState } from 'react'
import "./portfolio.css"
import { Grid, Tabs } from '@mui/material'

const Portfolio = () => {
  const {tabValue, setTabValue} = useState("All")


  return (
    <Grid container className='section pb_45 pt_45'>
    {/*title*/}
      <Grid item className='section_title mb_30' >
        <span></span>
        <h6 className='section_title_text'>Portfolio</h6>
      </Grid>
      {/*tabs*/}
      <Grid item className='' >
        <Tabs 
        value={tabValue} 
        indicatorColor='white' 
        className='custom_tabs' 
        onChange={(event, newValue) => setTabValue(newValue)} >

        </Tabs>
      </Grid>
    </Grid>
  )
}

export default Portfolio