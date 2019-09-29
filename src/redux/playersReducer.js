const ADD_PLAYER = 'tournament-table/playersReducer/ADD_PLAYER';
const SELECT_PLAYER = 'tournament-table/playersReducer/SELECT_PLAYER';
const ADD_PLAYER_TO_SELECTION = 'tournament-table/playersReducer/ADD_PLAYER_TO_SELECTION';
const REMOVE_PLAYER_FROM_SELECTION = 'tournament-table/playersReducer/REMOVE_PLAYER_FROM_SELECTION';

const initialState = {
    players: [
        {id: 1, name: 'Raman Tamilin', rating: 100, selected: false},
        {id: 2, name: 'Alina Dubenok', rating: 110, selected: false},
        {id: 3, name: 'Avery Reid', rating: 120, selected: false},
        {id: 4, name: 'Jamie Edwards', rating: 130, selected: false},
        {id: 5, name: 'Kaia Leon', rating: 140, selected: false},
        {id: 6, name: 'Jack Davies', rating: 150, selected: false},
        {id: 7, name: 'Jude Law', rating: 160, selected: false},
        {id: 8, name: 'Dale Cooper', rating: 170, selected: false},
        {id: 9, name: 'Daniella Floyd', rating: 180, selected: false},
        {id: 10, name: 'Jack Brady', rating: 190, selected: false}
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
                })
            }
        }
        case ADD_PLAYER_TO_SELECTION: {
            return {
                ...state,
                selectedPlayersId: [...state.selectedPlayersId, action.playerId]
            }
        }
        case REMOVE_PLAYER_FROM_SELECTION: {
            return {
                ...state,
                selectedPlayersId: state.selectedPlayersId.filter( id => {
                    return id !== action.playerId
                })
            }
        }
        default: {
            return state;
        }
    }
}

export const addPlayer = (newPlayer) => ({ type: ADD_PLAYER, newPlayer });
export const togglePlayerSelection = (playerId) => ({ type: SELECT_PLAYER, playerId });
export const addPlayerToSelection = (playerId) => ({ type: ADD_PLAYER_TO_SELECTION, playerId });
export const removePlayerFromSelection = (playerId) => ({ type: REMOVE_PLAYER_FROM_SELECTION, playerId });

export default playersReducer;