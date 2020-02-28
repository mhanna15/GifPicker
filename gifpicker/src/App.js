import React from "react";
import "./App.css";
import SearchForm from "./searchForm";
import Search from "./api";


function App() {
  return (   
    <div className="App"> 
      <header className="App-header">
        <h1>Welcome to MoodWall</h1>
        <SearchForm />
      </header>
      
    </div>
    
  );
}

export default App;
