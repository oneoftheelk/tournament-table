import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { numberField } from '../../../../utils/validators/validators';
import { Input } from '../../../common/FormControls/FormsControls';

const MatchResults = (props) => {
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
            <button>Apply</button>
		</form>
	);
}

const MatchResultsReduxForm = reduxForm({ form: 'matchResults' })(MatchResults);

const MatchResultsContainer = (props) => {
    const {id, firstPlayer, secondPlayer} = props.match;

    const addResult = (formData) => {
        debugger
        const position = (id % 2 === 0) ? 'bottom' : 'top';
        const player = formData.firstPlayerScore > formData.secondPlayerScore
            ? { name: firstPlayer.name }
            : { name: secondPlayer.name };
        if (id <= 4) {
            props.addQuarterfinalsResult(id, player, position);
            props.fillQuarterfinalsScore(id, formData.firstPlayerScore, formData.secondPlayerScore);
        } else if (id === 5 || id === 6) {
            props.addSemifinalsResult(id, player, position);
            props.fillSemifinalsScore(id, formData.firstPlayerScore, formData.secondPlayerScore);
        } else if (id === 7) {
            props.addFinalsResult(id, player, position);
            props.fillFinalsScore(id, formData.firstPlayerScore, formData.secondPlayerScore);
        }
        props.clearForm();
    }

    return (
        <MatchResultsReduxForm onSubmit={addResult} />
    )
}

export default MatchResultsContainer;