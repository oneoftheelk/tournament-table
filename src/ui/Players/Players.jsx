import React, { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addPlayer, removeAllPlayersFromSelection,
    togglePlayerSelection, addPlayerToSelection, removePlayerFromSelection } from '../../redux/playersReducer';
import { formTable } from '../../redux/tableReducer';
import { clearForm } from '../../redux/store';
import style from './Players.module.scss';
import { Player } from './Player/Player';
import { AddPlayerFormContainer } from './AddPlayerForm/AddPlayerForm';
import { Filter } from '../common/Filter/Filter';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const Players = React.memo((props) => {
    return (
        <div className={style.players}>
            {props.playersElements}
        </div>
    )
});

const PlayersContainer = React.memo((props) => {
    const togglePlayerSelection = (player) => {
        if (player.selected) {
            props.removePlayerFromSelection(player);
            props.togglePlayerSelection(player.id);
        } else if (props.selectedPlayers.length < 8) {
            props.addPlayerToSelection(player);
            props.togglePlayerSelection(player.id);
        } else {
            console.log('You cant add more than 8 players');
        }
    }

    const [isFormDisplayed, toggleFormDisplay] = useState(false);
    const [filterValue, changeFilterValue] = useState('');

    const filteredPlayers = props.players
        .filter( player => player.name.toLowerCase().includes(filterValue, 0))
        .sort( (player1, player2) => player1.rating < player2.rating ? 1 : -1);

    const playersElements = filteredPlayers.map( player => {
        const classForSelected = player.selected ? style.selected : '';

        return (
            <ListGroup.Item onClick={() => togglePlayerSelection(player)}
                className={`${classForSelected} ${style.player}`} >
                <Player key={player.id} player={player} />
            </ListGroup.Item>
        )
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
        <div className={style.playersContainer}>
            <h3 className={style.title}>Select players</h3>
            <Filter filterValue={filterValue} changeFilter={changeFilter} clearFilter={clearFilter} />
            <Players playersElements={playersElements}/>
            { !isFormDisplayed && (
                <> <Button variant='outline-success' onClick={toggleAddPlayerForm}>Add new player</Button>
                <Button variant='outline-success' onClick={formTable}>Form a table</Button> </>
            )}
            { isFormDisplayed
                && <AddPlayerFormContainer toggleAddPlayerForm={toggleAddPlayerForm}
                    addPlayer={props.addPlayer} clearForm={props.clearForm} /> }
        </div>
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
        {togglePlayerSelection, addPlayerToSelection, removePlayerFromSelection,
            addPlayer, formTable, removeAllPlayersFromSelection, clearForm}
))(PlayersContainer);