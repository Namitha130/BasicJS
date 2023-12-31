import { memo } from "react";
const FunctionChild = () => {
    console.log("child re-rendered");
    return ( 
        <div>
                   <h1>I'm child function</h1>
                   {/* <h1>{initial}</h1> */}
        </div>
    );
}
 
export default memo(FunctionChild);