import React from "react"
import Container from "@material-ui/core/Container"
import HomeIcon from "@material-ui/icons/Home"
import PhoneIcon from "@material-ui/icons/Phone"
import Button from "@material-ui/core/Button"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import PostAddIcon from "@material-ui/icons/PostAdd"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import Resume from "../static/s21.2.pdf"

export default function Contact() {
  return (
    <div id="contact">
      <Container>
        <h1>CONTACT</h1>
        <hr align="left" />
        <br />
        <div>
          <h6>
            <HomeIcon fontSize="small" /> Address - Rosemead, Los Angeles
          </h6>
          <h6>
            <PhoneIcon fontSize="small" /> Phone - (626) 537-5590
          </h6>
          <a
            href="mailto:vincentktieu101@gmail.com"
            className="link-no-styles"
            target="_blank"
            rel="noreferrer"
          >
            <h6><MailOutlineIcon fontSize="small" /> Email - vincentktieu101@gmail.com</h6>
          </a>
          <a
            href="https://github.com/vincentktieu101"
            className="link-no-styles"
            target="_blank"
            rel="noreferrer"
          >
            <h6><GitHubIcon fontSize="small" /> Github - https://github.com/vincentktieu101</h6>
          </a>
          <a
            href="mailto:vincentktieu101@gmail.com"
            className="link-no-styles"
            target="_blank"
            rel="noreferrer"
          >
            <h6><LinkedInIcon fontSize="small" /> LinkedIn - https://www.linkedin.com/in/vincentktieu/</h6>
          </a>
        </div>
        <br />
        <div className="contact-buttons">
          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={() => window.open(Resume)}
            >
              <h6>
                <PostAddIcon /> Resume
              </h6>
            </Button>
          </div>
          <a
            href="mailto:vincentktieu101@gmail.com"
            className="link-no-styles"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="contained" color="primary">
              <h6>
                <MailOutlineIcon /> Email Me
              </h6>
            </Button>
          </a>
          <a
            href="https://github.com/vincentktieu101"
            className="link-no-styles"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="contained" color="primary">
              <h6>
                <GitHubIcon /> GitHub
              </h6>
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/vincentktieu/"
            className="link-no-styles"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="contained" color="primary">
              <h6>
                <LinkedInIcon /> LinkedIn
              </h6>
            </Button>
          </a>
        </div>
      </Container>
    </div>
  )
}
