import React, {Component} from 'react';
import WishListItem from './WishListItem/WishListItem';
import classes from './Wishlist.css';

export class Wishlist extends Component {
    render () {
        let items = [];
        for (let wish in this.props.wishlist)
        {
            const wishlist = this.props.wishlist;
            items.push(<WishListItem key={wish} itemName={wishlist[wish].name} price={wishlist[wish].price} image={wishlist[wish].image} URL={wishlist[wish].URL} clicked={this.props.clicked}/>)
        }

        if (items.length === 0)
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