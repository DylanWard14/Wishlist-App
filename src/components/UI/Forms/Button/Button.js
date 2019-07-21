import React from 'react';
import classes from './Button.css'

const Button = (props) => {
    let buttonClasses = [classes.Button, classes[props.type]];
    return (
        <button className={buttonClasses.join(' ')} onClick={props.clicked}>{props.label}</button>
    )
}

export default Button;