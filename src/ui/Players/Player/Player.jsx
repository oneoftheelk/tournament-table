import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { togglePlayerSelection, addPlayerToSelection, removePlayerFromSelection } from '../../../redux/playersReducer';
import style from './Player.module.scss';

const Player = React.memo((props) => {
    const {id, name, rating, classForSelected} = props;

    const togglePlayerSelection = () => {
        const player = {id, name, rating};
        props.togglePlayerSelection(player)
    }

    return (
        <div onClick={togglePlayerSelection}>
            <span className={classForSelected}>{`${id} - ${name} (${rating})`}</span>
        </div>
    )
});

const PlayerContainer = (props) => {
    const {id, name, rating, selected} = props.player;
    const classForSelected = selected ? style.selected : '';

    const togglePlayerSelection = (player) => {
        if (selected) {
            props.removePlayerFromSelection(player);
            props.togglePlayerSelection(player.id);
        } else if (props.selectedPlayers.length < 8) {
            props.addPlayerToSelection(player);
            props.togglePlayerSelection(player.id);
        } else {
            console.log('You cant add more than 8 players');
        }
    }

    return (
        <Player id={id} name={name} rating={rating} classForSelected={classForSelected}
            togglePlayerSelection={togglePlayerSelection}/>
    )
};

const mapStateToProps = (state) => {
    return {
        selectedPlayers: state.players.selectedPlayers
    }
}

export default compose(
    connect(mapStateToProps,
        {togglePlayerSelection, addPlayerToSelection, removePlayerFromSelection})
)(PlayerContainer);