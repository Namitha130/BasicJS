import { memo } from "react";
import { Component } from "react";
class ClassChild extends Component
{   
    constructor(prop)
    {
        super()
    }
    render()
    {
        console.log("rendered");
        return (
            <div>
                <h1>I'm child  class component</h1>
                <h1>{this.props.count1}</h1>
        
            </div>
        )
    }
}
export default memo(ClassChild) ;