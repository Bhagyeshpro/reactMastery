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

  // componentWillUnmount alternative
  // Lifecycle func - when component unmounts/cleanup function
  useEffect(() => {
    console.log("Attached listener");
    window.addEventListener("resize", updateWindowWidth);
    return () => {
      console.log("Detached listener");
      window.removeEventListener("resize", updateWindowWidth);
    };
  });

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  //On First Render/Mount - componentDidMount
  useEffect(() => {
    console.log("Component Is Mounted");
  }, []);

  //On First Render + whenever the component changes
  //componentDidUpdate alternative
  useEffect(() => {
    console.log(`The name changed! ${name}`);
    return () => {
      console.log("Component Unmounted!");
    };
  }, [name]);

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
