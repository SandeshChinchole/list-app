import React, {useState} from "react";

const TodoForm = (props) => {
    const [name, setName] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        name === "" ? alert("Enter a task!") :
        props.addTask(name);
        setName("");
    };

    return(
        <form id="todoForm" className="form-inline" onSubmit={handleSubmit}>
            <input
            id="itemName"
            className="form-control"
            type="text"
            autoComplete="off"
            placeholder="Add a task..."
            value={name}
            onChange={handleChange}
            />
            <button type="submit" className="btn btn-default">
            Add
            </button>
        </form>
    );
};

export default TodoForm;