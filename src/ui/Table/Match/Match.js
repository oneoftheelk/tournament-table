import React from 'react';
import style from './Match.module.scss';
import MatchResults from './MatchResults/MatchResults';

const Match = (props) => {
	const { firstPlayer, secondPlayer, firstPlayerScore, secondPlayerScore } = props.match;
	return (
		<div className={style.match}>
			<div>{firstPlayer.name} ({firstPlayerScore})</div>
			<div>{secondPlayer.name} ({secondPlayerScore})</div>
			<MatchResults />
		</div>
	);
}

export default Match;