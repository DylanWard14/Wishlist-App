import * as actionTypes from './actionTypes';

export const updateName = (name) => {
    return {
        type: actionTypes.UPDATE_USERNAME,
        payload: name
    }
}