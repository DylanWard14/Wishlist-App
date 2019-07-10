import React from 'react';
import classes from './Toolbar.css'

const toolbar = () => {
    return (
        <div className={classes.Toolbar}>
            <h1>Wishify</h1>
            <nav>
                <div className={classes.Link}>
                    <a>Home</a>
                </div>
                <div className={classes.Link}>
                    <a>Wish list</a>
                </div>
            </nav>

            {/* <div className={classes.outerDiv}><div class={classes.innerDiv}></div></div> */}
        </div>
    );
}

export default toolbar;