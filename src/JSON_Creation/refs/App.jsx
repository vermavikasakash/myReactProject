import React,{Component, createRef} from "react";
class App extends Component{
    constructor(){
    super()
    this.state={user:"Vikas"}
       this.h1ref=React.createRef()                        
    }
    componentDidMount(){
        let h1=document.querySelector("h1")
    console.log(h1,"dom");
    console.log(this.h1ref.current,"react");
    }
    render(){
        return(<>
        <h1 ref={this.h1ref}>{this.state.user}</h1>

        </>)
    }
}
export default App