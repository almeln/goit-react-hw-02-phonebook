import React from 'react';
import ContactItem from 'components/ContactItem';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
        ></ContactItem>
      ))}
    </ul>
  );
};

export default ContactList;
