import React from "react";
import { useContext } from "react";
import { ContactContext } from "./ContactContext";
import { ContactCard } from "./ContactCard";
import { useNavigate } from "react-router-dom";

export const Contact = () => {
  const { contacts, setCurrentContact } = useContext(ContactContext);
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          setCurrentContact({});
          navigate("/contacto");
        }}
      >
        Add contact
      </button>
      <h1>Contactos</h1>
      {contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </div>
  );
};
