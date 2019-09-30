const FORM_TABLE = 'tournament-table/tableReducer/FORM_TABLE';
const ADD_QUARTERFINAL_RESULT = 'tournament-table/tableReducer/ADD_QUARTERFINAL_RESULT';

const initialState = {
    matchesQuarterfinals: [
        {id: 1, firstPlayer: {name: 'to be announced'}, secondPlayer: {name: 'to be announced'},
            firstPlayerScore: 0, secondPlayerScore: 0},
        {id: 2, firstPlayer: {name: 'to be announced'}, secondPlayer: {name: 'to be announced'},
            firstPlayerScore: 0, secondPlayerScore: 0},
        {id: 3, firstPlayer: {name: 'to be announced'}, secondPlayer: {name: 'to be announced'},
            firstPlayerScore: 0, secondPlayerScore: 0},
        {id: 4, firstPlayer: {name: 'to be announced'}, secondPlayer: {name: 'to be announced'},
            firstPlayerScore: 0, secondPlayerScore: 0}
    ],
    matchesSemifinals: [
        {id: 1, firstPlayer: {name: 'to be announced'}, secondPlayer: {name: 'to be announced'},
            firstPlayerScore: 0, secondPlayerScore: 0},
        {id: 2, firstPlayer: {name: 'to be announced'}, secondPlayer: {name: 'to be announced'},
            firstPlayerScore: 0, secondPlayerScore: 0}
    ],
    matchesFinals: [
        {id: 1, firstPlayer: {name: 'to be announced'}, secondPlayer: {name: 'to be announced'},
            firstPlayerScore: 0, secondPlayerScore: 0}
    ]
}

const tableReducer = (state = initialState, action) => {
    switch(action.type) {
        case FORM_TABLE:
            return {
                ...state,
                matchesQuarterfinals: [
                    {id: 1, firstPlayer: action.players[0], secondPlayer: action.players[7],
                        firstPlayerScore: 0, secondPlayerScore: 0},
                    {id: 2, firstPlayer: action.players[3], secondPlayer: action.players[4],
                        firstPlayerScore: 0, secondPlayerScore: 0},
                    {id: 3, firstPlayer: action.players[2], secondPlayer: action.players[5],
                        firstPlayerScore: 0, secondPlayerScore: 0},
                    {id: 4, firstPlayer: action.players[1], secondPlayer: action.players[6],
                        firstPlayerScore: 0, secondPlayerScore: 0}
                ]
            }
        case ADD_QUARTERFINAL_RESULT:
            return {
                ...state,
                matchesSemifinals: state.matchesSemifinals.map( match => {
                    if (match.id === 1 && (action.id === 1 || action.id === 2)) {
                        if (action.position === 'top') {
                            return {
                                ...match,
                                firstPlayer: {...action.player}
                            }
                        } else {
                            return {
                                ...match,
                                secondPlayer: {...action.player}
                            }
                        };
                    }
                    if (match.id === 2 && (action.id === 3 || action.id === 4)) {
                        if (action.position === 'top') {
                            return {
                                ...match,
                                firstPlayer: {...action.player}
                            }
                        } else {
                            return {
                                ...match,
                                secondPlayer: {...action.player}
                            }
                        };
                    }
                    return match;
                })
            }
        default: return state;
    }
}

export const formTable = (players) => ({ type: FORM_TABLE, players });
export const addQuarterfinalResult = (id, player, position) => ({ type: ADD_QUARTERFINAL_RESULT, id, player, position });

export default tableReducer;