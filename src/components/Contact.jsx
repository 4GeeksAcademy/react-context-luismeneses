import React from 'react';
import { useContext } from 'react';
import { ContactContext } from './ContactContext';
import ContactCard from './ContactCard';

export const Contact = () => {
  const { contacts } = useContext(ContactContext);

  return (
    <div>
      <h1>Contactos</h1>
      {contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </div>
  );
};
