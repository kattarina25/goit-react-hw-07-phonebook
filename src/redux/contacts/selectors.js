import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;

const getError = state => state.contacts.error;

const getAllContacts = state => state.contacts.items;

const getFilter = state => state.contacts.filter;

const getTotalCountContacts = state => {
  const contacts = getAllContacts(state);
  return contacts.length;
};

const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (items, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return items.filter(({ name }) => name.includes(normalizedFilter));
  },
);

export default {
  getLoading,
  getError,
  getTotalCountContacts,
  getAllContacts,
  getVisibleContacts,
  getFilter,
};
