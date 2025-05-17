import React, { useState } from 'react';
import { useContext } from 'react';
import { ContactContext } from './ContactContext';

const AddContact = () => {
  const { addContact, updateContact, currentContact, setCurrentContact } = useContext(ContactContext);
  const [name, setName] = useState(currentContact.name || '');
  const [phone, setPhone] = useState(currentContact.phone || '');
  const [email, setEmail] = useState(currentContact.email || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = { name, phone, email };
    if (currentContact.id) {
      updateContact({ ...currentContact, ...contact });
    } else { addContact
