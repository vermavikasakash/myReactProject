import React from "react"
import STYLE from "./ajio.module.css"
const Ajio=()=>{
    return(
<>
<nav>
    <div id={STYLE.id}><b>AJIO</b></div>
<div id={STYLE.id1}>
    <ul>
        <li> <a href="">Men</a></li>
        <li>  <a href="">Women</a></li>
        <li> <a href="">Kids</a></li>
        <li><a href="">Indie</a></li>
        <li><a href="">Home & Kitchen</a></li>
    </ul>
<div><input type="search" value="Search AJIO" height="50px" /></div>
</div>
</nav>
</>
    )
}
export default Ajio