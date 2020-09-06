import React from 'react';
import PropTypes from 'prop-types';
import styles from './ErrorMessage.module.css';

const ErrorMessage = ({ message }) => (
  <div className={styles.ErrorMessage}>Oops, something is wrong: {message}</div>
);

ErrorMessage.defaultProps = {
  message: 'Not found',
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

export default ErrorMessage;
