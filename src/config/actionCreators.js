import * as ACTION_TYPES from './actionTypes';

export const fetchDataThunk = () => async (dispatch) => {
    fetch('http://localhost:3000/', {mode : 'cors'}).then(res => {
        if (res.ok) {
            res.json().then(data => dispatch(updateData(data))).catch(err => console.log(err));
        } else {
            dispatch(updateData([]));
            console.log('Server error');
        }
    }).catch(err => {
        console.log(err);
        dispatch(updateData([]));
    }); 
}

export const updateData = (data) => {
    return {
        type : ACTION_TYPES.UPDATE_DATA,
        payload : {
            data : data
        }
    };
}