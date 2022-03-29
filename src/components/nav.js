import React from "react";

const pages =["all","active","done"]
 const nav =({changepage, activePage})=>{
   return (
     <nav>
     <ul className="nav-item">
     { pages.map((pages) => {
      <li
         className={pages === activePage ? "nav-item active":
        "nav-item"}
        key={pages} 
        onClick={()=>changepage(pages)}
      >
      {pages}
      </li>
     })}
     </ul>
    </nav>

  );
 }
  
 export default nav;