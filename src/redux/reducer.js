import { combineReducers } from 'redux';
import { filterReducer } from './filterSlice'
import { contactsReducer } from './contactsSlice'
import { authReducer } from './authSlice'

export const reducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authReducer,
});