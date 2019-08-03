import * as actionTypes from './actionTypes';
import axios from 'axios';

export const initWishlist = () => {
    // console.log('init wishlist')
    return dispatch => {
        axios.get('https://wishify-bd917.firebaseio.com/Wishes.json')
            .then((response) => {
                const fetchedWishlist = [];
                for (let key in response.data) {
                    fetchedWishlist.push({...response.data[key],
                    id: key
                });
                }
                dispatch(setWishlist(fetchedWishlist))
            }).catch((error) => {
                dispatch(fetchWishlistFailed);
            })
    }
}

export const setWishlist = (wishlist) => {
    return {
        type: actionTypes.SET_WISHLIST,
        wishlist: wishlist
    }
}

export const fetchWishlistFailed = () => {
    return {
        type: actionTypes.FETCH_WISHLIST_FAILED
    }
}

export const selectItem = (item) => {
    return {
        type: actionTypes.SELECT_ITEM,
        item: item
    }
}