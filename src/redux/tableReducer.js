const FORM_TABLE = 'tournament-table/tableReducer/FORM_TABLE';

const initialState = {
    matches: [ ]
}

const tableReducer = (state = initialState, action) => {
    switch(action.type) {
        case FORM_TABLE: {
            return {
                ...state,
                matches: [
                    {id: 1, firstPlayer: action.players[0], secondPlayer: action.players[7]},
                    {id: 2, firstPlayer: action.players[1], secondPlayer: action.players[6]},
                    {id: 3, firstPlayer: action.players[2], secondPlayer: action.players[5]},
                    {id: 4, firstPlayer: action.players[3], secondPlayer: action.players[4]}
                ]
            }
        }
        default: {
            return state;
        }
    }
}

export const formTable = (players) => ({ type: FORM_TABLE, players });

export default tableReducer;