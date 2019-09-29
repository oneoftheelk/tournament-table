import { createStore, combineReducers } from 'redux';
import playersReducer from './playersReducer';

let reducers = combineReducers({
    players: playersReducer,
});

let store = createStore(
    reducers,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;