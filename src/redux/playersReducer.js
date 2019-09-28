const ADD_PLAYER = 'tournament-table/playersReducer/ADD_PLAYER';

const initialState = {
    players: [
        {id: 1, name: 'player 1', rating: 100},
        {id: 2, name: 'player 2', rating: 110},
        {id: 3, name: 'player 3', rating: 120}
    ]
}

const playersReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PLAYER: {
            return {
                ...state,
                players: [...state.players, action.newPlayer]
            }
        }

        default: {
            return state;
        }
    }
}

export const addPlayer = (newPlayer) => ({ type: ADD_PLAYER, newPlayer });

export default playersReducer;