

import { useState } from "react"
import Child from "./Child";

function Parent() 
{
    let [user,setUser] = useState("gunda");
    return(
        <div>
            <h1> This is a parent component</h1>
           
            <h2> {user}</h2> 
            <h2>10</h2>
            <button onClick={()=> {setUser(user+10)}}>change value</button>
            <hr/>
             <Child user = {user}/>
            
        </div>
    )
}
export default Parent