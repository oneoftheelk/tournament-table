import React, { useState } from 'react';
import style from './Match.module.scss';
import MatchResultsContainer from './MatchResults/MatchResults';

const Match = React.memo((props) => {
	const { firstPlayer, secondPlayer, firstPlayerScore, secondPlayerScore } = props.match;
	const [showResultsForm, toggleResultForm] = useState(false);

	const closeForm = () => {
		toggleResultForm(false);
	}
    
	return (
		<div className={style.match}
			onClick={ () => toggleResultForm(true) }>
			<div>{firstPlayer.name} ({firstPlayerScore})</div>
			<div>{secondPlayer.name} ({secondPlayerScore})</div>
			{ showResultsForm && <MatchResultsContainer {...props} closeForm={closeForm}/> }
		</div>
	);
});

export default Match;