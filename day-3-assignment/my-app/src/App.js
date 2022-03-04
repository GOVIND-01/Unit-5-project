import React, {useState} from "react"
import "./App.css"

export default function App() {
  const [counter, setCounter] = React.useState(0)
  return (
    <div className="App">
      <h1>Counter : <span>{counter}</span></h1>
      <div className="btn_div">
      <button className="inc"onClick={()=> setCounter(counter + 1)}>Increment</button>
      <button className="dec"onClick={()=> setCounter(counter - 1)}>Decrement</button>
      <button className="dou"onClick={()=> setCounter(counter * 2)}>Double</button>
    </div>
    </div>
  );
  }
