import { connect } from 'react-redux';
import { selectors, operations } from '../../redux/contacts';
import ContactList from './ContactList';

const mapStateToProps = state => ({
  contacts: selectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(operations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
