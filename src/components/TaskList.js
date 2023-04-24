import React from "react";
import task from " /Task";

function TaskList({task,itemDelete}) {
  //const task =function(){
    //TASKS.map((task)=>task.text
    //}
    //const categories=function(){
      //TaskList.map((cat)=>cat.category)
      //}
      //const[task,setTask]=useState(" ")
      //const[taskCategory,setCategory]=useState("All")
      //constfilteredTaskList=todo?.filter((todos)=>{
        //if(ongoingBtn==="All"){
          //return true
//}else{
  //return(onGoingBtn==="All"){
    //}
    //})
    //function itemDelete(text){
      //setTodo(todo.filter(todos)=>(todos.text !==text)))
      //return todo
      //}
      //const TaskList=filteredTaskList?.map((todo)=>(
        //<Task
        //key={todo.text}
        //category={todo.category}
        //deleteTodo={deleteTodo}
        // />
        //))

}
       
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {TaskList.map((task,index)=>(
        <Task
        itemDelete={itemDelete}
        key={index}
        text={task.text}
        category={task.category}
        />
      ))}

      
    </div>
  );


export default TaskList;
