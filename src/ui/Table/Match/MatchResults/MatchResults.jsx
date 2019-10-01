import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { numberField } from '../../../../utils/validators/validators';
import { Input } from '../../../common/FormControls/FormsControls';

const MatchResults = React.memo((props) => {
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
            <button onClick={props.closeForm}>Close</button>
		</form>
	)
});

const MatchResultsReduxForm = reduxForm({ form: 'matchResults' })(MatchResults);

export const MatchResultsContainer = React.memo((props) => {
    const {id, firstPlayer, secondPlayer} = props.match;

    const addResult = (formData) => {
        const {firstPlayerScore = 0, secondPlayerScore = 0} = formData;

        if (!(firstPlayerScore === '3' && secondPlayerScore < firstPlayerScore
            || secondPlayerScore === '3' && firstPlayerScore < secondPlayerScore)) {
            return alert('dsad');
        }

        const position = (id % 2 === 0) ? 'bottom' : 'top';
        const player = firstPlayerScore > secondPlayerScore
            ? { name: firstPlayer.name }
            : { name: secondPlayer.name };
        if (id <= 4) {
            props.addQuarterfinalsResult(id, player, position);
            props.fillQuarterfinalsScore(id, firstPlayerScore, secondPlayerScore);
        } else if (id === 5 || id === 6) {
            props.addSemifinalsResult(id, player, position);
            props.fillSemifinalsScore(id, firstPlayerScore, secondPlayerScore);
        } else if (id === 7) {
            props.addFinalsResult(id, player, position);
            props.fillFinalsScore(id, firstPlayerScore, secondPlayerScore);
        }
        props.clearForm();
        props.closeForm();
    }

    return (
        <MatchResultsReduxForm onSubmit={addResult} closeForm={props.closeForm} />
    )
});