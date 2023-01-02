import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { addTodos, removeTodos, updateTodos,completeTodos } from "../redux/reducer";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState("");

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, event) => {
    if (event.which === 13) {
      props.updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  console.log("todo text", todo);

  return (
    <div className="addTodos">
      <input
        type="text"
        onChange={(event) => handleChange(event)}
        className="todo-input"
      />
      <button
        className="add-btn"
        onClick={() =>
          props.addTodo({
            // define object todo
            id: Math.floor(Math.random() * 1000),
            item: todo,
            completed: false,
          })
        }
      >
        Add
      </button>

      <br />

      {/* // list of todo elements along with buttons*/}
      <ul>
        {props.todos.map((item) => {
          return (
            <li key={item.id}>
              <textarea
                ref={inputRef}
                disabled={inputRef}
                defaultValue={item.item}
                onKeyPress={(event) =>
                  update(item.id, inputRef.current.value, event)
                }
              />
              <button onClick={() => changeFocus()}>Edit</button>
              <button onClick={() => props.completeTodo(item.id)}>
                Complete
              </button>
              <button onClick={() => props.removeTodo(item.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// connecting this component to redux store using conect
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
