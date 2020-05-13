import { createAction, createReducer } from '@reduxjs/toolkit';


const changeAlias = createAction('change alias');
const changeName = createAction('change name');
const changeEmail = createAction('change email');
const resetProfile = createAction('reset user profile');

const actions = { changeAlias, changeName, changeEmail, resetProfile };


const initialState = {
    alias: '',
    name: '',
    email: ''
}

const reducer = createReducer(initialState, {
    [changeAlias]: (state, action) => (
        { ...state, alias: action.payload }
    ),
    [changeName]: (state, action) => (
        { ...state, name: action.payload }
    ),
    [changeEmail]: (state, action) => (
        { ...state, email: action.payload }
    ),

    // Alternativ lösning
    // [changeAll]: (state, action) => (
    //     {
    //         alias: action.payload.alias,
    //         name: action.payload.name,
    //         email: action.payload.email
    //     }
    // )
})


export { actions, reducer };