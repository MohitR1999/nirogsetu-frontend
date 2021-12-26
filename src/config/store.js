import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { updateStatesData } from './reducers';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    statesData : updateStatesData
})

const composeEnahncers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = () => {
    return createStore(
        rootReducer,
        composeEnahncers(
            applyMiddleware(thunk)
        )
    );
}