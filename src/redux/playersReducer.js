const ADD_PLAYER = 'tournament-table/playersReducer/ADD_PLAYER';
const SELECT_PLAYER = 'tournament-table/playersReducer/SELECT_PLAYER';

const initialState = {
    players: [
        {id: 1, name: 'Raman Tamilin', rating: 100, selected: false},
        {id: 2, name: 'Alina Dubenok', rating: 110, selected: false},
        {id: 3, name: 'Jack Brady', rating: 120, selected: false}
    ],
    selectedPlayersId: []
}

const playersReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PLAYER: {
            return {
                ...state,
                players: [...state.players, action.newPlayer]
            }
        }
        case SELECT_PLAYER: {
            return {
                ...state,
                players: state.players.map( player => {
                    if (player.id === action.playerId) {
                        return {
                            ...player,
                            selected: !player.selected
                        }
                    } else {
                        return player
                    }
                }),
                selectPlayersId: [...state.selectedPlayersId, action.playerId ]
            }
        }

        default: {
            return state;
        }
    }
}

export const addPlayer = (newPlayer) => ({ type: ADD_PLAYER, newPlayer });
export const togglePlayerSelection = (playerId) => ({ type: SELECT_PLAYER, playerId });

export default playersReducer;