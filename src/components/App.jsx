import { Component } from 'react';
import { nanoid } from 'nanoid/non-secure';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactsList from './ContactsList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChange = e => {
    const eventName = e.target.getAttribute('name');
    this.setState({ [eventName]: e.target.value });
  };

  onCreateContact = (name, number) => {
    const { contacts } = this.state;
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    this.setState(state => {
      const { contacts } = state;
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      return {
        contacts: [...contacts, newContact],
      };
    });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div style={{ maxWidth: '425px', margin: '0 auto' }}>
        <h2>Phonebook</h2>
        <ContactForm onCreateContact={this.onCreateContact} />

        <h2>Contacts</h2>
        <Filter handleChange={this.handleChange} filter={filter} />

        <ContactsList
          contacts={contacts}
          filter={filter}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
