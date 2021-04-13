import React from "react"
import Container from "@material-ui/core/Container"
import ContactForm from "../components/ContactForm"
import ContactInfo from "../components/ContactInfo"

export default function Contact() {
  return (
    <div id="contact">
      <Container>
        <h1 className="text-center">CONTACT</h1>
        <hr />
        <br />
        <br />
        <div className="flex-space-around">
          <ContactForm />
          <ContactInfo />
        </div>
      </Container>
    </div>
  )
}
