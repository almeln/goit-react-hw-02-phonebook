import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

class App extends Component {
    state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
    }

    // handleInputChange = event => {
    //     const { name, value } = event.currentTarget;
    //     console.log(value);
    //     console.log(name);
    //     // this.setState({ name: event.currentTarget.value })
    //     // Вычисляемые свойства
    //     this.setState({
    //         [name]: value,
    //     })
    // }

    // handleSubmit = event => {
    //     event.preventDefault();
    //     console.log(this.state);
    // }

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
        this.setState(({contacts  }) => ({
            contacts: [contact, ...contacts]
        }));
    }

    render() {
        return (
            <div>
            <h1>Phonebook</h1>
            <ContactForm onSubmit={this.formSubmitHandler}></ContactForm>
            <h2>Contacts</h2>
            <ContactList contacts={this.state.contacts}></ContactList>
            </div>
        )
    }
};

export default App;