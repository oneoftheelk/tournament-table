import React from 'react';

export const Player = React.memo((props) => {
    const {name, rating} = props.player;

    return (
        <div>
            <span>{`${name} (${rating})`}</span>
        </div>
    )
});