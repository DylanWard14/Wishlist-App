import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Toolbar.css'
import ItemDetails from '../../WishListViewer/ItemDetails/ItemDetails';

const toolbar = () => {
    return (
        <div className={classes.Toolbar}>
            <h1>Wishify</h1>
            <nav>
                <div className={classes.Link}>
                    <NavLink to="/" >Home</NavLink>
                </div>
                <div className={classes.Link}>
                    <NavLink to="/addItem">Add Item</NavLink>
                </div>
            </nav>

            {/* <div className={classes.outerDiv}><div class={classes.innerDiv}></div></div> */}
        </div>
    );
}

export default toolbar;