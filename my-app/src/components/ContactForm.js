import React, { useState } from "react"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import { useSnackbar } from "notistack"
import emailjs from "emailjs-com"

export default function ContactForm() {
  const { enqueueSnackbar } = useSnackbar()
  const [contactForm, setContactForm] = useState({
    name: "",
    contact: "",
    message: "",
  })

  function submitForm(e) {
    e.preventDefault()

    if (contactForm.name === "") {
      enqueueSnackbar("Name Missing", { variant: "error" })
      return
    }

    if (contactForm.contact === "") {
      enqueueSnackbar("Contact Info Missing", { variant: "error" })
      return
    }

    if (contactForm.message === "") {
      enqueueSnackbar("Message Missing", { variant: "error" })
      return
    }

    emailjs
      .send(
        "Vincentktieu101Gmail",
        "VincentktieuContactForm",
        contactForm,
        "user_zSfjegoCh9d1rl8s1eCa9"
      )
      .then(
        response => {
          enqueueSnackbar("Message Sent! I'll answer back shortly :)", {
            variant: "success",
          })
        },
        err => {
          enqueueSnackbar("Try Again", { variant: "error" })
        }
      )

    setContactForm({
      name: "",
      contact: "",
      message: "",
    })
  }

  return (
    <div style={{marginBottom: "10vh"}}>
      <h1 className="text-center fade-in">
        CONTACT ME{" "}
        <span
          className="desktop-render emoji-shake"
        >
          <span role="img" aria-label="emoji" className="hover-shake">
            👋
          </span>
        </span>
      </h1>
      <hr />
      <br />
      <form onSubmit={submitForm}>
        <TextField
          label="Name"
          variant="outlined"
          style={{ width: "100%", marginBottom: "5px" }}
          value={contactForm.name}
          onChange={e => {
            setContactForm({ ...contactForm, name: e.target.value })
          }}
        />
        <TextField
          label="Contact Info"
          variant="outlined"
          style={{ width: "100%", marginBottom: "5px" }}
          value={contactForm.contact}
          onChange={e => {
            setContactForm({ ...contactForm, contact: e.target.value })
          }}
        />
        <TextField
          label="Send Me A Message!"
          variant="outlined"
          multiline
          rows={3}
          style={{ width: "100%", marginBottom: "5px" }}
          value={contactForm.message}
          onChange={e => {
            setContactForm({ ...contactForm, message: e.target.value })
          }}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ width: "100%", marginBottom: "5px" }}
          type="submit"
        >
          Submit
        </Button>
        <br />
      </form>
    </div>
  )
}
