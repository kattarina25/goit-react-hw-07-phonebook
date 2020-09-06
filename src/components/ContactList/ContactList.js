import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => (
  <ul className={styles.contactList}>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <ContactItem
          name={name}
          number={number}
          deleteContact={() => deleteContact(id)}
        />
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }),
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
