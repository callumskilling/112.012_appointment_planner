import React, { useState } from "react";

export const ContactsPage = () => {
  const [currentName, setCurrentName] = useState('');
  const [currentPhone, setCurrentPhone] = useState('');
  const [currentEmail, setCurrentEmail] = useState('');

  const handleNameChange = (e) => {
    const newName = e.target.value;
    const isDuplicate = this.props.contacts.some = (contact) => {
      return contact.name === newName
    }
    isDuplicate ? alert("DUPLICATE") : setCurrentName({newName}) ;
  }

  /* Defined state variables for contact info and duplicate check, will test when I create the new contact form */
  

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
