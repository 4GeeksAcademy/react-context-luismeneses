import { createContext, useState, useEffect } from "react";

const ContactContext = createContext();

const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [currentContact, setCurrentContact] = useState({});
  const getContacts = async () => {
    try {
      const response = await fetch(
        "https://playground.4geeks.com/contact/agendas/luismeneses/contacts"
      );
      const data = await response.json();
      setContacts(data.contacts || []);
    } catch (error) {
      console.error(error);
    }
  };

  const addContact = async (contact) => {
    try {
      const response = await fetch(
        "https://playground.4geeks.com/contact/agendas/luismeneses/contacts",
        {
          method: "POST",
          body: JSON.stringify(contact),
          headers: { "Content-Type": "application/json" },
        }
      );
      await response.json();
      getContacts();
    } catch (error) {
      console.error(error);
    }
  };

  const updateContact = async (contact) => {
    try {
      const response = await fetch(
        `https://playground.4geeks.com/contact/agendas/luismeneses/contacts/${contact.id}`,
        {
          method: "PUT",
          body: JSON.stringify(contact),
          headers: { "Content-Type": "application/json" },
        }
      );
      await response.json();
      getContacts();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteContact = async (id) => {
    try {
      await fetch(
        `https://playground.4geeks.com/contact/agendas/luismeneses/contacts/${id}`,
        {
          method: "DELETE",
        }
      );
      getContacts()
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <ContactContext.Provider
      value={{
        contacts,
        currentContact,
        setCurrentContact,
        addContact,
        updateContact,
        deleteContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export { ContactProvider, ContactContext };
