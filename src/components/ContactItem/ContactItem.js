import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ name, number, deleteContact }) => (
  <>
    {name} : {number}
    <button type="button" onClick={deleteContact}>
      Delete
    </button>
  </>
);

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
