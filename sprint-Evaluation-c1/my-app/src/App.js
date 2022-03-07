import React, {useState} from "react"
import "./App.css"

export default function App() {
  const [counter, setCounter] = React.useState(0)
  return (
    <div className="App">
      <div className="items"> 
          <span>Books: </span>
          <button className="addBook">+</button>
          <button className="remBook">-</button>
          <span className="totalBooks"> 13 </span>
      </div>
      <div className="items"> 
          <span>Pens: </span>
          <button className="addPen">+</button>
          <button className="remPen">-</button>
          <span className="totalPens"> 10 </span>
      </div>
      <div className="items"> 
          <span>Notebook: </span>
          <button className="addNotebook">+</button>
          <button className="remNotebook">-</button>
          <span className="totalNotebooks"> 44 </span>
      </div>
      <div className="items"> 
          <span>InkPens: </span>
          <button className="addInkpen">+</button>
          <button className="remInkpen">-</button>
          <span className="totalInkpens"> 78 </span>
      </div>
      <div className="total">0</div>
    </div>
  );
  }
