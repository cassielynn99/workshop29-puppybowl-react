import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import Nav from "./components/NavBar";

//to view: http://localhost:5173/
//API: https://fsa-puppy-bowl.herokuapp.com/api/

function App() {
  return (
    <div className="App">
      <h1>Puppy Bowl Roster:</h1>
      <Nav />
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/:id" element={<SinglePlayer />} />
      </Routes>
    </div>
  );
}

export default App;
