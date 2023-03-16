import React from  "react"
import "./function.css"
import { useState } from "react"
const App=()=>{
    let [count,setCount]=useState(0)
  let  handleIncrement=()=>{setCount(count +1)}
  let  handleDecrement=()=>{setCount(count -1)}
  let  handleReset=()=>{setCount(0)}
    return(<>
    <h1>{count}</h1>
    <button onClick={handleIncrement}>+Increment</button>
    <button onClick={handleDecrement}>-Decrement</button>
    <button onClick={handleReset}>Reset</button>
    </>)
}
export default App