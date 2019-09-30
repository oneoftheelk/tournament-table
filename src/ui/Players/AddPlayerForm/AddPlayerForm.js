import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from './../../common/FormControls/FormsControls';
import { requiredField, numberField, stringWithSpacesField } from '../../../utils/validators/validators';

const AddPlayerForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Input} name={'name'} placeholder={'name'}
                validate={[requiredField, stringWithSpacesField]} />
            <Field component={Input} name={'rating'} placeholder={'rating'}
                validate={[requiredField, numberField]} />
            <button>Add</button>
            <button onClick={props.toggleAddPlayerForm}>Close</button>
        </form>
    )
}

const AddPlayerReduxForm = reduxForm({ form: 'addPlayer' })(AddPlayerForm);

const AddPlayerFormContainer = (props) => {
    const addPlayer = (FormData) => {
        const newPlayer = {
            id: Math.random().toFixed(5),
            name: FormData.name,
            rating: +FormData.rating
        };
        props.addPlayer(newPlayer);
        props.clearForm();
    }

    return (
        <AddPlayerReduxForm onSubmit={addPlayer} toggleAddPlayerForm={props.toggleAddPlayerForm} />
    )
}

export default AddPlayerFormContainer;