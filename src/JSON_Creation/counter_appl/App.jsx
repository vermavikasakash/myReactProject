import React from "react"
import {Component} from "react"
import color from "./color.css"
class App extends Component{
constructor(){
    super()
    this.state={count:0}
}
handleIncrement=()=>{ 
               this.setState({count:this.state.count+1})   }
 handleDecrement=()=>{
                  this.setState({count:this.state.count-1})  } 
handleReset=()=>{
    this.setState({count:0})
}                                 
render(){
    return (<div id="mainDiv" > 
        <h1>{this.state.count}</h1>
        <div id="count">
        <button onClick={this.handleIncrement}>+Increment</button>
        <button onClick={this.handleDecrement}>-Decrement</button>
        <button onClick={this.handleReset}>Reset</button>
         </div> 
         </div>)
}
}
export default App