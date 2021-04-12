import React from "react"
import Container from "@material-ui/core/Container"
import HomeIcon from "@material-ui/icons/Home"
import PhoneIcon from "@material-ui/icons/Phone"
import IconButton from "@material-ui/core/IconButton"
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
            <a
              href="https://www.google.com/maps/place/Rosemead,+CA/@34.064641,-118.1168945,13z/data=!3m1!4b1!4m5!3m4!1s0x80c2d074766c77b1:0xa0351d489643887c!8m2!3d34.0805651!4d-118.072846"
              className="link-no-styles"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton color="primary">
                <HomeIcon fontSize="small" />
              </IconButton>{" "}
              Address - Rosemead, Los Angeles
            </a>
          </h6>
          <h6>
            <a
              href="https://www.google.com/search?q=6265375590&source=hp&ei=LttzYIS5Icvb-gSCrYiYCA&iflsig=AINFCbYAAAAAYHPpPhPl2um35fphoMiN7ljN2XEbmanf&oq=6265375590&gs_lcp=Cgdnd3Mtd2l6EAM6AggAOg4ILhCxA
            xCDARDHARCjAjoICAAQsQMQgwE6CAguELEDEIMBOgUIABCxAzoFCC4QsQM6CwguELEDEIMBEJMCOg4ILhCxAxCDARDHARCvAToICC4QxwEQrwE6BAgAEB46BwgAEMkDEB46BggAEAUQHlD8BlioJWCnJ2gCcAB4AIABdYgBqQmSAQM2LjaYAQCgAQGqA
            Qdnd3Mtd2l6sAEA&sclient=gws-wiz&ved=0ahUKEwiEiMyZ_ffvAhXLrZ4KHYIWAoMQ4dUDCAg&uact=5"
              className="link-no-styles"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton color="primary">
                <PhoneIcon fontSize="small" />
              </IconButton>{" "}
              Phone - (626) 537-5590
            </a>
          </h6>
          <h6>
            <a
              href="mailto:vincentktieu101@gmail.com"
              className="link-no-styles"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton color="primary">
                <MailOutlineIcon fontSize="small" />
              </IconButton>{" "}
              Email - vincentktieu101@gmail.com
            </a>
          </h6>
          <h6>
            <a
              href="https://github.com/vincentktieu101"
              className="link-no-styles"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton color="primary">
                <GitHubIcon fontSize="small" />
              </IconButton>{" "}
              Github - https://github.com/vincentktieu101
            </a>
          </h6>
          <h6>
            <a
              href="mailto:vincentktieu101@gmail.com"
              className="link-no-styles"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton color="primary">
                <LinkedInIcon fontSize="small" />
              </IconButton>{" "}
              LinkedIn - https://www.linkedin.com/in/vincentktieu/
            </a>
          </h6>
          <h6>
            <div
              role="presentation"
              onClick={() => window.open(Resume)}
              className="cursor-hover"
            >
              <IconButton color="primary">
                <PostAddIcon fontSize="small" />
              </IconButton>{" "}
              Resume
            </div>
          </h6>
        </div>
      </Container>
    </div>
  )
}
