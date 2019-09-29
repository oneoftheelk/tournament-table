import React from 'react';
import style from './player.module.scss';

const Player = (props) => {
    const {id, name, rating, selected} = props;

    const classForSelected = selected ? style.selected : '';

    const togglePlayerSelection = () => {
        props.togglePlayerSelection(id);
    }

    return (
        <div onClick={togglePlayerSelection}>
            <span className={classForSelected}>{`${id} - ${name} (${rating})`}</span>
        </div>
    )
}

export default Player;