import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contacts, setContacts] = useState([{name: 'Callum', number: '0123 456 789', email: 'me@me.com'},{name: 'Chris', number: '1234 567 890', email: 'him@him.com'}])
  const [appointments, setAppointments] = useState([{title: 'Important Meeting', contact: 'Callum', date: '22nd November 2022', time: '2:00pm'}])


  const addContact = ( contactName, contactPhoneNumber, contactEmail ) => {
    setContacts(prev => {
      const newContact = {
        name: contactName,
        number: contactPhoneNumber,
        email: contactEmail
      }
      return [ ...prev, newContact ]
    })
  }

  const addAppointment = ( title, contactName, date, time ) => {
    setAppointments(prev => {
      const newAppointment = {
        title: title,
        contact: contactName,
        date: date,
        time: time
      }
      return [...prev, newAppointment]
    })
  }

  return (
    <>
      <nav>
        <NavLink to="contacts">Contacts</NavLink>
        <NavLink to="appointments">Appointments</NavLink>
      </nav>
      <main>
          <Routes>
            <Route path="/contacts" element={<ContactsPage contacts={contacts} addContact={addContact}/>} />
            <Route path="/appointments" element={<AppointmentsPage appointments={appointments} addAppointment={addAppointment} contacts={contacts}/>} />
          </Routes>
      </main>
    </>
  );
}

export default App;
