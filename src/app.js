import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, {history} from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import {Provider} from 'react-redux';
import {startSetExpenses} from "./actions/expenses";
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/initialize';
import {firebase} from "./firebase/firebase";
import {login, logout} from './actions/auth';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
}
ReactDOM.render(
    <p>Loading</p>,
    document.getElementById('app'));


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('login')
        const uid = user.uid;
        store.dispatch(login(uid));

        console.log('uid', uid);
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
        })
    } else {
        console.log('logout')
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});
