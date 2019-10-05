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
			<div>
                <ListGroup.Item className={style.player}>
                    <div className={style.name}>{firstPlayer.name}</div>
                    <div className={style.score}>{firstPlayerScore}</div>
                </ListGroup.Item>
                <ListGroup.Item className={style.player}>
                    <div className={style.name}>{secondPlayer.name}</div>
                    <div className={style.score}>{secondPlayerScore}</div>
                </ListGroup.Item>
            </div>
			{ props.showResultsForm && props.isFormOpen && <MatchResultsContainer {...props} closeForm={closeForm}/> }
		</div>
	);
});