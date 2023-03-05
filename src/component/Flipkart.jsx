import React from "react"
import STYLE from "./flipkart.module.css"
const Flipkart=()=>{
    return(
        <nav>
<div id={STYLE.IdBlock}>Flipkart
                <input type="search" value="Search for items" />
                Go
                </div>
                <div id={STYLE.IdBlock1}>
                    <ul>
                    <li>  <a href="">Login</a> </li>
                        <li>  <a href="">Electronics</a> </li>
                        <li>  <a href="">TVs& Appliances</a> </li>
                        <li>  <a href="">Baby & Kids</a> </li>
                        <li>  <a href="">Electronics</a> </li>
                        <li>  <a href="">Home & Furniture</a> </li>
                        <li>  <a href="">Sports,Book & More</a> </li>
                        
                    </ul>
                
            </div>
            </nav>)
            }
export default Flipkart