import React from 'react';

const AddPlayerForm = (props) => {
    return (
        <div>
            <input placeholder={'name'} />
            <input placeholder={'rating'} />
            <button>Add</button>
            <button onClick={props.toggleForm}>Close</button>
        </div>
    )
}

export default AddPlayerForm;