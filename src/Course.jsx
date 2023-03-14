import React from "react"
const Course=(props)=>{
    if(props.details.courseAvial==false)
    { return(<>
    <h1>{props.details.courseName}</h1>
    <h2>{props.details.courseDuration}</h2>
    <button style={{color:"green"}}>Avialable</button>
    </>)}
    else
    { return(<>
        <h1>{props.details.courseName}</h1>
        <h2>{props.details.courseDuration}</h2>
        <button style={{color:"red"}}>Not Avialable</button>
        </>)

    }

}
export default Course