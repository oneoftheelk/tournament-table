import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import playersReducer from './playersReducer';
import tableReducer from './tableReducer';

const ADD_PLAYER_SUCCESS = 'tournament-table/formReducer/ACCOUNT_SAVE_SUCCESS';

let reducers = combineReducers({
    players: playersReducer,
    table: tableReducer,
    form: formReducer.plugin({
        addPlayer: (state, action) => {
            switch (action.type) {
                case ADD_PLAYER_SUCCESS:
                    return undefined;
                default:
                    return state;
            }
        }
    })
});

let store = createStore(
    reducers,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const clearNewPlayerForm = () => ({ type: ADD_PLAYER_SUCCESS });

export default store;