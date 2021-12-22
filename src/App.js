import "./App.css";
import {useEffect, useState } from "react"
import useRandomJoke from "./hooks/useRandomJoke";

function App() {
  const joke = useRandomJoke()

  return (
    <div className="App">
      <h1>Joke Generator</h1>
      <h2>{joke}</h2>
      <button >Generate Joke</button>
    </div>
  );
}

export default App;
