import React from "react";
import { useContext } from "react";
import { ContactContext } from "./ContactContext";
import { useNavigate } from "react-router-dom";

export const ContactCard = ({ contact }) => {
  const { deleteContact, setCurrentContact } = useContext(ContactContext);
  const navigate = useNavigate();
  return (
    <div>
      <h2>{contact.name}</h2>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
      <p>{contact.address}</p>
      <button
        onClick={() => {
          setCurrentContact(contact);
          navigate("/contacto");
        }}
      >
        Editar
      </button>
      <button onClick={() => deleteContact(contact.id)}>Eliminar</button>
    </div>
  );
};
