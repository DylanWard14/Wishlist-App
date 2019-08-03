import * as actionTypes from '../actions/actionTypes';

export const userReducer = (state = {
    name: "Dylan",
    age: 23
}, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_USERNAME:
            state = {
                ...state,
                name: action.payload
            }
            break;
        default:
            return state;
    }
    return state;
}