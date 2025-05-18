import React, { useState } from "react";
import { useContext } from "react";
import { ContactContext } from "./ContactContext";
import { useNavigate } from "react-router-dom";

export const AddContact = () => {
  const { addContact, updateContact, currentContact } =
    useContext(ContactContext);
  const navigate = useNavigate();
  const [name, setName] = useState(currentContact.name || "");
  const [phone, setPhone] = useState(currentContact.phone || "");
  const [email, setEmail] = useState(currentContact.email || "");
  const [address, setAddress] = useState(currentContact.address || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = { name, phone, email, address };
    if (currentContact.id) {
      updateContact({ ...currentContact, ...contact });
    } else {
      addContact(contact);
    }
    navigate("/");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          className="form-control"
          id="fullName"
          placeholder="full Namne"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          className="form-control"
          id="phone"
          placeholder="Phone"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
      </div>
      <div className="form-group">
        <label htmlFor="address">address</label>
        <input
          type="text"
          className="form-control"
          id="address"
          placeholder="Address"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
