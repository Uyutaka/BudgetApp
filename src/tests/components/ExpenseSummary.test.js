import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseSummary} from "../../components/ExpenseSummary";

test('should correctly render ExpensesSummary with 1 expense', ()=>{
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expenseTotal={324}/>)
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with multiple expenses', ()=>{
    const wrapper = shallow(<ExpenseSummary expenseCount={3} expenseTotal={3243768427}/>)
    expect(wrapper).toMatchSnapshot();
});