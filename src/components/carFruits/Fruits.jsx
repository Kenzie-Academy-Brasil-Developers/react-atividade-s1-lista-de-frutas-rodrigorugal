import { useState } from "react";

const Fruits = () => {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  const newFilter = () => {
    // setFruits(useState.filter("red"));
    console.log(fruits);
  };

  return (
    <div>
      <button onClick={newFilter}>Click!</button>
    </div>
  );
};

export default Fruits;
