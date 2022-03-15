import s from './ContactsList.module.css';
import { Component } from 'react';
import PropTypes from 'prop-types';
import ContactsListElement from './ContactListElement';
class ContactsList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
      })
    ),
    filter: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
  };
  render() {
    const { contacts, filter, onDeleteContact } = this.props;
    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter)
    );
    return (
      <ul className={s.list}>
        {filteredContacts.map(({ id, name, number }) => (
          <ContactsListElement
            key={id}
            name={name}
            number={number}
            id={id}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ul>
    );
  }
}

export default ContactsList;
