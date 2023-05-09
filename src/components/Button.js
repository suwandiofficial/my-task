import React from "react";
import "../styles/button.css";

const Button = props => {
    return(
        <div>
          <button className={`btn btn-${props.variant}`}> {props.text} </button>
        </div>
    )
}

export default Button;