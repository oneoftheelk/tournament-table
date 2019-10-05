import React from 'react';
import style from './Match.module.scss';
import { MatchResultsContainer } from './MatchResults/MatchResults';
import ListGroup from 'react-bootstrap/ListGroup';

export const Match = React.memo((props) => {
	const { firstPlayer, secondPlayer, firstPlayerScore, secondPlayerScore } = props.match;

	const openForm = () => {
		props.openForm(props.match.id)
	}

	const closeForm = () => {
		props.closeForm();
	}
    
	return (
		<div className={style.match} onClick={openForm}>
			<ListGroup.Item><div>{firstPlayer.name} ({firstPlayerScore})</div></ListGroup.Item>
			<ListGroup.Item><div>{secondPlayer.name} ({secondPlayerScore})</div></ListGroup.Item>
			{ props.showResultsForm && props.isFormOpen && <MatchResultsContainer {...props} closeForm={closeForm}/> }
		</div>
	);
});