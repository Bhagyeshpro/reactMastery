import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [name, setName] = useState("");

  //On Every Render
  useEffect(() => {
    console.log("I re-rendered");
  });

  //On First Render/Mount - componentDidMount
  useEffect(() => {
    console.log("Component Is Mounted");
  }, []);

  return (
    <div className="App">
      <h1>React Mastery</h1>
      <h2>UseEffect</h2>
      <h3>Your Window Width is {windowWidth}</h3>
      <input
        type="text"
        placeholder="Enter Your Name"
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default App;
