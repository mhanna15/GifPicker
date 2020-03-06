import React, { useState } from "react";
import "./App.css";
import SearchForm from "./searchForm";
import MoodWall from "./moodWall";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row, Col } from "react-bootstrap"

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
        <Container>
            <Row className="justify-content-md-center">
                <Col md={"auto"}>
                    <Button
                        onClick={() => {
                            setShowHome(true);
                            setShowMoodWall(false);
                        }}
                    >
                        HOME
                    </Button>
                </Col>
                <Col md={"auto"}>
                    <Button
                        onClick={() => {
                            setShowMoodWall(true);
                            setShowHome(false);
                        }}
                    >
                        MOODWALL
                    </Button>
                </Col>
            </Row>
        </Container>

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