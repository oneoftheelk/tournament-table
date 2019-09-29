import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { togglePlayerSelection, addPlayerToSelection, removePlayerFromSelection } from '../../../redux/playersReducer';
import style from './Player.module.scss';

const Player = (props) => {
    const {id, name, rating, selected} = props;
    const classForSelected = selected ? style.selected : '';

    const togglePlayerSelection = () => {
        if (selected) {
            props.removePlayerFromSelection(id);
            props.togglePlayerSelection(id);
        } else if (props.selectedPlayersId.length < 8) {
            props.addPlayerToSelection(id);
            props.togglePlayerSelection(id);
        } else {
            console.log('You cant add more than 8 players');
        }
    }

    return (
        <div onClick={togglePlayerSelection}>
            <span className={classForSelected}>{`${id} - ${name} (${rating})`}</span>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        selectedPlayersId: state.players.selectedPlayersId
    }
}

export default compose(
    connect(mapStateToProps,
        {togglePlayerSelection, addPlayerToSelection, removePlayerFromSelection})
)(Player);