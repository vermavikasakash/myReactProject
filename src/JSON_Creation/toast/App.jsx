import React from "react"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
const App=()=>{  
    let handleSubmit=()=>{
        toast.success ("Submitted Sucessfully",{position:toast.POSITION.BOTTOM_LEFT})
        
    }

    return(<>   <ToastContainer/> 
    <button onClick={handleSubmit}>Submit</button>
        </> )  
}
export default App