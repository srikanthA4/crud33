 import React from "react";
 const Item =({item, todoUtils})=> {
     const{updateTodo,deleteTodo}= todoUtils;
     return(
     <li className={item.done ?"item.done": "item"}>
         <input
           name={item.id}
           id={item.id}
           type="chackbox"
           checked={item.done}
           onchange={(e)=>{
             updateTodo(item.id,e.target.checked);  
           }}
        />
        <lable htmlFor={item.id}>{item.text}</lable>  
        <button
        onClick={()=>{
            deleteTodo(item.id); 
        }}
        className="delete"
    >
     x
    </button>

     </li>    
     )
 };
  
 export default Item;