import React, { useState } from "react";
import "./App.css";
import SearchForm from "./searchForm";
import MoodWall from "./MoodWall"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const App = () => {
    const [moodwalls, setMoodwalls] = useState([]);

    return ( 
    <Router>
        <div className = "App" >
            <Button component = { Link } to = "/MoodWall" >
            <nav >
                <NavLink activeClassName = "ActiveHomePage" exact id = "Home Page" to = "/"> Home 
                </NavLink>
            </nav>
            </Button>  
        
        <nav >
        <div name = "homeButton">
        <Button component = { Link }to = "/Home" >
            <NavLink activeClassName = "ActiveMoodWallPage" exact id = "MoodWallPage" to = "/MoodWall" > MoodWall 
            </NavLink>
         </Button> 
         </div>
         </nav>

         

        <Switch>
            <Route exact path = "/" > <Home/>          
            </Route> 
            <Route exact path = "/MoodWall">
                <MoodWall moodwalls={moodwalls} setMoodwalls={setMoodwalls}></MoodWall>
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
                <SearchForm setMoodwalls={setMoodwalls}/>
                </header> 
            </div>

        )
    }
}

export default App;