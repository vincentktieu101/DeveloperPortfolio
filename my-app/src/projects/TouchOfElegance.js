import React from "react"
import TouchOfEleganceDesktop from "../images/projects/touchofelegance-desktop.png"
import TouchOfEleganceMobile from "../images/projects/touchofelegance-mobile.png"
import TouchOfEleganceMobile2 from "../images/projects/touchofelegance-mobile-2.png"
import Project from "../components/Project"

export default function TouchOfElegance() {
  const title = "Touch Of Elegance"
  const links = {
    Website: "https://touchofelegance.netlify.app/",
    Github: "https://github.com/vincentktieu101/TouchOfElegance",
  }
  const images = [
    TouchOfEleganceDesktop,
    TouchOfEleganceMobile,
    TouchOfEleganceMobile2,
  ]
  const description = (
    <React.Fragment>
      <div>March, 2021 - Present</div>
      <br />
      <div>
        This was my first time doing freelance work and I wrote the website from
        scratch in React GatsbyJS. The previous website that my aunt had for her
        shop was really outdated and I wanted to help them build a new one. The
        website includes some photos, a contact form (using EmailJS), and a menu
        that can be reached through a QR code.
      </div>
    </React.Fragment>
  )

  return (
    <Project
      title={title}
      links={links}
      images={images}
      description={description}
    />
  )
}
