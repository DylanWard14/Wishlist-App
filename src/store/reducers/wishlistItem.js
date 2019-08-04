import * as actionTypes from '../actions/actionTypes';

const initialState = {
    wishlist: [],
    selectedItem: null
}

export const wishListItemReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_WISHLIST:
            console.log('setting wishlist', action)
            return {
                ...state,
                wishlist: action.wishlist
            }
        case actionTypes.FETCH_WISHLIST_FAILED:
            console.log('failed to get wishlist')
            return {
                ...state,
                error: true
            }
        case actionTypes.SELECT_ITEM:
            console.log(action.item)
            return {
                ...state,
                selectedItem: action.item
            }
        default:
            return state;
    }
    return state;
}