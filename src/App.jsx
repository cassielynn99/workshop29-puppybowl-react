import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";

//to view: http://localhost:5173/
//API: https://fsa-puppy-bowl.herokuapp.com/api/

function App() {
  return (
    <>
    <h1>Puppy Bowl Roster:</h1>
      <div id="container">
        <div id="navbar">
          <Link to="/"></Link>
        </div>
        <div id="main-section">
          <Routes>
           <Route path="/" element={<AllPlayers />} />
           <Route path="/players/:id" element={<SinglePlayer />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
