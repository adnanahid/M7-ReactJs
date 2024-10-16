import Counter from "./Counter";
import "./App.css";
import { useState } from "react";

function App() {
  function handleClick() {
    alert("button Clicked");
  }
  const handleClick2 = (num) => {
    alert(num);
  };

  return (
    <>
      <Counter></Counter>
      <h3>React Core Concept</h3>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => handleClick2(5)}>Click Me2</button>
    </>
  );
}

export default App;
