import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Toolbar.css'

const toolbar = () => {
    return (
        <div className={classes.Toolbar}>
            <h1>Wishify</h1>
            <nav>
                <NavLink to="/"  className={classes.Link}>
                    Home
                </NavLink>
                <NavLink to="/addItem" className={classes.Link}>
                    Add Item
                </NavLink>
            </nav>
        </div>
    );
}

export default toolbar;