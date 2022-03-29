import React from "react";
import Item from "./Item";
const ItemList=({Items, todolists })=> {
   return (
    <section>
        {Item.length > 0 ? (
        <ul className="item-list">   
         {Item.map((item)=>(
         <Item key={item.id} item={Items} todolists={todolists}/> 
        ))}
        </ul> 
        ) : (
            <div className="error">No items left</div>
        )}
    
    </section>
   ); 
};

export default ItemList
