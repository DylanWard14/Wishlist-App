import React from 'react';
import classes from './Button.css'

const Button = (props) => {
    return (
        <button className={classes[props.type]} onClick={props.clicked}>{props.label}</button>
    )
}

export default Button;