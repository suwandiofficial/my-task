import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const TodoItem = ({todo,del}) => {
   const delByid = id => {
    del(id)
   }
    return(
        <div style={todoItem}>
            <p> {todo.nama}</p>
            <div style={todoItem} >
                <Button text="edit" variant="success" />
                <Button text="delete" variant="warning" action={() => delByid(todo.id)}/>

            </div>
        </div>
    )
}

TodoItem.propType = {
    todo : PropTypes.object.isRequired,
    del : PropTypes.func.isRequired
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