import React from "react";

export const ContactPicker = (props) => {
  const contactNames = props.contacts.map(contact => {
    return contact.name 
  })
  return (
    <select onChange={(e)=>{props.setContact(e.target.value)}}>
      <option value="">Choose Contact</option>
      {contactNames.map(name => {
        return <option value={name}>{name}</option>
      })}
    </select>
  );
};
