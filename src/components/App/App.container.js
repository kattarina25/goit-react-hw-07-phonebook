import { connect } from 'react-redux';
import { selectors, operations } from '../../redux/contacts';
import App from './App';

const mapStateToProps = state => ({
  contactsLenght: selectors.getTotalCountContacts(state),
  isLoading: selectors.getLoading(state),
  isError: selectors.getError(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(operations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
