import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contacts, setContacts] = useState([])
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

  return (
    <>
      <nav>
        <NavLink to="contacts">Contacts</NavLink>
        <NavLink to="appointments">Appointments</NavLink>
      </nav>
      <main>
          <Routes>
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/appointments" element={<AppointmentsPage />} />
          </Routes>
      </main>
    </>
  );
}

export default App;
