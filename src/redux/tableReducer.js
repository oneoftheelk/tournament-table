const FORM_TABLE = 'tournament-table/tableReducer/FORM_TABLE';
const ADD_QUARTERFINALS_RESULT = 'tournament-table/tableReducer/ADD_QUARTERFINALS_RESULT';
const ADD_SEMIFINALS_RESULT = 'tournament-table/tableReducer/ADD_SEMIFINALS_RESULT';
const ADD_FINALS_RESULT = 'tournament-table/tableReducer/ADD_FINALS_RESULT';
const FILL_QUARTERFINALS_SCORE = 'tournament-table/tableReducer/FILL_QUARTERFINALS_SCORE';
const FILL_SEMIFINALS_SCORE = 'tournament-table/tableReducer/FILL_SEMIFINALS_SCORE';
const FILL_FINALS_SCORE = 'tournament-table/tableReducer/FILL_FINALS_SCORE';
const CHANGE_RATING = 'tournament-table/tableReducer/CHANGE_RATING';

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
        {id: 5, firstPlayer: {name: 'to be announced'}, secondPlayer: {name: 'to be announced'},
            firstPlayerScore: 0, secondPlayerScore: 0},
        {id: 6, firstPlayer: {name: 'to be announced'}, secondPlayer: {name: 'to be announced'},
            firstPlayerScore: 0, secondPlayerScore: 0}
    ],
    matchesFinals: [
        {id: 7, firstPlayer: {name: 'to be announced'}, secondPlayer: {name: 'to be announced'},
            firstPlayerScore: 0, secondPlayerScore: 0}
    ],
    ratingIncrement: [
        {id: 1, increment: 0},
        {id: 2, increment: 0},
        {id: 3, increment: 0},
        {id: 4, increment: 0},
        {id: 5, increment: 0},
        {id: 6, increment: 0},
        {id: 7, increment: 0},
        {id: 8, increment: 0},
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
                ],
                matchesSemifinals: [
                    {id: 5, firstPlayer: {name: 'to be announced'}, secondPlayer: {name: 'to be announced'},
                        firstPlayerScore: 0, secondPlayerScore: 0},
                    {id: 6, firstPlayer: {name: 'to be announced'}, secondPlayer: {name: 'to be announced'},
                        firstPlayerScore: 0, secondPlayerScore: 0}
                ],
                matchesFinals: [
                    {id: 7, firstPlayer: {name: 'to be announced'}, secondPlayer: {name: 'to be announced'},
                        firstPlayerScore: 0, secondPlayerScore: 0}
                ]
            }
        case ADD_QUARTERFINALS_RESULT:
            return {
                ...state,
                matchesSemifinals: state.matchesSemifinals.map( match => {
                    if (match.id === 5 && (action.id === 1 || action.id === 2)) {
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
                    if (match.id === 6 && (action.id === 3 || action.id === 4)) {
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
        case ADD_SEMIFINALS_RESULT:
            return {
                ...state,
                matchesFinals: state.matchesFinals.map(match => {
                    if (action.position === 'top') {
                        return {
                            ...match,
                            firstPlayer: { ...action.player }
                        }
                    } else {
                        return {
                            ...match,
                            secondPlayer: { ...action.player }
                        }
                    };
                })
            }
        case FILL_QUARTERFINALS_SCORE:
            return {
                ...state,
                matchesQuarterfinals: state.matchesQuarterfinals.map (match => {
                    if(match.id === action.id) {
                        return {
                            ...match,
                            firstPlayerScore: action.firstPlayerScore,
                            secondPlayerScore: action.secondPlayerScore
                        }
                    }
                    return match;
                })
            }
        case FILL_SEMIFINALS_SCORE:
            return {
                ...state,
                matchesSemifinals: state.matchesSemifinals.map(match => {
                    if (match.id === action.id) {
                        return {
                            ...match,
                            firstPlayerScore: action.firstPlayerScore,
                            secondPlayerScore: action.secondPlayerScore
                        }
                    }
                    return match;
                })
            }
        case FILL_FINALS_SCORE:
            return {
                ...state,
                matchesFinals: state.matchesFinals.map(match => {
                    return {
                        ...match,
                        firstPlayerScore: action.firstPlayerScore,
                        secondPlayerScore: action.secondPlayerScore
                    }
                })
            }
        case CHANGE_RATING:
            console.log(action)
            debugger
            return {
                ...state,
                ratingIncrement: state.ratingIncrement.map( player => {
                    if (player.id === action.id1) {
                        return {
                            ...player,
                            increment: action.firstPlayer
                        }
                    } else if (player.id === action.id2) {
                        return {
                            ...player,
                            increment: action.secondPlayer
                        }
                    } else {
                        return player
                    }
                })
            }
        default: return state;
    }
}

export const formTable = (players) => (
    { type: FORM_TABLE, players });
export const addQuarterfinalsResult = (id, player, position) => (
    { type: ADD_QUARTERFINALS_RESULT, id, player, position });
export const addSemifinalsResult = (id, player, position) => (
    { type: ADD_SEMIFINALS_RESULT, id, player, position });
export const addFinalsResult = (id, player, position) => (
    { type: ADD_FINALS_RESULT, id, player, position });
export const fillQuarterfinalsScore = (id, firstPlayerScore, secondPlayerScore) => (
    { type: FILL_QUARTERFINALS_SCORE, id, firstPlayerScore, secondPlayerScore });
export const fillSemifinalsScore = (id, firstPlayerScore, secondPlayerScore) => (
    { type: FILL_SEMIFINALS_SCORE, id, firstPlayerScore, secondPlayerScore });
export const fillFinalsScore = (id, firstPlayerScore, secondPlayerScore) => (
    { type: FILL_FINALS_SCORE, id, firstPlayerScore, secondPlayerScore });
export const changeRating = (id1, id2, firstPlayer, secondPlayer) => (
    { type: CHANGE_RATING, id1, id2, firstPlayer, secondPlayer });

export default tableReducer;