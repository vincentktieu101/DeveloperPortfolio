import React from "react"
import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import PostAddIcon from '@material-ui/icons/PostAdd'
import MailOutlineIcon from '@material-ui/icons/MailOutline';

export default function Contact() {
  return (
    <div id="contact">
      <Container>
        <h1>CONTACT</h1>
        <hr align="left" />
        <br />
        <div className="contact-buttons">
          <a href="https://github.com/vincentktieu101" className="link-no-styles" target="_blank" rel="noreferrer">
            <Button variant="contained" color="primary">
              <h6><GitHubIcon />{" "}GitHub</h6>
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/vincentktieu/" className="link-no-styles" target="_blank" rel="noreferrer">
            <Button variant="contained" color="primary">
              <h6><LinkedInIcon />{" "}LinkedIn</h6>
            </Button>
          </a>
          <a href="https://google.com" className="link-no-styles" target="_blank" rel="noreferrer">
            <Button variant="contained" color="primary">
              <h6><PostAddIcon />{" "}Resume</h6>
            </Button>
          </a>
          <a href="mailto:vincentktieu101@gmail.com" className="link-no-styles" target="_blank" rel="noreferrer">
            <Button variant="contained" color="primary">
              <h6><MailOutlineIcon />{" "}Email Me</h6>
            </Button>
          </a>
        </div>
        {/* <br />
        <div>Currently living at Rosemead, Los Angeles</div>
        <div>Call Me at (626) 537-5590</div>
        <div>Email Me at vincentktieu101@gmail.com</div> */}
      </Container>
    </div>
  )
}
