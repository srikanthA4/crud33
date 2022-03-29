import React from "react";
import AddTaskForm from "./components/AddTaskForm";

import ItemList from "./components/ItemList";
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page: "all",
      count: 1,
      todos: [
        {
          id:1,
          text:"Learn React",
          done:false,
        }, 
      ],
    };
 }

 formSubmitted = (task)=> {
   /*
   called on from submit of the add task from computer
   */
  this.setState((state)=>({  

    count:state.count +1,
    todos: [
      ...state.todos,
      {
        id:state.count +1,
        text: task,
        done: false,
      },
    ],
  }));
 };

 changePage= (page) =>{
  /*
  called on click of nav items
  change the page
  */
  this.setState({page});
 };

 updateTodo =(id, done)=>{




  this.setState((sate)=>({
    todos: this.state.todos.map((todo)=>{
      if (todo.id === id) {
        return {...todo,done};
      }
      return todo;
    }),
  }));
 };

 deleteTodo=(id)=> {




  this.setState((state)=>({
    todos:state.todos.filter((todo)=>todo.id !== id),
 }));
 };
 
 getpagetems={
   all:()=> [
     ...this.state.todos.filter((todo) => !todo.done),
     ...this.state.todos.filter((todo)=> todo.done),
   ],
   active:()=>this.state.todos.filter((todo)=>!todo.done),
   done:()=>this.state.todos.filter((todo)=>!todo.done),
 };
 
 render(){
   return(
     <div className="App">
       <h1>Todo-List</h1>
       < AddTaskForm formSubmitted={this.formSubmitted}/>
       <ItemList
       items={this.getpagetems[this.state.page]()}
       todoUtils={{
         updateTodo: this.updateTodo,
         deleteTodo:this.deleteTodo,
       }}
       />
     </div>
   );
 }
 
}

 export default App;



    
    