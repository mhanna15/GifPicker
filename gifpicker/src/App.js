import React, { useState } from "react";
import "./App.css";
import SearchForm from "./searchForm";
import MoodWall from "./moodWall";

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
      <button
        onClick={() => {
          setShowHome(true);
          setShowMoodWall(false);
        }}
      >
        HOME
      </button>
      <button
        onClick={() => {
          setShowMoodWall(true);
          setShowHome(false);
        }}
      >
        MOODWALL
      </button>

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

export default App;
