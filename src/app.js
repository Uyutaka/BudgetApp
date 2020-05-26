import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import {Provider} from 'react-redux';
import {addExpense} from "./actions/expenses";
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/initialize';
import './firebase/firebase';
// import './playground/promises';

const store = configureStore();

store.dispatch(addExpense({description: 'water bill', amount: 4500}));
store.dispatch(addExpense({description: 'gas bill', createdAt: 1000}));
store.dispatch(addExpense({description: 'Rent', amount: 109500}));


const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);


const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(
    jsx,
    document.getElementById('app'));
