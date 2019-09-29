import { createStore, combineReducers } from 'redux';
import playersReducer from './playersReducer';
import tableReducer from './tableReducer';

let reducers = combineReducers({
    players: playersReducer,
    table: tableReducer
});

let store = createStore(
    reducers,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;