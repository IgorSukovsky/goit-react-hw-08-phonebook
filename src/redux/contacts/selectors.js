import { createSelector } from '@reduxjs/toolkit';

export const getContactsItems = state => state.contacts.items;
export const getContactsFilter = state => state.contacts.filter;

export const getFilteredContacts = createSelector(
  [getContactsItems, getContactsFilter],
  (items, filter) => {
    return items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

export const getLoadingStatus = state => state.contacts.loading;
