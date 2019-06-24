import React from 'react';
import Toolbar from '../navigation/toolbar/Toolbar';
import Footer from '../navigation/footer/Footer';
import classes from './Layout.css'

const layout = (props) => {
    return (
        <React.Fragment>
            <Toolbar />
            <main className={classes.Content}>
                {props.children}
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default layout;