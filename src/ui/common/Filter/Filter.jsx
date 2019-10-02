import React from 'react';
import style from './Filter.module.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Filter = React.memo((props) => {
    return (
        <div className={style.filterContainer}>
            <Form.Control value={props.filterValue} onChange={props.changeFilter}
                className={style.filter} type="text" placeholder="Search by name" />
            <Button onClick={props.clearFilter} variant='danger' className={style.filterButton}>X</Button>
        </div>
    )
});