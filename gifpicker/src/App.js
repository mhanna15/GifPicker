import React, { useState } from "react";
import "./App.css";
import SearchForm from "./searchForm";
import MoodWall from "./moodWall";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Dropdown } from "react-bootstrap"

function App() {
  const [showHome, setShowHome] = useState(true);
  const [showMoodWall, setShowMoodWall] = useState(false);
  const [moodLinks, setMoodLinks] = useState([]);

  const updateMoodLinks = url => {
    if (!moodLinks.includes(url)) {
      setMoodLinks(moodLinks.concat(url));
    }
  };

  return (
    <div className="App">
      <Button 
        onClick={() => {
          setShowHome(true);
          setShowMoodWall(false);
        }}
      >
        HOME
      </Button>
      <Button 
        onClick={() => {
          setShowMoodWall(true);
          setShowHome(false);
        }}
      >
        MOODWALL
      </Button>

      {showHome && (
        <header className="App-header">
          <h1>Welcome to MoodWall</h1>
          <SearchForm updateMoodLinks={updateMoodLinks} />
        </header>
      )}
      {showMoodWall && <MoodWall moodLinks={moodLinks} />}
    </div>
  );
}
;

export default App;