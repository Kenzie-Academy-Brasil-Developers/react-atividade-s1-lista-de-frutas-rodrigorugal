import { useState } from "react";
import "./App.css";

function App() {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  const fruitsFilter = () => {
    setFruits(
      fruits.filter((fruits) => {
        return fruits.color === "red";
      })
    );
  };

  const valorTot = fruits.reduce((item, newItem) => {
    return newItem.price + item;
  }, 0);

  return (
    <div className="App">
      <header className="App-header">
        <div className="titulo">
          <h1>Preço Total = {valorTot}</h1>
        </div>
        <ul className="lista">
          {fruits.map((fruits, index) => (
            <li key={index}> {fruits.name}</li>
          ))}
        </ul>
        <button className="bntTroca" onClick={fruitsFilter}>
          Filtrar frutas vermelhas
        </button>
      </header>
    </div>
  );
}

export default App;
