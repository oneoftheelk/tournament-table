import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import style from './Table.module.scss';
import { addQuarterfinalResult } from './../../redux/tableReducer';
import Match from './Match/Match';

const Table = (props) => {
	const matchesQuarterfinals = props.matchesQuarterfinals.map( match => {
		return <Match key={match.id} match={match} addQuarterfinalResult={props.addQuarterfinalResult} />
    });
    
    const matchesSemifinals = props.matchesSemifinals.map( match => {
		return <Match key={match.id} match={match} addQuarterfinalResult={props.addQuarterfinalResult} />
    });
    
    const matchesFinals = props.matchesFinals.map( match => {
		return <Match key={match.id} match={match} addQuarterfinalResult={props.addQuarterfinalResult} />
	});

	return (
        <div className={style.tableContainer}>
            <div className={style.matchContainer}>
                {matchesQuarterfinals}
            </div>
            <div className={style.matchContainer}>
                {matchesSemifinals}
            </div>
            <div className={style.matchContainer}>
                {matchesFinals}
            </div>
        </div>
	);
}

const mapStateToProps = (state) => {
    return {
        matchesQuarterfinals: state.table.matchesQuarterfinals,
        matchesSemifinals: state.table.matchesSemifinals,
        matchesFinals: state.table.matchesFinals
    }
}

export default compose(
    connect(mapStateToProps, {addQuarterfinalResult})
)(Table);