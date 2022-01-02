import * as ACTION_TYPES from './actionTypes';

export const fetchDataThunk = () => async (dispatch) => {
    fetch('http://192.168.1.7:3300/', {mode : 'cors', method : 'GET'}).then(res => {
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

export const fetchVaccinationDataThunk = () => async (dispatch) => {
    fetch('http://192.168.1.7:3300/vaccinated', {mode : 'cors', method : 'GET'}).then(res => {
        if (res.ok) {
            res.json().then(data => dispatch(updateVaccinationData(data['totalVaccinated']))).catch(err => console.log(err));
        } else {
            dispatch(updateVaccinationData("0"));
            console.log('Server error');
        }
    }).catch(err => {
        console.log(err);
        dispatch(updateVaccinationData("0"));
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

export const updateSelectedState = (data) => {
    return {
        type : ACTION_TYPES.ADD_SELECTED_STATE,
        payload : {
            data : data
        }
    };
}

export const updateVaccinationData = (data) => {
    return {
        type : ACTION_TYPES.UPDATE_VACCINATION_DATA,
        payload : {
            data : data
        }
    };
}