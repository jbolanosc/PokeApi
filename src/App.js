import React from "react";

import NavBar from "./components/layout/NavBar";
import PokemonList from "./components/Pokemon/PokemonList";
import './index.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <PokemonList />
    </div>
  );
}

export default App;
