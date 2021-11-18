import React from "react";
import moment from "moment";

const Todo = (props) => {

  const date = moment().format("ll")

  return (
    <li className="todoItem">
      <div className="checkbox-group">
        <input 
          id={props.id} 
          type="checkbox" 
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label className="todo-name" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <label className='date'>{`Added: ${date}`}</label>
      <button 
          type="button" 
          className="btn btn__danger"
          onClick={() => props.deleteTask(props.id)}
      >
        Delete
      </button>
    </li>
  );
}
  

export default Todo;