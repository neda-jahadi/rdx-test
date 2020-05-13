import { createAction, createReducer } from '@reduxjs/toolkit';
const changeMyname = createAction('change my name');
const changeMyLastname = createAction('change my last name');
const filterList = createAction('filter my list');
const actions = {changeMyname,changeMyLastname,filterList};

const initialState = {myName:'',myLastname:'',list:[]}
    
const reducer = createReducer(initialState, {
    [changeMyname]: (state, action) => (
        { ...state, myName: action.payload }
    ),
    [changeMyLastname]: (state, action) => (
        { ...state, myLastname: action.payload }
    ),
    [filterList]: (state, action) => (
        { ...state, list: action.payload.filter(name=> name.toLowerCase().includes('n'.toLowerCase())) }
    ),
    
})

export { actions, reducer };

    
    

