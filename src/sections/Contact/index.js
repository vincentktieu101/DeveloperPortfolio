import React from "react";
import Container from "@material-ui/core/Container";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <div id="contact">
      <Container>
        <div className="flex-space-around">
          <ContactForm />
          <ContactInfo />
        </div>
      </Container>
    </div>
  );
}
