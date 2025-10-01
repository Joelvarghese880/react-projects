import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function addCounter() {
    setCount(p => p+1);
    setCount(p => p+1);
    setCount(p => p+1);
    setCount(p => p+1);
  }

  function resetCounter(){
    setCount(count-1);
  }

  return (
    <>
      <h1>Counter :{count}</h1>
      <button onClick={addCounter}>Increment</button>
      <button onClick={resetCounter}>Decrement</button>
      <footer>{count}</footer>
    </>
  );
}

export default App;
