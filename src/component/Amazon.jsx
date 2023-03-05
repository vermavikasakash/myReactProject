import React from "react"
import STYLE from "./amazon.module.css"
const Amazon=()=>{
    return(<>
    <nav>
        <div id={STYLE.idBlock1}>Amazon
            <input type="Search" value="Search for the product" />Go
        </div>
        <div id={STYLE.idBlock}>
            <ul>
                <li>  <a href="">Sign In</a> </li>
                <li>  <a href="">Try Prime</a> </li>
                <li>  <a href="">Wish List</a> </li>
                <li>  <a href="">Profile</a> </li>
            </ul>
        </div>
        </nav>
         </>
    )
}
export default Amazon