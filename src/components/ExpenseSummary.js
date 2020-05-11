import React from 'react';
import {connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpenseSummary = ({expenseCount, expenseTotal}) =>{
    const expenseWord = expenseCount === 1 ? 'expense': 'expenses';
    const formattedExpensesTotala = numeral(expenseTotal/100).format('$0,0.00');

    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totaling {formattedExpensesTotala}</h1>
        </div>

    );
}

const mapStateToProps = (state) => {
    const visibleExpense = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpense.length,
        expenseTotal: selectExpensesTotal((visibleExpense))
    };
};

export default connect(mapStateToProps)(ExpenseSummary);