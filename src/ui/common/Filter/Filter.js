import React from 'react';

const Filter = React.memo((props) => {
    return (
        <>
            <input value={props.filterValue} onChange={props.changeFilter} placeholder={'name'} />
            <button onClick={props.clearFilter}>{'Clear filter'}</button>
        </>
    )
});

export default Filter;