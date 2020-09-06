import { createAction } from '@reduxjs/toolkit';

const fetchContactsRequest = createAction('contacts/fetchContactRequest');
const fetchContactsSuccess = createAction('contacts/fetchContactSuccess');
const fetchContactsError = createAction('contacts/fetchContactError');

const addContactRequest = createAction('contacts/addContactRequest');
const addContactSuccess = createAction('contacts/addContactSuccess');
const addContactError = createAction('contacts/addContactError');

const deleteContactRequest = createAction('contacts/deleteContactRequest');
const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
const deleteContactError = createAction('contacts/deleteContactError');

const changeFilter = createAction('contacts/changeFilter');

export default {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
};
