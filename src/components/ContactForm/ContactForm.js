import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { operations, selectors } from '../../redux/contacts';
import Section from '../Section';
import styles from './ContactForm.module.css';

class ContactsForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  };

  state = {
    name: '',
    number: '',
    errorMessage: null,
  };

  handleChange = event => {
    const { errorMessage } = this.state;
    const { name, value } = event.currentTarget;
    if (errorMessage) this.setState({ errorMessage: null });
    this.setState({ [name]: value.toLowerCase() });
  };

  validateContact() {
    const { name } = this.state;
    const { contacts } = this.props;
    return contacts.map(item => item.name).includes(name);
  }

  handleSubmit = event => {
    const { name, number } = this.state;
    event.preventDefault();
    if (this.validateContact()) {
      this.setState({ errorMessage: `${name} is already in contacts` });
    } else {
      this.props.onSubmit({ name, number });
    }
    this.reset();
  };

  reset() {
    this.setState({ name: '', number: '' });
  }

  render() {
    const { name, number, errorMessage } = this.state;
    return (
      <Section title="Phonebook">
        <form onSubmit={this.handleSubmit} className={styles.ContactsForm}>
          <input
            className={styles.contactName}
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            required
          />
          <input
            type="tel"
            name="number"
            value={number}
            pattern="[0-9]{7}"
            onChange={this.handleChange}
            required
          />
          {errorMessage ? (
            <p className={styles.ErrorMessage}>{errorMessage}</p>
          ) : (
            <button type="submit">Add contact</button>
          )}
        </form>
      </Section>
    );
  }
}

const mapStateToProps = state => ({
  contacts: selectors.getAllContacts(state),
});

const mapDispatchToPrors = dispatch => ({
  onSubmit: contact => dispatch(operations.addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToPrors)(ContactsForm);
