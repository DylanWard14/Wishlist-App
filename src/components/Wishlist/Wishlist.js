import React, {Component} from 'react';
import WishListItem from './WishListItem/WishListItem';
import classes from './Wishlist.css';

class Wishlist extends Component {
    render () {
        let items = [];
        for (var i = 0; i < 10; i++)
        {
            items.push(<WishListItem key={i} itemName={'item' + i} price="10.00"/>)
        }
        if (!items)
        {
            items = <p>Please add items to your wish list!</p>
        }
        return (
            <div className={classes.Wishlist}>
                {items}
            </div>
        )
    }
}

export default Wishlist;