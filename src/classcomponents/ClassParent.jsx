
 import { Component,PureComponent } from "react";

import ClassChild from "./ClassChild";
class ClassParent extends PureComponent
{     
   constructor()
   {  
      super()
      this.state = {count1:10}
   }
   render()
   {  
    //   console.log("component rendered");
      return(
         <div>
            <h1> Hello World </h1>
            <h2>Count1: {this.state.count1}</h2>
            <button onClick={()=>
            {this.setState(
                {count1:this.state.count1+1}
                          )}}> 
                increase 1</button>
                <hr/>
                <ClassChild count1={this.state.count1}/>
         </div>
      )
         
      
   }
   componentDidMount()
   {
    <h1>im component did mount method</h1>
   }
   componentDidUpdate()
   {
    <h1>im component did update method</h1>
   }
   componentWillUnmount()
   {
    <h1>im component will unmount</h1>
   }
}
 
export default ClassParent;