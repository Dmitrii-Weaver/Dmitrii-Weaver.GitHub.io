import React, { useState } from 'react'
import "./portfolio.css"
import { CardActionArea, CardContent, CardMedia, Grid, Grow, Tab, Tabs, Typography } from '@mui/material'
import resumeData from "../../utils/resumeData";
import { Card } from 'react-bootstrap';

const Portfolio = () => {
  const [tabValue, setTabValue] = useState("All")


  return (
    <Grid container className='section pb_45 pt_45'>
      {/*title*/}
      <Grid item className='section_title mb_30' >
        <span></span>
        <h6 className='section_title_text'>Portfolio</h6>
      </Grid>
      {/*tabs*/}
      <Grid item xs={12} >
        <Tabs
          value={tabValue}
          indicatorColor='white'
          className='custom_tabs'
          onChange={(event, newValue) => setTabValue(newValue)} >
          <Tab label="All" value="All" className={tabValue == "All" ? "customtabs_item active" : "customtabs_item"} />
          {[...new Set(resumeData.Portfolio.map(item => item.tag))].map(tag => (
            <Tab label={tag} value={tag} className={tabValue == tag ? "customtabs_item active" : "customtabs_item"} />
          ))}
        </Tabs>
        {/*projects*/}
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {resumeData.Portfolio.map(p => (
              <>
                {tabValue == p.tag || tabValue == "All" ? (<Grid item>
                  <Grow in timeout={1000}>
                    <Card className='CustomCard'>
                      <CardActionArea>
                        <CardMedia />
                        <CardContent>
                          <Typography>{p.title}</Typography>
                          <Typography>{p.desc}</Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>) : null}

              </>

            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Portfolio