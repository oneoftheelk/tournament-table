import { createStore, combineReducers } from 'redux';
import playersReducer from './playersReducer';

let reducers = combineReducers({
    players: playersReducer
});

let store = createStore(reducers);

export default store;