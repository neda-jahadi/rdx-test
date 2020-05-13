import { createAction, createReducer } from '@reduxjs/toolkit';

// Feature file: counter
// This file creates actions and a reducer.

// We can use any string as ACTION TYPE
const increase = createAction('increase counter');
const decrease = createAction('decrease counter');

// Collect our actions in an object, so we don't need to export each action individually
const actions = { increase, decrease };


// The initial state of the feature. A counter only need a value, so it's the simplest possible state.
const initialState = 10;

// The reducer should handle our actions. (It can also handle actions from other features if we import them.)
const reducer = createReducer(initialState, {
    [increase]: (state, action) => state + 1,
    [decrease]: (state, action) => state - 1
})

/*  createReducer creates a function that looks like this:
(state, action) => {
    switch( action.type ) {
        case 'increase counter':
            return state + 1;
        case 'decrease counter':
            return state - 1;
        default:
            return state;
    }
}
*/

export { actions, reducer };