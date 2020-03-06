import React from "react";
import { useState } from "react";

const GifCard = props => {
  const setMoodwalls = props.setMoodwalls;
  const [collage, setCollage] = useState([]);
  const gifArray = [];

return (
    <div>
      <img src={props.url} alt={props.title}  onClick={() => setCollage(gifArray.concat(props.url))}>
      </img>
    </div>
  );
}

export default GifCard