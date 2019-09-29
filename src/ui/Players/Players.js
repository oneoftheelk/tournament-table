import React, { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addPlayer } from '../../redux/playersReducer';
import Player from './Player/Player';
import AddPlayerForm from './AddPlayerForm/AddPlayerForm';

const Players = (props) => {
    const [isFormDisplayed, toggleFormDisplay] = useState(false);
    const [filterValue, changeFilterValue] = useState('');

    const filteredPlayers = props.players.filter( player => {
        return player.name.toLowerCase().includes(filterValue, 0)
    })

    const playersElements = filteredPlayers.map( player => {
        return <Player
            key={player.id}
            id={player.id}
            name={player.name}
            rating={player.rating}
            selected={player.selected} />
    })

    const toggleForm = () => {
        if (isFormDisplayed) {
            toggleFormDisplay(false);
        } else {
            toggleFormDisplay(true);
        }
    }

    const changeFilter = (event) => {
        changeFilterValue(event.currentTarget.value);
    }

    return (
        <>
            <input value={filterValue} onChange={changeFilter} placeholder={'name'} />
            { playersElements }
            <button onClick={toggleForm}>{'Add player'}</button>
            { isFormDisplayed
                && <AddPlayerForm toggleForm={toggleForm}
                    addPlayer={props.addPlayer} /> }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        players: state.players.players,
    }
}

export default compose(
    connect(mapStateToProps, {addPlayer})
)(Players);