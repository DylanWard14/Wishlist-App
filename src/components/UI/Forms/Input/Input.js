import React from 'react';
import classes from './Input.css'

const input = (props) => {
    return (
        <div className={classes.InputElement}>
            <label className={classes.Label}>{props.label}</label>
            <input 
                className={classes.Input}
                type={props.inputType}
                name={props.name}
                placeholder={props.placeholder}
                onChange={props.changeHandler}
                required={props.required}
            />
        </div>
    )
}

export default input