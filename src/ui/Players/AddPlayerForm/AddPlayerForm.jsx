import React from 'react';
import { reduxForm, Field } from 'redux-form';
import style from './AddPlayerForm.module.scss';
import { requiredField, numberField, stringField30 } from '../../../utils/validators/validators';
import { FormControlComponent } from '../../common/FormControls/FormsControls';
import Button from 'react-bootstrap/Button';

const AddPlayerForm = React.memo((props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.formContainer}>
            <Field component={FormControlComponent} name={'name'} placeholder={"Player's name"}
                validate={[requiredField, stringField30]} />
            <Field component={FormControlComponent} name={'rating'} placeholder={"Player's rating"}
                validate={[requiredField, numberField]} />
            <div>
                <Button variant='outline-success' type='submit'>Add</Button>
                <Button variant='outline-danger' type='button'
                    onClick={props.toggleAddPlayerForm}>Close</Button>
            </div>
        </form>
    )
});

const AddPlayerReduxForm = reduxForm({ form: 'addPlayer' })(AddPlayerForm);

export const AddPlayerFormContainer = React.memo((props) => {
    const addPlayer = (FormData) => {
        const newPlayer = {
            id: Math.random().toFixed(5),
            name: FormData.name,
            rating: +FormData.rating
        };
        props.addPlayer(newPlayer);
        props.clearForm();
        props.toggleAddPlayerForm();
    }

    return (
        <AddPlayerReduxForm onSubmit={addPlayer} toggleAddPlayerForm={props.toggleAddPlayerForm} />
    )
});