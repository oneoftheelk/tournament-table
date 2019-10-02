import React from 'react';
import { reduxForm, Field } from 'redux-form';
import style from './MatchResults.module.scss';
import { numberField } from '../../../../utils/validators/validators';
import { FormControlComponent } from '../../../common/FormControls/FormsControls';
import Button from 'react-bootstrap/Button';

const MatchResults = React.memo((props) => {
	return (
		<form onSubmit={props.handleSubmit} className={style.formContainer}>
            <div>
                <span>Player 1 score: </span>
                <Field component={FormControlComponent} name={'firstPlayerScore'} validate={[numberField]} />
            </div>
            <div>
                <span>Player 2 score: </span>
                <Field component={FormControlComponent} name={'secondPlayerScore'} validate={[numberField]} />
            </div>
            <div>
                <Button variant='outline-success' type='submit'>Apply</Button>
                <Button variant='outline-danger' onClick={props.closeForm}>Close</Button>
            </div>
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
            ? { name: firstPlayer.name || 'to be announced',
                rating: firstPlayer.rating || '0',
                id: firstPlayer.id || '-1' }
            : { name: secondPlayer.name || 'to be announced',
                rating: secondPlayer.rating || '0',
                id: secondPlayer.id || '-1' }

        props.changeRating(firstPlayer.id, secondPlayer.id, firstPlayer.rating + 150, secondPlayer.rating - 150);

        if (id <= 4) {
            props.addQuarterfinalsResult(id, player, position);
            props.fillQuarterfinalsScore(id, firstPlayerScore, secondPlayerScore);
        } else if (id === 5 || id === 6) {
            props.addSemifinalsResult(id, player, position);
            props.fillSemifinalsScore(id, firstPlayerScore, secondPlayerScore);
        } else if (id === 7) {
            props.addFinalsResult(id, player, position);
            props.fillFinalsScore(id, firstPlayerScore, secondPlayerScore);
            props.applyFinalRating(props.ratingIncrement);
        }
        
        props.clearForm();
        props.closeForm();
    }

    return (
        <MatchResultsReduxForm onSubmit={addResult} closeForm={props.closeForm} />
    )
});