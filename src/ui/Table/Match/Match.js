import React from 'react';
import style from './Match.module.scss';
import MatchResults from './MatchResults/MatchResults';

const Match = (props) => {
    const { id, firstPlayer, secondPlayer, firstPlayerScore, secondPlayerScore } = props.match;
    
	return (
		<div className={style.match}>
			<div>{firstPlayer.name} ({firstPlayerScore})</div>
			<div>{secondPlayer.name} ({secondPlayerScore})</div>
            <MatchResults id={id} firstPlayer={firstPlayer} secondPlayer={secondPlayer} 
                addQuarterfinalResult={props.addQuarterfinalResult}  />
		</div>
	);
}

export default Match;