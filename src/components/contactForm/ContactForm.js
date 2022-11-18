import React from "react";

export const ContactForm = (props) => {

  return (
      <form onSubmit={props.handleSubmit}>
          <label>Name
            <input type="text" name="name" id="name" onChange={(e) => props.setName(e.target.value)} />
          </label>
          <label>Phone
            <input type="text" name="phone" id="phone" pattern="(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})" onChange={(e) => props.setPhone(e.target.value)} />
          </label>
          <label>Email
            <input type="text" name="email" id="email" onChange={(e) => props.setEmail(e.target.value)} />
          </label>
        <input type="submit" name="submit" value="Save"/>
      </form>
  );
};
