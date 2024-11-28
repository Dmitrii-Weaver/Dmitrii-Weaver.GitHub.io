import React from 'react'
import { Link } from "react-router-dom";
import { Button } from "@mui/material"
import "./mailbutton.css"

const mailbutton = ({ text, icon }) => {

    const ButtonMailto = ({ mailto, label }) => {
        return (
            <Link
                className='custom_button_text'
                to='#'
                onClick={(e) => {
                    window.location.href = mailto;
                    e.preventDefault();
                }}
            >
                {label}
            </Link>
        );
    };


    return (
        <Button className='custom_button' endIcon={icon ? (<div className='custom_button_icon_container'>{icon}</div>) : null}>
            <ButtonMailto label="Contact me" mailto="mailto:dmitriitkachev11@gmail.com" />
        </Button>
    )
}

export default mailbutton