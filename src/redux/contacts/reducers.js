import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import actions from './actions';
import authOperations from '../authorization/auth-operations';

const items = createReducer([], {
  [actions.fetchContactsSuccess]: (_, { payload }) => payload,
  [actions.addContactSuccess]: (state, action) => [...state, action.payload],
  [actions.deleteContactSuccess]: (state, action) =>
    state.filter(item => item.id !== action.payload),
  [authOperations.logOut.fulfilled]() {
    return [];
  },
});

const loading = createReducer(false, {
  [actions.fetchContactsRequest]: () => true,
  [actions.fetchContactsSuccess]: () => false,
  [actions.fetchContactsError]: () => false,
  [actions.addContactRequest]: () => true,
  [actions.addContactSuccess]: () => false,
  [actions.addContactError]: () => false,
  [actions.deleteContactRequest]: () => true,
  [actions.deleteContactSuccess]: () => false,
  [actions.deleteContactError]: () => false,
  [authOperations.logOut.fulfilled]() {
    return false;
  },
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, action) => action.payload,
  [authOperations.logOut.fulfilled]() {
    return '';
  },
});

const error = createReducer(null, {
  [actions.fetchContactsError]: (_, { payload }) => payload,
  [actions.addContactError]: (_, { payload }) => payload,
  [actions.deleteContactError]: (_, { payload }) => payload,
  [authOperations.logOut.fulfilled]() {
    return null;
  },
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
