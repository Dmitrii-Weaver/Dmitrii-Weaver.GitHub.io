import React from 'react'
import "./resume.css"
import { Grid, Typography } from '@mui/material'
import resumeData from "../../utils/resumeData";

const Resume = () => {
  return (
    <>
      {/*about me*/}
      <Grid container className='section p_45'>
        <Grid item className='section_title mb_30' >
          <span></span>
          <h6 className='section_title_text'>About Me:</h6>
        </Grid>
        <Grid item className='' xs={12}>
          <Typography variant='body2'  className='about_me'>{resumeData.about}</Typography>
        </Grid>
      </Grid>

      {/*education*/}
      <Grid container className='section'></Grid>

      {/*services*/}
      <Grid container className='section'></Grid>

      {/*skills*/}
      <Grid container className='section'></Grid>

      {/*contacts*/}
      <Grid container className='section'></Grid>

    </>
  )
}

export default Resume