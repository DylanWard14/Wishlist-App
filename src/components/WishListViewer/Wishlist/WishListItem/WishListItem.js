import React from 'react';
import chair from '../../../../assets/images/ChairTest.jpg';
import classes from './WishListItem.css';

const wishListItem = (props) => {
    return (
        <React.Fragment>
        <div className={classes.Item} onClick={() => props.clicked(props.itemName, props.price, chair)}>
            <div className={classes.ItemDetails}>
                <img src={chair} alt="No images"/>
                <p className={classes.ItemName}>{props.itemName}</p>
                <p className={classes.ItemPrice}>${props.price}</p>
                
            </div>
            {/* <hr className={classes.Line}/> */}
        </div>
        </React.Fragment>
    )
}

export default wishListItem;