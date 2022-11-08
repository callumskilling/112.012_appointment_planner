import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

  /*
  Implement functions to add data to
  contacts and appointments
  */

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
