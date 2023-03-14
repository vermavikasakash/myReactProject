import React from "react";
import { Component } from "react";
class App extends Component{
    state={subject:"React.js", skills:["html","css","js"]}
    render(){
        return(<>
        <h1>{this.state.subject}</h1>
        <h1><ul>{this.state.skills.map((values)=>{
           return <li>{values}</li>
        })}</ul></h1>
        </>)
    }
}
export default App