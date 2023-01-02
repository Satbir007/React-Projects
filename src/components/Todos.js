import React, { useState } from 'react'

const Todos = () => {

  const [Todos, setTodo] = useState("");
 
  const handleChange = (event) =>{
     setTodo(event.target.value)

  };

  console.log("todo text", Todos);

  return (
    <div className='addTodos'>
        <input 
            type="text" 
            onChange={(event) => handleChange(event)} 
            className="todo-input" 
        />
        <button className="add-btn">Add</button>
    </div>
  );
};

export default Todos

