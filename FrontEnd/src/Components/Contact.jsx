import React from "react";

const Contact = () => (
  <fieldset style={fieldset}>
    <legend style={legend}>Contact</legend>
    <div>
      <label for="contact-email-address" />
      <input
      
        id="contact-email-address"
        style={inputField}
        type="text"
        name="email"
        placeholder="Email"
      />
    </div>
  </fieldset>
);

const fieldset = {
  textAlign: "initial",
  marginBottom: "20px",
  paddingBottom: "15px",


};

const legend = {

   fontSize: "17px", 
   fontWeight: "500",
    textAlign: "center" 
};

const inputField = {
  boxSizing: "border-box",
  fontSize: "14px",
  letterSpacing: "1px",
  padding: " 20px",
  width: "100%",border:"1px solid black"
};

export default Contact;
