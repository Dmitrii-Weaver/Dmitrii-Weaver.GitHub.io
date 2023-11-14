import React, { useState } from 'react'
import "./portfolio.css"
import { CardActionArea, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Grow, Tab, Tabs, Typography } from '@mui/material'
import resumeData from "../../utils/resumeData";
import { Card } from 'react-bootstrap';

const Portfolio = () => {
  const [tabValue, setTabValue] = useState("All")
  const [pDialog, setPDialog] = useState(false)



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
                    <Card className='customCard' onClick={() => setPDialog(p)}>
                      <CardActionArea>
                        <CardMedia className='customCard_image' image={p.image} title={p.title} />
                        <CardContent>
                          <Typography className='customCard_title'>{p.title}</Typography>
                          <Typography variant='body2' className='customCard_desc'>{p.caption}</Typography>
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
      <Dialog open={pDialog} onClose={() => setPDialog(false)}>
        <DialogTitle onClose={() => setPDialog(false)}>{pDialog.title}</DialogTitle>
        <img src="" alt="" />
        <DialogContent>{pDialog.desc}</DialogContent>
        <DialogActions>
          {pDialog?.links?.map(link => (
            <a href={link.link} target='_blank'>{link.icon}</a>
          ))}
        </DialogActions>
      </Dialog>
    </Grid>
  )
}

export default Portfolio