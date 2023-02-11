import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users: [],
    errors: null,
    loading: null,
    selectUser: null
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers: {
        getAll: (state, action)=> {
            state.users = action.payload
        },
        setSelectUser: (state, action) => {
            state.selectUser = action.payload
        }
    }
});

const {reducer: userReducer, actions: {getAll, setSelectUser}} = userSlice

const userActions = {
    getAll,
    setSelectUser
}
export {
    initialState,
    userActions,
    userReducer
}