import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import style from './Table.module.scss';
import Match from './Match/Match';

const Table = () => {
	return (
		<div className={style.table}>
			<Match />
			<Match />
			<Match />
			<Match />
		</div>
	);
}

const mapStateToProps = (state) => {
    return {
        matches: state.players.matches
    }
}

export default compose(
    connect(mapStateToProps, {})
)(Table);