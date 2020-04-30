import {addExpense, editExpense, removeExpense} from "../../actions/expenses";

test('should set up remove expense action obj', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123abc"
    });
})

test('should set up edit expense action obj', () => {
    const action = editExpense('123abc', {note: "newNote"});
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "123abc",
        updates: {note: "newNote"}
    })
})

test('should setup add expense action obj with provided values', () => {
    const expenseData = {
        description: "rent",
        amount: 1000,
        createdAt: 1000,
        note: 'This is note'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test("should setup add expense action obj with default value", () => {
    const expenseData = {
        description: "",
        amount: 0,
        createdAt: 0,
        note: ''
    };
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})