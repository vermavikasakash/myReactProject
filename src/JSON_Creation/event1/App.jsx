import React from "react"
import {Component} from "react"
class App extends Component{
    constructor(){
        super()
        this.state={username:""}
    }
    componentDidMount(){
        let one=document.querySelector("button")
        one.addEventListener("click",()=>{
            this.setState({username:this.state.username="KGF"})
        })
    }
    render(){
        return(<>
        <h1>{this.state.username}</h1>
        <button>Change</button>
        </> )
    }
}
export default App