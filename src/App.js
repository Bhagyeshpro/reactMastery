import { useRef, useState } from "react";
import "./App.css";
import useRandomJoke from "./hooks/useRandomJoke";

function App() {
  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null)
  
  const [firstName, setFirstName] = useState('Captain')
  const [lastName, setLastName] = useState('America')
  
  const joke = useRandomJoke(firstName, lastName)

  const generateJoke = (e) => {
    e.preventDefault()
    setFirstName(firstNameRef.current.value)
    setLastName(lastNameRef.current.value)
  }

  return (
    <div className="App">
      <h1>Joke Generator</h1>
      <h2>{joke}</h2>
      <form>
        <input placeholder="firstName" ref={firstNameRef} />
        <input placeholder="lastName" ref={lastNameRef} />
        <button onClick={generateJoke} >Generate Joke</button>
      </form>
    </div>
  );
}

export default App;
