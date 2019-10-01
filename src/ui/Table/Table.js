import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import style from './Table.module.scss';
import { addQuarterfinalsResult, addSemifinalsResult, addFinalsResult,
    fillQuarterfinalsScore, fillSemifinalsScore, fillFinalsScore } from './../../redux/tableReducer';
import { clearForm } from './../../redux/store';
import Match from './Match/Match';

const Table = React.memo((props) => {
	const matchesQuarterfinals = props.matchesQuarterfinals.map( match => {
        return <Match key={match.id} match={match} {...props} />
    });
    
    const matchesSemifinals = props.matchesSemifinals.map( match => {
        return <Match key={match.id} match={match} {...props} />
    });
    
    const matchesFinals = props.matchesFinals.map( match => {
        return <Match key={match.id} match={match} {...props} />
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
});

const mapStateToProps = (state) => {
    return {
        matchesQuarterfinals: state.table.matchesQuarterfinals,
        matchesSemifinals: state.table.matchesSemifinals,
        matchesFinals: state.table.matchesFinals
    }
}

export default compose(
    connect(mapStateToProps,
        {addQuarterfinalsResult, addSemifinalsResult, addFinalsResult,
            fillQuarterfinalsScore, fillSemifinalsScore, fillFinalsScore, clearForm})
)(Table);