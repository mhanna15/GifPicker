import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MoodWall.css";
import moodLinks from "./searchForm";
import { withRouter } from "react-router-dom";

const MoodWall = props => {
  console.log("PROPS " + props.location.state);
  const { moodLinks } = props.location.state;
  console.log("MOODLINKS " + moodLinks);
  //   console.log(moodLinks);
  //   return <img src={moodLinks[0]} />;
  return <div></div>;
};

export default withRouter(MoodWall);
