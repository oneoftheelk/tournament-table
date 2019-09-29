import React, { useState } from 'react';

const AddPlayerForm = (props) => {
    const [nameValue, changeNameValue] = useState('');
    const [ratingValue, changeRatingValue] = useState(100);

    const changeName = (event) => {
        changeNameValue(event.currentTarget.value);
    }

    const changeRating = (event) => {
        changeRatingValue(+event.currentTarget.value);
    }

    const addPlayer = () => {
        const newPlayer = {
            id: Math.random().toFixed(5),
            name: nameValue,
            rating: ratingValue
        };
        props.addPlayer(newPlayer);
        changeNameValue('');
        changeRatingValue(100);
    }

    return (
        <div>
            <input value={nameValue} onChange={changeName} placeholder={'name'} />
            <input value={ratingValue} onChange={changeRating} placeholder={'rating'} />
            <button onClick={addPlayer}>Add</button>
            <button onClick={props.toggleAddPlayerForm}>Close</button>
        </div>
    )
}

export default AddPlayerForm;