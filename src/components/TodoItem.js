import React from "react";
import Button from "./Button";

const TodoItem = (props) => {
    return(
        <div style={todoItem}>
            <p> {props.todo.nama} </p>
            <div style={todoItem} >
                <Button text="edit" variant="success"/>
                <Button text="delete" variant="warning"/>

            </div>
        </div>
    )
}

export default TodoItem;

const todoItem = {
    background: "#2da4f8",
    color : "#fff",
    display: "flex",
    alignItems : "center",
    height : "3rem",
    padding : "0 1rem",
    justifyContent : "space-between",
    margin: "0.5rem 0"
}