// import './App.css'

import { useState } from "react"

function App() {
  let [counter, setCounter] = useState(0)

  let plus = () => {
    setCounter(++counter)
  }

  let reset = () => {
    setCounter(0)
  }

  let minus = () => {
    counter > 0 ? setCounter(--counter) : alert("can not")
  }

  let btnStyle = {
    color: "blue",
    border: "1px solid red",
    marginRight: "5px",
    borderRadius: "10px",
    padding: "5px 10px"
  }

  return (
    <>
      <p>{counter}</p>
      <button className="btn" style={{color: counter==0 ? "green":"orange"}} onClick={plus}>Plus</button>
      <button className="btn" style={counter==0 ? {color:"brown"}:{color:"greenyellow"}} onClick={reset}>Reset</button>
      <button className="btn" style={btnStyle} onClick={minus}>Minus</button>
    </>
  )
}

export default App
