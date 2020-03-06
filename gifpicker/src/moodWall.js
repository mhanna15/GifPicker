import React, { useState } from "react";

import "./MoodWall.css";

function MoodWall(props) {
  const { moodLinks } = props;
  return (
    <div>
    <h1>Your MoodWall</h1>
      {moodLinks.map(url => (
        <img src={url} />
      ))}
    </div>
  );
}

export default MoodWall;
