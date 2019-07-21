import React, {Component} from 'react';
import WishListItem from './WishListItem/WishListItem';
import classes from './Wishlist.css';

export class Wishlist extends Component {
    state = {
        wishlist: [
            {
                name: 'Chair',
                price: '10.00',
                image: ''
            },
            {
                name: 'Table',
                price: '100.00',
                image: ''
            },
            {
                name: 'mouse',
                price: '99.00',
                image: ''
            },
        ]
    }

    render () {
        let items = [];
        for (let wish in this.state.wishlist)
        {
            const wishlist = this.state.wishlist;
            items.push(<WishListItem key={wish} itemName={wishlist[wish].name} price={wishlist[wish].price} clicked={this.props.clicked}/>)
        }

        if (items.length == 0)
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