import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';
import * as ACTION_TYPES from './actionTypes';

export const updateStatesData = (state = {}, action) => {
    switch (action.type) {
        case ACTION_TYPES.UPDATE_DATA:
            return {...state, data : action.payload.data};
        default:
            return state;
    }
}

export const updateSelectedStateData = (selectedState = {}, action) => {
    switch(action.type) {
        case ACTION_TYPES.ADD_SELECTED_STATE:
            return action.payload.data;
        default:
            return selectedState;
    }
}

export const updateTotalVaccinationData = (totalVaccinated = "0", action) => {
    switch(action.type) {
        case ACTION_TYPES.UPDATE_VACCINATION_DATA:
            return action.payload.data;
        default:
            return totalVaccinated;
    }
}