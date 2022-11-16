import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contacts, setContacts] = useState([{name: 'Callum', number: '0123 456 789', email: 'me@me.com'}])
  const [appointments, setAppointments] = useState([])


  const addContact = ( contactName, contactPhoneNumber, contactEmail ) => {
    setContacts(prev => {
      const newContact = {
        name: contactName,
        number: contactPhoneNumber,
        email: contactEmail
      }
      return {
        ...prev, newContact
      }
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
      return {
        ...prev, newAppointment
      }
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
            <Route path="/appointments" element={<AppointmentsPage appointments={appointments} addAppointment={addAppointment}/>} />
          </Routes>
      </main>
    </>
  );
}

export default App;
