import React, { useState } from "react";
function MoodWall(props) {
  const { moodLinks } = props;
  return (
    <div>
      {moodLinks.map(url => (
        <img src={url} />
      ))}
    </div>
  );
}

export default MoodWall;
