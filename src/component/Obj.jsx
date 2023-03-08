import React from "react"
const Obj=(props)=>{
    return(
        <>
<h1>{props.data.username}</h1>
<div>{props.data.password}</div>
        </>
    )
}
export default Obj