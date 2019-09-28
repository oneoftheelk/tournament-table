import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPlayer } from './../redux/playersReducer';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

const Players = (props) => {
    const [isFormDisplayed, toggleFormDisplay] = useState(false);

    const playersElements = props.players.map( player => {
        return <Player
            key={player.id}
            id={player.id}
            name={player.name}
            rating={player.rating} />
    })

    const toggleForm = () => {
        if (isFormDisplayed) {
            toggleFormDisplay(false);
        } else {
            toggleFormDisplay(true);
        }
    }

    return (
        <>
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
        players: state.players.players
    }
}

const PlayersContainer = connect(mapStateToProps, {addPlayer})(Players);

export default PlayersContainer;