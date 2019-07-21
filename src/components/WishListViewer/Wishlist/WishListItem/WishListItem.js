import React from 'react';
import classes from './WishListItem.css';

const wishListItem = (props) => {
    return (
        <React.Fragment>
        <div className={classes.Item} onClick={() => props.clicked(props.itemName, props.price, props.image, props.URL)}>
            <div className={classes.ItemDetails}>
                <img src={props.image} alt="No images"/>
                <p className={classes.ItemName}>{props.itemName}</p>
                <p className={classes.ItemPrice}>${props.price}</p>
                
            </div>
            {/* <hr className={classes.Line}/> */}
        </div>
        </React.Fragment>
    )
}

export default wishListItem;