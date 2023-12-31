import { useState } from "react";

function PracticeWork() {
  //    var a=10;
  //    let add = ()=>{
  //        a = a+10
  //        console.log(a);

  //    }

  //! with useState
  let [initial, setInitial] = useState(20);

  return (
    <div>
      {/* <h1> {a} </h1>
      <button onClick={add}>ADD</button> */}

      {/* //! with useState  */}

      <h1> {initial} </h1>
      <button
        onClick={() => {
          setInitial(initial + 10);
        }}
      >
        ADD
      </button>
      {/* <div style={style}> 
            
          </div> */}
    </div>
  );
}
export default PracticeWork;
