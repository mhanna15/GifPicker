import React from "react";
import "./App.css";
import SearchForm from "./searchForm";
import MoodWall from "./moodWall"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const App = () => {
    return ( 
        <Router>
            <div className = "App" >
                <Container>
                    <Row className="justify-content-md-center">
                        <Col md={"auto"}>
                            <Button component = { Link } to = "/MoodWall" >
                                <nav >
                                    <NavLink activeClassName = "ActiveHomePage" exact id = "Home Page" to = "/" >Home</NavLink>
                                </nav>
                            </Button>
                        </Col>
                        <Col md={"auto"}>
                            <nav>
                                <div className="homeButton">
                                    <Button component = { Link } to = "/Home" >
                                        <NavLink activeClassName = "ActiveMoodWallPage" exact id = "MoodWallPage" to = "/MoodWall" >MoodWall</NavLink>
                                    </Button>
                                </div>
                            </nav>
                        </Col>
                    </Row>
                </Container>

                <Switch>
                    <Route exact path = "/" >
                        <Home/>
                    </Route>
                    <Route exact path = "/MoodWall" component = { MoodWall } >
                        <MoodWall/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );

    function Home() {
        return (
            <div className = "Home" >
                <header className = "App-header" >
                <h1> Welcome to MoodWall </h1> 
                <SearchForm/>
                </header> 
            </div>
        )
    }
};

export default App;