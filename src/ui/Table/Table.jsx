import React, { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import style from './Table.module.scss';
import { addQuarterfinalsResult, addSemifinalsResult, addFinalsResult,
    fillQuarterfinalsScore, fillSemifinalsScore, fillFinalsScore, changeRating } from '../../redux/tableReducer';
import { applyFinalRating } from '../../redux/playersReducer';
import { clearForm } from '../../redux/store';
import { Match } from './Match/Match';

const Table = React.memo((props) => {
	return (
        <>
            <h3 className={style.title}>Tournament table</h3>
            <div className={style.tableContainer}>
                <div className={style.matchContainer}>
                    {props.matchesQuarterfinals}
                </div>
                <div className={style.matchContainer}>
                    {props.matchesSemifinals}
                </div>
                <div className={style.matchContainer}>
                    {props.matchesFinals}
                </div>
            </div>
        </>
	);
});

const TableContainer = (props) => {
    const [showResultsForm, toggleResultForm] = useState(false);
    const [formIsOpenForId, changeId] = useState(null);
    
	const openForm = (id, needToOpen) => {
        if (props.isTableFormed && needToOpen) {
            changeId(id);
            if (!showResultsForm) {
                toggleResultForm(true);
            }
        }
	}

	const closeForm = () => {
		toggleResultForm(false);
	}

    const matches = (matches) => {
        return matches.map( match => {
            const isFormOpen = formIsOpenForId === match.id ? true : false;

            return <Match key={match.id} match={match} {...props}
            openForm={openForm} closeForm={closeForm} showResultsForm={showResultsForm}
            isFormOpen={isFormOpen} />
        })
    }

    const matchesQuarterfinals = matches(props.matchesQuarterfinals);
    const matchesSemifinals = matches(props.matchesSemifinals);
    const matchesFinals = matches(props.matchesFinals);

    return <Table matchesQuarterfinals={matchesQuarterfinals}
        matchesSemifinals={matchesSemifinals}
        matchesFinals={matchesFinals} />
}

const mapStateToProps = (state) => {
    return {
        matchesQuarterfinals: state.table.matchesQuarterfinals,
        matchesSemifinals: state.table.matchesSemifinals,
        matchesFinals: state.table.matchesFinals,
        ratingIncrement: state.table.ratingIncrement,
        isTableFormed: state.table.isTableFormed
    }
}

export const ComposedTable = compose(
    connect(mapStateToProps,
        {addQuarterfinalsResult, addSemifinalsResult, addFinalsResult,
            fillQuarterfinalsScore, fillSemifinalsScore, fillFinalsScore,
            clearForm, changeRating, applyFinalRating})
)(TableContainer);