import React from 'react'
import { Button } from "@mui/material"
import "./button.css"

const custom_button = ({text, icon}) => {
    return (
        <Button className='custom_button' endIcon={icon ? (<div className='custom_button_icon_container'>{icon}</div>) : null}>
            <span className='custom_button_text'>
                {text}
            </span>
        </Button>
    )
}

export default custom_button