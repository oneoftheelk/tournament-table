import React, { useState, useRef } from 'react';
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
import { TooltipComponent } from '../common/Tooltip/TooltipComponent';

const Players = React.memo((props) => {
    return (
        <div className={style.players}>
            {props.playersElements}
        </div>
    )
});

const PlayersContainer = React.memo((props) => {
    const [isFormDisplayed, toggleFormDisplay] = useState(false);
    const [filterValue, changeFilterValue] = useState('');

    const toggleAddPlayerForm = () => {
        if (isFormDisplayed) {
            toggleFormDisplay(false);
        } else {
            toggleFormDisplay(true);
        }
    }

    const [show, setShow] = useState(false);
    const [tooltipText, changeTooltipText] = useState('');
    const target = useRef(null);

    const togglePlayerSelection = (player) => {
        if (player.selected) {
            props.removePlayerFromSelection(player);
            props.togglePlayerSelection(player.id);
        } else if (props.selectedPlayers.length < 8) {
            props.addPlayerToSelection(player);
            props.togglePlayerSelection(player.id);
        } else {
            changeTooltipText('You can\'t add more than 8 players');
            setShow(true);
        }
    }

    const filteredPlayers = props.players
        .filter( player => player.name.toLowerCase().includes(filterValue, 0))
        .sort( (player1, player2) => player1.rating < player2.rating ? 1 : -1);

    const playersElements = filteredPlayers.map( player => {
        const classForSelected = player.selected ? style.selected : '';

        return (
            <ListGroup.Item key={player.id} onClick={() => togglePlayerSelection(player)}
                className={`${classForSelected} ${style.player}`} >
                <Player player={player} />
            </ListGroup.Item>
        )
    })

    const changeFilter = (event) => {
        changeFilterValue(event.currentTarget.value);
    }

    const clearFilter = () => {
        changeFilterValue('');
    }

    const formTable = () => {
        if (props.isTableFormed) {
            changeTooltipText('Table has already been formed!');
            setShow(true);
        } else {
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
                changeTooltipText('You should add exactly 8 players');
                setShow(true);
            }
        }
    }

    return (
        <div className={style.playersContainer}>
            <h3 className={style.title}>Select players</h3>
            <Filter filterValue={filterValue} changeFilter={changeFilter} clearFilter={clearFilter} />
            <Players playersElements={playersElements}/>
            { !isFormDisplayed 
                ? <>
                    <Button variant='outline-success' onClick={toggleAddPlayerForm}>Add new player</Button>
                    <Button variant='outline-success' ref={target} onClick={formTable}>Form a table</Button>
                 </>
                 : <AddPlayerFormContainer toggleAddPlayerForm={toggleAddPlayerForm}
                        addPlayer={props.addPlayer} clearForm={props.clearForm} /> }
            <TooltipComponent target={target} tooltipText={tooltipText} show={show} setShow={setShow} />
        </div>
    )
});

const mapStateToProps = (state) => {
    return {
        players: state.players.players,
        selectedPlayers: state.players.selectedPlayers,
        isTableFormed: state.table.isTableFormed
    }
}

export const ComposedPlayers = compose(
    connect(mapStateToProps,
        {togglePlayerSelection, addPlayerToSelection, removePlayerFromSelection,
            addPlayer, formTable, removeAllPlayersFromSelection, clearForm}
))(PlayersContainer);