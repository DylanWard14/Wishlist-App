import * as actionTypes from './actionTypes';

export const add = (value) => {
    return {
        type: actionTypes.ADD,
        payload: value
    }
}