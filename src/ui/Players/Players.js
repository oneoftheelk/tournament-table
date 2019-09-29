import React, { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addPlayer, removeAllPlayersFromSelection } from '../../redux/playersReducer';
import { formTable } from './../../redux/tableReducer';
import { clearNewPlayerForm } from './../../redux/store';
import Player from './Player/Player';
import AddPlayerForm from './AddPlayerForm/AddPlayerForm';

const Players = (props) => {
    const [isFormDisplayed, toggleFormDisplay] = useState(false);
    const [filterValue, changeFilterValue] = useState('');

    const filteredPlayers = props.players.filter( player => {
        return player.name.toLowerCase().includes(filterValue, 0)
    })

    const playersElements = filteredPlayers.map( player => {
        return <Player key={player.id} player={player} />
    })

    const toggleAddPlayerForm = () => {
        if (isFormDisplayed) {
            toggleFormDisplay(false);
        } else {
            toggleFormDisplay(true);
        }
    }

    const changeFilter = (event) => {
        changeFilterValue(event.currentTarget.value);
    }

    const clearFilter = () => {
        changeFilterValue('');
    }

    const formTable = () => {
        if (props.selectedPlayersId.length === 8) {
            const playersForTable = props.selectedPlayersId
                .map( player => player )
                .sort( (player1, player2) => {
                    return player1.rating < player2.rating ? 1 : -1
                });
            props.formTable(playersForTable);
            props.removeAllPlayersFromSelection();
        } else {
            console.log('Please add select exactly 8 players');
        }
    }

    return (
        <>
            <input value={filterValue} onChange={changeFilter} placeholder={'name'} />
            <button onClick={clearFilter}>{'Clear filter'}</button>
            { playersElements }
            <button onClick={toggleAddPlayerForm}>{'Add player'}</button>
            { isFormDisplayed
                && <AddPlayerForm toggleAddPlayerForm={toggleAddPlayerForm}
                    addPlayer={props.addPlayer}
                    clearNewPlayerForm={props.clearNewPlayerForm} /> }
            <button onClick={formTable}>Form a table</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        players: state.players.players,
        selectedPlayersId: state.players.selectedPlayersId
    }
}

export default compose(
    connect(mapStateToProps,
        {addPlayer, formTable, removeAllPlayersFromSelection, clearNewPlayerForm}
))(Players);