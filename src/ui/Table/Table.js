import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import style from './Table.module.scss';
import Match from './Match/Match';

const Table = (props) => {
	const matches = props.matches.map( match => {
		return <Match key={match.id} match={match} />
	});

	return (
		<div className={style.table}>
			{matches}
		</div>
	);
}

const mapStateToProps = (state) => {
    return {
        matches: state.table.matches
    }
}

export default compose(
    connect(mapStateToProps, {})
)(Table);