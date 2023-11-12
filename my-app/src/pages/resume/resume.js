import React from 'react'
import "./resume.css"
import { Grid, Icon, Paper, Typography } from '@mui/material'
import resumeData from "../../utils/resumeData";
import CustomTimeline, { CustomTimelineSeparator } from "../../components/timeline/timeline.js"
import WorkIcon from '@mui/icons-material/Work';
import { TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab';
import SchoolIcon from '@mui/icons-material/School';

const Resume = () => {
  return (
    <>
      {/*about me*/}
      <Grid container className='section pb_45 pt_45'>
        <Grid item className='section_title mb_30' >
          <span></span>
          <h6 className='section_title_text'>About Me</h6>
        </Grid>
        <Grid item className='' xs={12}>
          <Typography variant='body2' className='about_me'>{resumeData.about}</Typography>
        </Grid>
      </Grid>

      {/*education*/}
      <Grid container className='section pb_45'>
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
      <Grid container className='section pb_45'>
        <Grid item className='section_title mb_30' >
          <span></span>
          <h6 className='section_title_text'>Services</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3} justifyContent='space-around'>
            {resumeData.services.map(service => (
              <Grid item xs={12} sm={6} md={3}>
                <div className='service'>
                  <Icon className='service_icon'>{service.icon}</Icon>
                  <Typography className='service_title' variant='h6'>{service.title}</Typography>
                  <Typography className='service_desc' variant='body2'>{service.description}</Typography>
                </div>
              </Grid>
            ))}
          </Grid>

        </Grid>
      </Grid>

      {/*skills*/}
      <Grid container  className='section graybg pb_45 p_50'>
        <Grid item xs={12}>
          <Grid container justifyContent='space-between' spacing={3}>
            {resumeData.skills.map(skill => (
              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={0} className='skill'>
                  <Typography variant='h6' className='skill_title'>{skill.title}</Typography>
                  {skill.description.map(desc => (
                    <Typography variant='body2' className='skill_desc'>
                      <TimelineDot variant={'outlined'} className='tl_dot' />{desc}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            ))}

          </Grid>
        </Grid>


      </Grid>

    </>
  )
}

export default Resume