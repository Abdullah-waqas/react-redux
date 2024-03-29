// contactAction.js

import * as actionTypes from './actionTypes';

export const createContact = (contact) => {
  console.log(contact);
    return {
      type: actionTypes.CREATE_NEW_CONTACT,
      contact: contact
    }
  };

export const deleteContact = (id) => {
    return {
        type: actionTypes.REMOVE_CONTACT,
        id: id
    }
}