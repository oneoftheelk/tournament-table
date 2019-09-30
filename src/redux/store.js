import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import playersReducer from './playersReducer';
import tableReducer from './tableReducer';

const CLEAR_FORM = 'tournament-table/formReducer/CLEAR_FORM';

let reducers = combineReducers({
    players: playersReducer,
    table: tableReducer,
    form: formReducer.plugin({
        addPlayer: (state, action) => {
            switch (action.type) {
                case CLEAR_FORM:
                    return undefined;
                default:
                    return state;
            }
        },
        matchResults: (state, action) => {
            switch (action.type) {
                case CLEAR_FORM:
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

export const clearForm = () => ({ type: CLEAR_FORM });

export default store;