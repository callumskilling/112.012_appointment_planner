import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = (props) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={props.handleSubmit}>
    <label>Title
      <input type="text" name="title" id="title" onChange={(e) => props.setTitle(e.target.value)} />
    </label>
    <label>Date
      <input type="date" id="date" name="date" min={getTodayString()} onChange={(e) => props.setDate(e.target.value)} />
    </label>
    <label>Time
      <input type="time" name="time" id="time" onChange={(e) => props.setTime(e.target.value)} />
    </label>
    <ContactPicker contacts={props.contacts} setContact={props.setContact} />
  <input type="submit" name="submit" value="Save"/>
</form>
  );
};
