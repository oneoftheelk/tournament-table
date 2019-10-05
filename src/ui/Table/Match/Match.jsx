import React, { useState } from 'react';
import style from './Match.module.scss';
import { MatchResultsContainer } from './MatchResults/MatchResults';
import ListGroup from 'react-bootstrap/ListGroup';

export const Match = React.memo((props) => {
	const { firstPlayer, secondPlayer, firstPlayerScore, secondPlayerScore } = props.match;
	const [showResultsForm, toggleResultForm] = useState(false);

	const openForm = () => {
		if(!showResultsForm) {
			toggleResultForm(true);
		}
	}

	const closeForm = () => {
		toggleResultForm(false);
	}
    
	return (
		<div className={style.match} onClick={openForm}>
			<ListGroup.Item><div>{firstPlayer.name} ({firstPlayerScore})</div></ListGroup.Item>
			<ListGroup.Item><div>{secondPlayer.name} ({secondPlayerScore})</div></ListGroup.Item>
			{ showResultsForm && <MatchResultsContainer {...props} closeForm={closeForm}/> }
		</div>
	);
});