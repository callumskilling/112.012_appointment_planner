import React, { useState } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

/* Defined state variables for contact info and duplicate check, will test when I create the new contact form */
export const ContactsPage = (props) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const duplicateCheck = (name) => {
    props.contacts.some = (contact) => {
      return contact.name === name
    }
  }

  /* I am presuming this is a little hard code-ish, will come back and see if this can be refactored to be responsive to the fields in ContactForm */
  const handleSubmit = (e) => {
    e.preventDefault();

    setName(e.target.name)
    setPhone(e.target.phone)
    setEmail(e.target.email)

    if (duplicateCheck(name)) {
      return alert("Duplicate")
    } else {
      props.addContact(name, phone, email)
      document.getElementById("name").innerText = ""
      document.getElementById("phone").innerText = ""
      document.getElementById("email").innerText = ""
    }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm name={name} setName={setName} phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={props.contacts} />
      </section>
    </div>
  );
};
