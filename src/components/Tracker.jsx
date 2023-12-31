import { useState } from "react"
import '../styles/tracker.css'
function Tracker() 
{   
    let [tasklist , setTaskList] = useState(
        [
            {id:1, employee:"Akanksh",taskName :"design layout",start :"1/2/2023",end: "25/4/2024"},
            {id:2, employee:"Gunda",taskName :"Back end",start :"1/2/2023",end: "25/4/2024"},
            {id:3, employee:"Bantty",taskName :"Software Developer",start :"1/2/2023",end: "25/4/2024"},
            {id:4, employee:"Rahul",taskName :"Front end",start :"1/2/2023",end: "25/4/2024"},
            {id:5, employee:"Swaraj",taskName :"Associate juniee",start :"1/2/2023",end: "25/4/2024"},
        ]
                        )
    

       let addNewTask = (e) => {
        e.preventDefault();
        let newTask = {
            employee:document.getElementById("emp").value ,
            taskName : document.getElementById("designation").value,
            start :new Date().toLocaleString(),
            end :document.getElementById("end").value
                    }
        
           let duplicates = tasklist.some( (dup,index,arr) => { return dup.employee == newTask.employee && dup.taskName == newTask.taskName});
                    // console.log(duplicates); 

                    if(duplicates)
                    {
                        alert("Task is already prsent")
                    }
                    else {
                        let temp =[...tasklist];
                        temp.push(newTask);
                        setTaskList(temp);
                        alert("New Task  is added");
                    }
      
       }  

       let deleteTask = (taskName) => {

        let temp = tasklist.filter((t,i,a) => { return t.id != taskName.id})
        setTaskList(temp);
        alert("Task is deleted successfully")
        }
       
   return(
    <div className="tracker">
        <h1 align="center">Employee task time Tracker</h1>
        <hr/>




        <form onSubmit={addNewTask} align="center">
            <input type="text" placeholder="Employee name" id="emp" required/>
            <input type="text" placeholder="task name" id="designation" required/>
            <input type="date" id="end" />
            <input type="submit" />
        </form>

        <table border="3px" cellPadding= "5px" align="center">

            <thead>
            <tr>
                <th>(i+1)</th>
                <th>Slno</th>
                <th>Task</th>
                <th>Start date</th>
                <th>End date</th>
                <th><button>Action</button></th>
            </tr>
            </thead>

            <tbody>
                {
                tasklist.map((taskV,i) => { return(
                        <tr>
                            <td>{i+1}</td>
                            <td>{taskV.employee}</td>
                            <td>{taskV.taskName}</td>
                            <td>{taskV.start} </td>
                            <td>{taskV.end} </td>
                            <td><button id="del" onClick={()=>{deleteTask(taskV)}}>Delete</button></td>
                        
                        </tr>
                    )})
                } 
            </tbody>
            
        </table>
    </div>
   ) 
}
export default Tracker