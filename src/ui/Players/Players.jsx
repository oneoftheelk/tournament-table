import React, { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addPlayer, removeAllPlayersFromSelection } from '../../redux/playersReducer';
import { formTable } from '../../redux/tableReducer';
import { clearForm } from '../../redux/store';
import style from './Players.module.scss';
import Player from './Player/Player';
import { AddPlayerFormContainer } from './AddPlayerForm/AddPlayerForm';
import { Filter } from '../common/Filter/Filter';

const Players = React.memo((props) => {
    return (
        <div className={style.players}>
            {props.playersElements}
        </div>
    )
});

const PlayersContainer = React.memo((props) => {
    debugger
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
        if (props.selectedPlayers.length === 8) {
            const playersForTable = props.selectedPlayers
                .map( player => player )
                .sort( (player1, player2) => {
                    return player1.rating < player2.rating ? 1 : -1
                });

            const selectedIds = [];
            playersForTable.forEach( player => {
                selectedIds.push({id: player.id, increment: 0});
            })

            props.formTable(playersForTable, selectedIds);
            props.removeAllPlayersFromSelection();
        } else {
            console.log('Please add select exactly 8 players');
        }
    }

    return (
        <>
            <Filter filterValue={filterValue} changeFilter={changeFilter} clearFilter={clearFilter} />
            <Players playersElements={playersElements}/>
            <button onClick={toggleAddPlayerForm}>{'Add player'}</button>
            { isFormDisplayed
                && <AddPlayerFormContainer toggleAddPlayerForm={toggleAddPlayerForm}
                    addPlayer={props.addPlayer}
                    clearForm={props.clearForm} /> }
            <button onClick={formTable}>Form a table</button>
        </>
    )
});

const mapStateToProps = (state) => {
    return {
        players: state.players.players,
        selectedPlayers: state.players.selectedPlayers
    }
}

export const ComposedPlayers = compose(
    connect(mapStateToProps,
        {addPlayer, formTable, removeAllPlayersFromSelection, clearForm}
))(PlayersContainer);