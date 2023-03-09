import React from "react"
import Movie from "./JSON_Creation/Movie"
import Json from "./JSON_Creation/userdata.json"
import "./JSON_Creation/json.css"
const App=()=>{
    return(
        <>
        
        <Movie payload ={Json}/>
        </>
    )
}
export default App