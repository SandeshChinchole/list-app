import React from "react";
import moment from "moment";

function Todo(props) {

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
          <label className="todo-label" htmlFor={props.id}>
            {props.name}
          </label>
        </div>
        <label className='date'>{`Added: ${date}`}</label>
        <button 
            type="button" 
            className="btn btn__danger"
            onClick={() => props.deleteTask(props.id)}
        >
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </li>
    );
  }
  

export default Todo;