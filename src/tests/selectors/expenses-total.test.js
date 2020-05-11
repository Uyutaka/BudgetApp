import selectExpenseTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const res = selectExpenseTotal([]);
    expect(res).toBe(0);

});

test('should correctly add up a single expense', () => {
    const singleExpense = expenses[0];
    const res = selectExpenseTotal([singleExpense]);
    expect(res).toBe(expenses[0]['amount']);
});

test('should correctly add up multiple expenses', () => {
    const multipleExpenses = [expenses[0], expenses[1]];
    const res = selectExpenseTotal(multipleExpenses);
    expect(res).toBe(expenses[0]['amount'] + expenses[1]['amount']);
});
