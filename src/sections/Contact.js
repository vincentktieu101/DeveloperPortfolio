import React from "react";
import Container from "@material-ui/core/Container";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";

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
