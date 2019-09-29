const ADD_PLAYER = 'tournament-table/playersReducer/ADD_PLAYER';
const SELECT_PLAYER = 'tournament-table/playersReducer/SELECT_PLAYER';
const ADD_PLAYER_TO_SELECTION = 'tournament-table/playersReducer/ADD_PLAYER_TO_SELECTION';
const REMOVE_PLAYER_FROM_SELECTION = 'tournament-table/playersReducer/REMOVE_PLAYER_FROM_SELECTION';
const REMOVE_ALL_PLAYERS_FROM_SELECTION = 'tournament-table/playersReducer/REMOVE_ALL_PLAYERS_FROM_SELECTION';

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
                    if (player.id === action.id) {
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
                selectedPlayersId: [...state.selectedPlayersId, action.player]
            }
        }
        case REMOVE_PLAYER_FROM_SELECTION: {
            return {
                ...state,
                selectedPlayersId: state.selectedPlayersId.filter( player => {
                    return player.id !== action.player.id
                })
            }
        }
        case REMOVE_ALL_PLAYERS_FROM_SELECTION: {
            return {
                ...state,
                players: state.players.map( player => {
                    return {
                        ...player,
                        selected: false
                    }
                }),
                selectedPlayersId: [],
            }
        }
        default: {
            return state;
        }
    }
}

export const addPlayer = (newPlayer) => ({ type: ADD_PLAYER, newPlayer });
export const togglePlayerSelection = (id) => ({ type: SELECT_PLAYER, id });
export const addPlayerToSelection = (player) => ({ type: ADD_PLAYER_TO_SELECTION, player });
export const removePlayerFromSelection = (player) => ({ type: REMOVE_PLAYER_FROM_SELECTION, player });
export const removeAllPlayersFromSelection = () => ({ type: REMOVE_ALL_PLAYERS_FROM_SELECTION });

export default playersReducer;