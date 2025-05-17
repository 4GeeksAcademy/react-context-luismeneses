import { createContext, useState, useEffect } from 'react';

const ContactContext = createContext();

const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [currentContact, setCurrentContact] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);

  const getContacts = async () => {
    try {
      const response = await fetch('https://playground.4geeks.com/contact/agenda/alejandro/contacts');
      const data = await response.json();
      setContacts(data.contacts || []);
    } catch (error) {
      console.error(error);
    }
  };

  const addContact = async (contact) => {
    try {
      const response = await fetch('https://playground.4geeks.com/contact/agenda/alejandro/contacts', {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await response.json();
      setContacts([...contacts, data]);
    } catch (error) {
      console.error(error);
    }
  };

  const updateContact = async (contact) => {
    try {
      const response = await fetch(`https://playground.4geeks.com/contact/agenda/alejandro/contacts/${contact.id}`, {
        method: 'PUT',
        body: JSON.stringify(contact),
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await response.json();
      setContacts(contacts.map((c) => c.id === contact.id ? data : c));
    } catch (error) {
      console.error(error);
    }
  };

  const deleteContact = async () => {
    try {
      await fetch(`https://playground.4geeks.com/contact/agenda/alejandro/contacts/${contactToDelete.id}`, {
        method: 'DELETE'
      });
      setContacts(contacts.filter((c) => c.id !== contactToDelete.id));
      setShowModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  const confirmDelete = (contact) => {
    setContactToDelete(contact);
    setShowModal(true);
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <ContactContext.Provider value={{
      contacts,
      currentContact,
      setCurrentContact,
      addContact,
      updateContact,
      confirmDelete,
      showModal,
      setShowModal,
      deleteContact
    }}>
      {children}
    </ContactContext.Provider>
  );
};

export { ContactProvider, ContactContext };

