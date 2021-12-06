import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [yourLanguage, setYourLanguage] = useState("");

  const increment = () => {
    // count += 1; //Wrong
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  // const coddingLanguage = () => {
  //   console.log("running");
  // };

  const handleLanguage = (yourLanguage) => {
    setYourLanguage(yourLanguage);
  };

  // State is non persistent when user refresh or leaves the page is will set to default

  return (
    <div className="App">
      <h1>React Mastery/ useState</h1>
      <h2>Counter</h2>
      <p>The count is {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <h3>You are learning {yourLanguage}</h3>
      <input id="yourLanguage" onChange={handleLanguage} />
      <button onClick={handleLanguage}>Select</button>
    </div>
  );
}

export default App;
