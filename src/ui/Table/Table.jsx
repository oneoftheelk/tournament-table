import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import style from './Table.module.scss';
import { addQuarterfinalsResult, addSemifinalsResult, addFinalsResult,
    fillQuarterfinalsScore, fillSemifinalsScore, fillFinalsScore, changeRating } from '../../redux/tableReducer';
import { applyFinalRating } from '../../redux/playersReducer';
import { clearForm } from '../../redux/store';
import { Match } from './Match/Match';

const Table = React.memo((props) => {
    const matches = (matches) => {
        return matches.map( match => {
            return <Match key={match.id} match={match} {...props} />
        })
    }

    const matchesQuarterfinals = matches(props.matchesQuarterfinals);
    const matchesSemifinals = matches(props.matchesSemifinals);
    const matchesFinals = matches(props.matchesFinals);

	return (
        <>
            <h3 className={style.title}>Tournament table</h3>
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
        </>
	);
});

const mapStateToProps = (state) => {
    return {
        matchesQuarterfinals: state.table.matchesQuarterfinals,
        matchesSemifinals: state.table.matchesSemifinals,
        matchesFinals: state.table.matchesFinals,
        ratingIncrement: state.table.ratingIncrement
    }
}

export const ComposedTable = compose(
    connect(mapStateToProps,
        {addQuarterfinalsResult, addSemifinalsResult, addFinalsResult,
            fillQuarterfinalsScore, fillSemifinalsScore, fillFinalsScore,
            clearForm, changeRating, applyFinalRating})
)(Table);