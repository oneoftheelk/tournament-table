const ADD_PLAYER = 'tournament-table/playersReducer/ADD_PLAYER';

const initialState = [
    {id: 1, name: 'player 1', rating: 100},
    {id: 2, name: 'player 2', rating: 110},
    {id: 3, name: 'player 3', rating: 120}
]

const playersReducer = (state = initialState, action) => {
    switch(action.type) {


        default: {
            return state;
        }
    }
}

const addPlayer = () => ({

})

export default playersReducer;