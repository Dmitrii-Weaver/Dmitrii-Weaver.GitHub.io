import React from 'react'
import "./footer.css"
import { Typography } from '@mui/material'
import resumeData from "../../utils/resumeData";


const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_left'>
        <Typography className='footer_name'> {resumeData.name} </Typography>
      </div>
      <div className='footer_right'>
        <Typography className='footer_copy'>Designed and developed by  <a href='/' target='_blank'>Dmitrii Tkachev </a>
          <br />
          Original idea from  <a href='https://themeforest.net/' target='_blank' >Tavonline.net</a></Typography>

      </div>
    </div>
  )
}

export default Footer