import React from 'react';
import classes from './WishListItem.css';
import {connect} from 'react-redux';
import * as wishlistActions from '../../../../store/actions/wishListItem';

const wishListItem = (props) => {
    let divClasses = [];
    if (props.wish.purchased) {
        divClasses.push(classes.Purchased)
    }
    if (props.wish === props.selectedItem) {
        divClasses.push(classes.Selected)
    }
    return (
        <React.Fragment>
        <div 
            className={divClasses.join(' ')} 
            onClick={(item) => props.onSelectItem(props.wish)}
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

const mapStateToProps = (state) => {
    return {
        selectedItem: state.wishListItemReducer.selectedItem
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSelectItem: (item) => dispatch(wishlistActions.selectItem(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(wishListItem);