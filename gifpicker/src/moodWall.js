import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Dropdown } from "react-bootstrap";

import "./MoodWall.css";

import updateWall from './searchForm'

const MoodWall = props => {
    const image = props.moodwalls;
    
    return (
        <div className="moodWall">
            <h1>
                Your MoodWall
            </h1>
            <img src={image} alt = {"gif"}></img>

            {console.log("image url is : " + image)}
        </div>
    )
}

export default MoodWall;
