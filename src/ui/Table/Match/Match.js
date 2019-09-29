import React from 'react';
import style from './Match.module.scss';

const Match = (props) => {
	const {firstPlayer, secondPlayer} = props;
	return (
		<div className={style.match}>
			<div>{firstPlayer.name}</div>
			<div>{secondPlayer.name}</div>
		</div>
	);
}

export default Match;