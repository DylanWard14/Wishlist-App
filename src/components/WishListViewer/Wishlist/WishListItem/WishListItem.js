import React from 'react';
import classes from './WishListItem.css';

const wishListItem = (props) => {
    let divClasses = [];
    if (props.wish.purchased) {
        divClasses.push(classes.Purchased)
    }
    if (props.wish.selected) {
        divClasses.push(classes.Selected)
    }
    return (
        <React.Fragment>
        <div 
            className={divClasses.join(' ')} 
            onClick={() => props.clicked(props.wish.name, props.wish.price, props.wish.image, props.wish.URL)}
        >
            <div className={classes.ItemDetails}>
                <img src={props.wish.image} alt="No images"/>
                <p className={classes.ItemName}>{props.wish.name}</p>
                <p className={classes.ItemPrice}>${props.wish.price}</p>
            </div>
        </div>
        </React.Fragment>
    )
}

export default wishListItem;