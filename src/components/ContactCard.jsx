import React from 'react';
import { useContext } from 'react';
import { ContactContext } from './ContactContext';

export const ContactCard = ({ contact }) => {
  const { confirmDelete, setCurrentContact } = useContext(ContactContext);

  return (
    <div>
      <h2>{contact.name}</h2>
      <p>{contact.phone}</p>
      <p>{contact.email}</p>
      <button onClick={() => setCurrentContact(contact)}>Editar</button>
      <button onClick={() => confirmDelete(contact)}>Eliminar</button>
    </div>
  );
};
