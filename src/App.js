import logo from "./logo.svg";
import "./App.css";
import AmazonItem from "./AmazonItem";

function App() {
  return (
    <div className="App">
      <h1>App.js</h1>
      <AmazonItem
        title="Echo"
        discription="Echo Home with Amazon Echo"
        price={29.99}
      />
      <AmazonItem
        title="Alexa"
        discription="Alexa for finest Customers"
        price={79.99}
      />
    </div>
  );
}

export default App;
