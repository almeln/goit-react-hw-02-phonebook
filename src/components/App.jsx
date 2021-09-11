import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

class App extends Component {
    state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: ''
    }

    formSubmitHandler = data => {
        console.log(data);

        // Добавление контакта
        const contact = {
            id: uuidv4(),
            name: data.name,
            number: data.number,
        };

        // this.setState(prevState => ({
        //     contacts: [contact, ...prevState.contacts]
        // }));

        // Деструктуризация
        this.setState(({ contacts }) => ({
            contacts: [contact, ...contacts]
        }));
    };

    changeFilter = event => {
        this.setState({filter: event.currentTarget.value});
    };

    getVisibleContacts = () => {
        const normalizedFilter = this.state.filter.toLowerCase();
        return this.state.contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter),
        );
    };

    deleteContact = contactId => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(contact => contact.id !== contactId)
        }));
    };

    render() {

        const visibleContacts = this.getVisibleContacts();

        return (
            <div>
            <h1>Phonebook</h1>
            <ContactForm onSubmit={this.formSubmitHandler}></ContactForm>
            <h2>Contacts</h2>
            <Filter value={this.state.filter} onChange={this.changeFilter}></Filter>
            <ContactList 
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
            ></ContactList>
            </div>
        )
    }
};

export default App;