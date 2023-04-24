import React, { useState } from "react";

function NewTaskForm({categories,onTaskFormSubmit}) {
  //const [text,setText]=useState(" ")
  //const[newCat,setNewCat]=useState(" ")
  const[newItems,setNewCat]=useState({
    Text:" ",
    category:"code"
  })
  const formCat = categories.map((category,index)=>(<option key={index}>{category}</option>/option))
  function newItemPost(e){
    setNewItem({...newItems, [e.target.name]:e.target.value})
  }

  return (
    <form className="new-task-form" onSubmit={(e)=>{
      e.preventDefault();
      onTaskFormSubmit(newItems);
    }}>
      <label>
        Details
        <input type="text" value={newItem.text} onChange={newItemPost}/>
        </label>
        <label>
          category
          <select name="category"
          onChange={newItemPost}
          value={newItems.category}
          >
            {/*render <option> elements for each category here*/}
            {formCat}
            </select>
            </label>
            <input type="submit" value="Add task"/>
            </form>
  );
  

  }
        

        

export default NewTaskForm;
