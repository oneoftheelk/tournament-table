import React from 'react';
import { connect } from 'react-redux';
import Player from './Player';

const Players = (props) => {
    const playersElements = props.players.map( player => {
        return <Player
            id={player.id}
            name={player.name}
            rating={player.rating} />
    })

    return (
        <>
            { playersElements }
            <button>{'Add player'}</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        players: state.players
    }
}

const PlayersContainer = connect(mapStateToProps, {})(Players);

export default PlayersContainer;