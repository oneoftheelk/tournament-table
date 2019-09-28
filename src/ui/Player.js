import React from 'react';

const Player = (props) => {
    const {id, name, rating} = props;

    return (
        <div>
            <span>{`${id} - ${name} (${rating})`}</span>
        </div>
    )
}

export default Player;