import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { register, login, logOut, refreshUser, } from "./Auth";
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const handleFulfilledRegister = (state, action) => {
    alert(`Registration completed!`);
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
};

const handleFulfilledLogin = (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
};

const handleFulfilledLogOut = (state, _) => {
    state.user = { name: null, email: null };
    state.token = null;
    state.isLoggedIn = false;
};

const handlePendingRefresh = (state, action) => {
    state.isRefreshing = true;
    state.user = action.payload;
};

const handleFulfilledRefresh = (state, _) => {
    state.isLoggedIn = true;
    state.isRefreshing = false;
};

const handleRejectedRefresh = (state, _) => {
    state.isRefreshing = false;
    state.isLoggedIn = false;
};

const handleRejectedRegisterAndLogin = (state, action) => {
    alert(action.payload);
    state.error = action.payload;
};



const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
};

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(register.fulfilled, handleFulfilledRegister)
            .addCase(login.fulfilled, handleFulfilledLogin)
            .addCase(logOut.fulfilled, handleFulfilledLogOut)
            .addCase(refreshUser.pending, handleFulfilledRefresh)
            .addCase(refreshUser.fulfilled, handlePendingRefresh)
            .addCase(refreshUser.rejected, handleRejectedRefresh)
            .addMatcher(
                isAnyOf(register.rejected, login.rejected),
                handleRejectedRegisterAndLogin
            );
    },    
});

export const authReducer = persistReducer(authPersistConfig, authSlice.reducer);
