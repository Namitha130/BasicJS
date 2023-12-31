import { useState } from "react";
import FunctionChild from "./FuntionChild";

const FunctionParent = () => {
    let[initial, setInitial]= useState(10);
    console.log("parent re-rendered");
    return ( 
        <div>
            <h1>I'm parent function</h1>
            <h4>initial value: {initial}</h4>
            <button onClick={()=>{
                setInitial(initial+10)
            }}> Increase by 10</button>
            <hr/>
            <FunctionChild />
        </div>
    );
}
 
export default FunctionParent;