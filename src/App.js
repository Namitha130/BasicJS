
// import ClassParent from "./classcomponents/ClassParent";
// import FunctionParent from "./classcomponents/FunctionParent";
// import MultipleDivs from "./components/MultipleDivs"
// import Navbar from "./components/Navbar"
// import Parent from "./components/Parent";
// import PracticeWork from "./components/PracticeWork";
// import Fetch from "./fetchcomponents/Fetch"
import Tracker from './components/Tracker'

//! dynamic value
//? function decation: 
// function App() 
// {
//   let a =10;
//   let b ="hello"
//   let c= false; // not come
//   let d = undefined; // not come
//   let e = null; // not come
//   let f = NaN; // not come

//   let max =20;
//   return(
//     <div>
//       <h1>{a}</h1>
//       <h1>{b}</h1>
//       <h1>{c}</h1>
//       <h1>{d}</h1>
//       <h1>{e}</h1>
//       <h1>{f}</h1>

//       <input type="number" step={max}/>
//     </div>
//   )
// }
//? class declaration
// import React, { Component, Fragment } from 'react';
// class App extends Component
// {
//   render() 
//     {
//       return(
//          funtional component
// function App() 
// {
//   return(
//     <div>
//       <h1>header</h1>
//       <hr/>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//     </div>
//   )
// }
//!js in html ----> enclose js within {}
// <>
//   <h1>header tag</h1>
//   {console.log("hello universe")}
//  <p>paragraph tag</p>
// </>
//         <div>

//         </div>
//       );    
//     }

// }


//! styles in react JS
// function App() 
// { 
//   let styles =  { backgroundColor : "red",
//             color : "white",
//             margin :"20px",
//             textAlign : "center",
//             textDecorationLine : "underline",
//             textDecorationColor : "green",
//             textDecorationThickness : "10px"
//           }
//   let p ={
//     fontSize : "30px",
//     backgroundColor : "gold",
//     color : "black"
//   }
//    return ( 
//    <div style={styles}>
//       <h1 style={{fontSize:"80px"}}> header tags </h1>
//       <hr/>
//       <p style={p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio</p>
//    </div>
//    )  
// }
//! event handling 
// function App() 
// {

//   let x = ()=>{
//     console.log("this is a zero argument function");
//   }

//   let  y =(a,b) =>{
//     console.log("this is a arguments function");
//     console.log(a , b);
//   }
//   return(
//     <div className="input-box">
//       <h1> Event listener</h1>
//       <hr/>
//       <button onClick={ x }> click to execute x </button>
//       <button onClick={()=>{ y(10,20)} }> click to execute y </button>
//     </div>
//   )

// }
//!counter 
// import {useState} from "react";
// function App() 
// { 
//  let [count , setCount] = useState(10)

//   let increment = ()=> { 
//                         setCount(count +10);
//                         };
//   let decrement = ()=> { 
//                         setCount(count-10);
//                       };

//     return(
//       <div className="input-box">
//         <h1> {count}</h1>
//           <button onClick = {increment}>increment</button>
//           <button onClick = {decrement}> decrement</button>
//       </div>
//     )    
// }
//! display digital time
// import {useState } from "react";
// function App() 
// {     
//   let [time, setTime]= useState(0);

//   setInterval( ()=> { 
//     setTime( new Date().toLocaleTimeString()) 
//                     },1000)
//     return(
//       <div className="input-box">
//         <h1> {time}</h1>
//       </div>
//     )  
// }

//! Conditional rendering

//! notes : when we need to render one structute based on one condition
//! { cobdition && <jsx/>}  i.e., double hampercent
// import {useState } from "react";
//  function App() 
//  {    
//       let [period , setPeriod ] = useState("morning");  // morning ,noon ,evening

//       return(
//         <div className="input-box">
//           {/* for one structute  */}
//          {/* {period === "evening" && <h1> Good Evening!!!!</h1>}  */}

//          {/* for many structute  */}
//        {/* { period === "evening" ? <h1> Good morning!!!! 🌅 </h1> : <h1> Good Evening!!!! 🌇 </h1> } */}

//         {/* displayig emoji  */}
//          {/* { period === "evening" ? <h1>🌅 </h1> : <h1>🌇 </h1>} */}

//           {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//         </div> */}
//       )
//  }
//! display even in green  and  odd in red 
// import {useState } from "react";
// function App() 
// { 
//   let [count ,setCount] = useState(4);
//   let color1 ={color:  "green"};
//   let color2 = {color: "red"};
//     return(
//       <div className="input-box" >
//         <h1 style={count%2 ==0 ? color1 : color2}>{ count }</h1> 

//         { count%2 == 0 ?  <h1>Even</h1> :  <h1>ODD</h1> }
//        <button onClick={() => {setCount(count+1)}}> Increment</button>
//        <button onClick={() => {setCount(count-1)}}>decrement</button>
//       </div>
//     ) 
// }

//! display background using ternery operator
// import {useState } from "react";
// function App() 
// { 
//   let [ lightTheme ,setLightTheme] = useState(true);

//   let light = {color: "black" , backgroundColor : "white"}
//   let dark = {color: "white" , backgroundColor : "black"}
//     return(
//       <div className="input-box" style={lightTheme ? light : dark}>
//         <h1>Sample text data </h1>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//           Ut dolorum fuga voluptatem fugit expedita repellendus quam 
//           natus. Omnis, nulla saepe. Blanditiis quidem cum tenetur 
//           vitae sed nisi veritatis quis ipsum?</p>

//           <button onClick={ () => {setLightTheme(true)}} >light theme </button>
//           <button onClick={ () => {setLightTheme(false)}} > Dark theme</button>
//       </div>
//     )  
// }

//!----------------------------------------------------------------------------------------------



//! multiple content display
function App() 
{      
   return(
    <div align="center">
        {/* <Navbar/>   */}
        {/* <MultipleDivs/>   */}
        {/* <Parent/> */}
       {/* <PracticeWork/> */}
        <Tracker/>
       {/* <ClassParent/> */}
       {/* <FunctionParent/> */}
       <fetch/>
    </div>
   )
}


export default App;

//! class component
//  import { Component,PureComponent } from "react";

// class App extends PureComponent
// {     
//    constructor()
//    {  
//       super()
//       this.state = {count1:10}
//    }
//    render()
//    {  
//       console.log("component rendered");
//       return(
//          <div>
//             <h1> Hello World </h1>
//             <h2>Count1: {this.state.count1}</h2>
//             <button onClick={()=>{this.setState({count1 :this.state.count1+0})}}> increase 1</button>
//          </div>
//       )
         
      
//    }
// }
// export default App