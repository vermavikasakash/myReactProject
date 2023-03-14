import React from "react"
import { Component } from "react"
import JSON from "./student.json"
import Student from "./Student.jsx"
class App extends Component{
    constructor(){
        super()
        this.state={json:JSON}
    }
render(){
    return (<>
   <Student data={this.state.json} />
    </>)
}
}
export default App