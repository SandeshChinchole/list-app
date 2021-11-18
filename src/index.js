import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const DATA = [
  {id: "todo-0", name: "Example1", completed: true},
  {id: "todo-1", name: "Example2", completed: false}
];

ReactDOM.render(
  <App tasks={DATA} />,
  document.getElementById("root")
);