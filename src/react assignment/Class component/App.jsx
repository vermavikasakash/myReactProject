import React from "react";
import { Component } from "react";
class App extends Component{
    state={username:"Akash",password:"134"}
    render(){
        return(<>
        <h1>{this.state.username}</h1>
        <h1>{this.state.password}</h1></>)
    }
}
export default App