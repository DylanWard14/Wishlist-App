import React, {Component} from 'react';
import classes from './addItem.css'

class addItem extends Component {
    render () {
        console.log('add item')
        return (
            <div className={classes.AddItem}>
                <p>add item</p>
            </div>
        )
    }
}

export default addItem;