import { Typography } from "@mui/material";
import React from "react";
import './profile.css'

const Profile = () => {
    return (
        <div className="profile container_shadow">
            <div className="profile_name">
                <Typography className="name">Dmitrii</Typography>
                <Typography className="title">Dmitrii</Typography>
            </div>
            <figure className="profile_image">
                <img src={require("../../assets/images/display.jpg")} alt=""/>
            </figure>
            <div className="profile_info">
                timeline
                <br/>
                <button>123</button>
            </div>
        </div> 
    )
}

export default Profile