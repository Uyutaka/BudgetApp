import {createStore} from "redux";
// Action generators function that returns action obs


const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({count}) => ({
    type: 'SET',
    count
})

const resetCount = () => ({
    type: 'RESET'
})

// Reducers
// 1. Reducers are pure funcs
// 2. Never change state or actions


const countReducer = ((state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1

            return {
                count: state.count - decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state;
    }

});

const store = createStore(countReducer);


const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});


// store.dispatch(
//     {
//         type: 'INCREMENT',
//         incrementBy: 5
//     });
store.dispatch(incrementCount());

store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(decrementCount({decrementBy: 20}));
store.dispatch(decrementCount());
store.dispatch(setCount({count: 1000}));
store.dispatch(resetCount());

