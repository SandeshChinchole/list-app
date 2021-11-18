import React, { useState } from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import { nanoid } from "nanoid";
import Timer from "./components/Timer";

const filterButtons = {
  All: () => true,
  Pending: task => !task.completed,
  Completed: task => task.completed
};

const filterButtonNames = Object.keys(filterButtons);

const App = (props) => {

  const [filter, setFilter] = useState("All");
  const [tasks, setTasks] = useState(props.tasks);

  const addTask = (name) => {
    const newTask = {id: "t-" + nanoid(), name: name, completed: false};
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompleted = (id) => {
    const updatedTasks = tasks.map(task => {
      if(id === task.id){
        return {...task, completed: !task.completed}
      }
      return task;
    })
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  };

  const todoList = tasks
  .filter(filterButtons[filter])
  .map(task => (
    <Todo 
      id={task.id} 
      name={task.name} 
      completed={task.completed} 
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
    />)
  );

  const filterButtonList = filterButtonNames.map(name => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  return (
    <div id="main">
      <h1>Todo List</h1>
      <Timer />
      <Form addTask={addTask} />
      <div className="filter-buttons">
        {filterButtonList}
      </div>
      <ul
        className="todo-list"
        aria-labelledby="list-heading"
      >
        {todoList}
      </ul>
    </div>
  );
}


export default App;
