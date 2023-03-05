import React from "react"
import STYLE from "./saavn.module.css"
const Saavn=()=>{
    return(
<nav>
    <div id={STYLE.div1}>
        <ul> 
            <li>  <a href="">Music</a> </li>
            <li>  <a href="">Podcasts</a> </li>
            <li>  <a href="">JioTunes</a> </li>
            <li>  <a href=""><input type="Search" value="Search Song"/></a> </li>
        </ul>
    </div>
   <div id={STYLE.div2}>
   <ul> 
            <li>  <a href="">Home</a> </li>
            <li>  <a href="">Search</a> </li>
            <li>  <a href="">Login</a> </li>
            <li>  <a href="">Setting</a> </li>
            </ul>
   </div>
</nav>
    )
}
export default Saavn