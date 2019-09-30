import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { numberField } from '../../../../utils/validators/validators';
import { Input } from '../../../common/FormControls/FormsControls';

const MatchResults = (props) => {
    const {id, firstPlayer, secondPlayer} = props;

    const addQuarterfinalResult = (formData) => {
        debugger
        const position = (id === 1 || id === 3) ? 'top' : 'bottom';
        const player = 2 > 1
            ? { name: firstPlayer.name }
            : { name: secondPlayer.name };
        props.addQuarterfinalResult(id, player, position);
    }

	return (
		<form onSubmit={props.handleSubmit}>
            <div>
                <span>Player 1 score: </span>
                <Field component={Input} name={'firstPlayerScore'} validate={[numberField]} />
            </div>
            <div>
                <span>Player 2 score: </span>
                <Field component={Input} name={'secondPlayerScore'} validate={[numberField]} />
            </div>
            <button onClick={addQuarterfinalResult}>Apply</button>
		</form>
	);
}

const MatchResultsReduxForm = reduxForm({ form: 'matchResults' })(MatchResults);

export default MatchResultsReduxForm;