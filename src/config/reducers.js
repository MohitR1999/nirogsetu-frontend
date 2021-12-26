import * as ACTION_TYPES from './actionTypes';

export const updateStatesData = (state = {}, action) => {
    switch (action.type) {
        case ACTION_TYPES.UPDATE_DATA:
            return {...state, data : action.payload.data};
        default:
            return state;
    }
}