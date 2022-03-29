import {useState}  from "react";

const AddTaskForm=({formSubmitted})=>{
    const [task, setTask]=useState("");
    return (
     <form
     onSubmit={(e)=>{
         e.preventDefault();
         if (task==="") return;
         formSubmitted(task);
         setTask("");
     }} 
    className="form"
   > 
     <input
     onChange={(e)=>{
         setTask(e.target.value);
     }}
     type="text"
     value={task}
     />
     <input type="submit" value="Add"/>
   </form>    
    );
};

export default AddTaskForm        
                 