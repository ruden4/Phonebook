export const getFilterQuery = state => state.filter;

export const getContactsList = state => state.contacts.contacts;

export const getIsLoding = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;

export const getUser = state => state.auth.user;

export const getToken = state => state.auth.token;

export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getIsRefreshing = state => state.auth.isRefreshing;

export const getAuthError = state => state.auth.error;
