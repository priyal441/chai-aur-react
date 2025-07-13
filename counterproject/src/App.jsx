import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter < 20) {
      setCounter((prevCounter) => {
        if (prevCounter < 20) return prevCounter + 1;
        else return prevCounter;
      });
      setCounter((prevCounter) => {
        if (prevCounter < 20) return prevCounter + 1;
        else return prevCounter;
      });
      setCounter((prevCounter) => {
        if (prevCounter < 20) return prevCounter + 1;
        else return prevCounter;
      });
      setCounter((prevCounter) => {
        if (prevCounter < 20) return prevCounter + 1;
        else return prevCounter;
      });
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
      <p>Footer: {counter}</p>
    </>
  );
}

export default App;
