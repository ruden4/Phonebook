import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { register, login, logOut, refreshUser, } from "./Auth";

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

const handlePendingRefresh = (state, _) => {
    state.isRefreshing = true;
};

const handleFulfilledRefresh = (state, action) => {
    state.user = action.payload;
    state.isLoggedIn = true;
    state.isRefreshing = false;
};

const handleRejectedRefresh = (state, _) => {
    state.isRefreshing = false;
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

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(register.fulfilled, handleFulfilledRegister)
            .addCase(login.fulfilled, handleFulfilledLogin)
            .addCase(logOut.fulfilled, handleFulfilledLogOut)
            .addCase(refreshUser.fulfilled, handlePendingRefresh)
            .addCase(refreshUser.pending, handleFulfilledRefresh)
            .addCase(refreshUser.rejected, handleRejectedRefresh)
            .addMatcher(
                isAnyOf(register.rejected, login.rejected),
                handleRejectedRegisterAndLogin
            );
    },
});

export const authReducer = authSlice.reducer;