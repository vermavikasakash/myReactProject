import React,{ Component } from 'react';
import { createRef } from 'react';
export default class App1 extends Component{
    constructor(){
        super()
        this.state={company:"Qspider"}
      this.h1ref=createRef()
      this.btn=createRef()
        
    }
    render(){
        return(<>
        <h1 ref={this.h1ref}>{this.state.company}</h1>
        <button ref={this.btn} onClick={()=>{
            this.setState({company:"Jspider"})
            this.h1ref.current.style.color="red"
            this.h1ref.current.style.border="2px dashed black"
            this.h1ref.current.style.backgroundColor="green"
        }} >Change Company</button>
        </>)
    }
}