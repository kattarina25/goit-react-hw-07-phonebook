import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from '../Container';
import Section from '../Section';
import ContactsForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import ErrorMessage from '../ErrorMessage';
import Loader from '../Loader';

class App extends Component {
  static propTypes = {
    contactsLenght: PropTypes.number.isRequired,
    fetchContacts: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isError: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.oneOf([null]).isRequired,
    ]).isRequired,
  };

  componentDidMount() {
    const { fetchContacts } = this.props;
    fetchContacts();
  }

  render() {
    const { contactsLenght, isLoading, isError } = this.props;
    const showContacts = contactsLenght > 0 && !isLoading && !isError;
    return (
      <Container>
        <ContactsForm />
        {isLoading && <Loader />}
        {isError && <ErrorMessage message={isError} />}
        {showContacts && (
          <Section title="Contacts">
            <Filter />
            <ContactList />
          </Section>
        )}
      </Container>
    );
  }
}

export default App;
