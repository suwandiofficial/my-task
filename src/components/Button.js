import React from "react";
import PropTypes from "prop-types"
import "../styles/button.css";

const Button = ({text,variant}) => {
    return(
        <div>
          <button className={`btn btn-${variant}`}> {text} </button>
        </div>
    )
}
Button.propTypes = {
  text : PropTypes.string.isRequired,
  variant :   PropTypes.string.isRequired
}
export default Button;