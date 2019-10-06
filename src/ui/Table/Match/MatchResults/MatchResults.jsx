import React, { useState, useRef } from 'react';
import { reduxForm, Field } from 'redux-form';
import style from './MatchResults.module.scss';
import { numberField } from '../../../../utils/validators/validators';
import { FormControlComponent } from '../../../common/FormControls/FormsControls';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';

const MatchResults = React.memo((props) => {
	return (
		<form onSubmit={props.handleSubmit} className={style.formContainer}>
            <div>
                <div className={style.player}>
                    <Field component={FormControlComponent} name={'firstPlayerScore'} validate={[numberField]}
                        className={style.score} placeholder={`${props.firstPlayer.name} score`} />
                </div>
                <div className={style.player}>
                    <Field component={FormControlComponent} name={'secondPlayerScore'} validate={[numberField]}
                        className={style.score} placeholder={`${props.secondPlayer.name} score`} />
                </div>
            </div>
            <div className={style.buttons}>
                <Button variant='outline-success' ref={props.target} type='submit'>✓</Button>
                <Button variant='outline-danger' type='button' onClick={props.closeForm}>X</Button>
                { props.tooltip() }
            </div>
		</form>
	)
});

const MatchResultsReduxForm = reduxForm({ form: 'matchResults' })(MatchResults);

export const MatchResultsContainer = React.memo((props) => {
    const {id, firstPlayer, secondPlayer} = props.match;

    const [show, setShow] = useState(false);
    const target = useRef(null);

    const tooltip = () => {
        const onEnter = () => {
            setTimeout(() => {
                setShow(false);
            }, 2000);
        }

        return (
            <Overlay target={target.current} show={show} placement="right"
                onEntered={onEnter}>
                {props => (
                    <Tooltip {...props}>
                        Score should be 3:2, 3:1 or 3:0
                    </Tooltip>
                )}
            </Overlay>
        )
    }

    const addResult = (formData) => {
        const {firstPlayerScore = 0, secondPlayerScore = 0} = formData;

        if (!(firstPlayerScore === '3' && secondPlayerScore < firstPlayerScore)
            && !(secondPlayerScore === '3' && firstPlayerScore < secondPlayerScore)) {
            return setShow(true);
        }

        const position = (id % 2 === 0) ? 'bottom' : 'top';
        
        let winner = null;
        let firstPlayerIncrement = null;
        let secondPlayerIncrement = null;

        if (firstPlayerScore > secondPlayerScore) {
            firstPlayerIncrement = Math.ceil((100 - firstPlayer.rating + secondPlayer.rating) / 10);
            secondPlayerIncrement = Math.ceil((100 - firstPlayer.rating + secondPlayer.rating) / (-20));
            winner = {
                name: firstPlayer.name,
                rating: firstPlayer.rating,
                id: firstPlayer.id
            }
            props.changeRating(firstPlayer.id, secondPlayer.id, firstPlayerIncrement, secondPlayerIncrement);
        } else {
            secondPlayerIncrement = Math.ceil((100 - firstPlayer.rating + secondPlayer.rating) / 10);
            firstPlayerIncrement = Math.ceil((100 - firstPlayer.rating + secondPlayer.rating) / (-20));
            winner = {
                name: secondPlayer.name,
                rating: secondPlayer.rating,
                id: secondPlayer.id
            }
            props.changeRating(secondPlayer.id, firstPlayer.id, secondPlayerIncrement, firstPlayerIncrement);
        }

        if (id <= 4) {
            props.addQuarterfinalsResult(id, winner, position);
            props.fillQuarterfinalsScore(id, firstPlayerScore, secondPlayerScore);
        } else if (id === 5 || id === 6) {
            props.addSemifinalsResult(id, winner, position);
            props.fillSemifinalsScore(id, firstPlayerScore, secondPlayerScore);
        } else if (id === 7) {
            props.addFinalsResult(id, winner, position);
            props.fillFinalsScore(id, firstPlayerScore, secondPlayerScore);
            props.applyFinalRating(props.ratingIncrement);
        }
        
        props.clearForm();
        props.closeForm();
    }

    return (
        <MatchResultsReduxForm onSubmit={addResult} closeForm={props.closeForm}
            firstPlayer={firstPlayer} secondPlayer={secondPlayer}
            target={target} tooltip={tooltip} />
    )
});