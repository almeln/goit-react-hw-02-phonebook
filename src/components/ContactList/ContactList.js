import React from 'react';
import ContactItem from 'components/ContactItem';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDeleteContact={onDeleteContact}
        ></ContactItem>
      ))}
    </ul>
  );
};

export default ContactList;
