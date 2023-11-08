import React from 'react'
import "./resume.css"
import { Grid, Typography } from '@mui/material'
import resumeData from "../../utils/resumeData";
import CustomTimeline, { CustomTimelineSeparator } from "../../components/timeline/timeline.js"
import WorkIcon from '@mui/icons-material/Work';
import { TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab';
import SchoolIcon from '@mui/icons-material/School';

const Resume = () => {
  return (
    <>
      {/*about me*/}
      <Grid container className='section p_45'>
        <Grid item className='section_title mb_30' >
          <span></span>
          <h6 className='section_title_text'>About Me</h6>
        </Grid>
        <Grid item className='' xs={12}>
          <Typography variant='body2' className='about_me'>{resumeData.about}</Typography>
        </Grid>
      </Grid>

      {/*education*/}
      <Grid container className='section top_30'>
        <Grid item className='section_title mb_30' >
          <span></span>
          <h6 className='section_title_text'>Resume</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container className='resume_timeline'>
            {/*exp*/}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Working history" icon={<WorkIcon />} >
                {resumeData.workexp.map(e => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent className='timeline_content'>
                      <Typography className='timeline_title'>{e.title}</Typography>
                      <Typography variant='caption' className='timeline_date'>{e.date}</Typography>
                      <Typography variant="body2" className='timeline_desc'>{e.description}</Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>

            {/*edu*/}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Education" icon={<SchoolIcon />} >
                {resumeData.education.map(e => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent className='timeline_content'>
                      <Typography className='timeline_title'>{e.title}</Typography>
                      <Typography variant='caption' className='timeline_date'>{e.date}</Typography>
                      <Typography variant="body2" className='timeline_desc'>{e.description}</Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

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