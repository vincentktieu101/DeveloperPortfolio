import React from "react"
import TouchOfEleganceDesktop from "../images/projects/touchofelegance-desktop.png"
import TouchOfEleganceMobile from "../images/projects/touchofelegance-mobile.png"
import TouchOfEleganceMobile2 from "../images/projects/touchofelegance-mobile-2.png"

export default function TouchOfElegance({ handleModal }) {
  return (
    <div className="project-item">
      <div className="vl" />
      <div>
        <h3>Touch Of Elegance Website</h3>
        Links:{" "}
        <a
          className="link"
          href="https://touchofelegance.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Website
        </a>{" "}
        |{" "}
        <a
          className="link"
          href="https://github.com/vincentktieu101/TouchOfElegance"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <br />
        <br />
        <button onClick={() => handleModal(TouchOfEleganceDesktop)}>
          <img
            className="project-img"
            src={TouchOfEleganceDesktop}
            alt="project-img"
          />
        </button>{" "}
        <button onClick={() => handleModal(TouchOfEleganceMobile)}>
          <img
            className="project-img"
            src={TouchOfEleganceMobile}
            alt="project-img"
          />
        </button>{" "}
        <button onClick={() => handleModal(TouchOfEleganceMobile2)}>
          <img
            className="project-img"
            src={TouchOfEleganceMobile2}
            alt="project-img"
            rel="noreferrer"
          />
        </button>
        <br />
        <br />
        <div className="project-desc">
          <div>March, 2021 - Present</div>
          <div>
            This was my first time doing freelance work and I wrote the website
            from scratch in React GatsbyJS. The previous website that my aunt
            and uncle had for their shop was really outdated and I wanted to
            help them build a new one. The website includes some photos, a
            contact form (using EmailJS), and a menu that can be reached through
            a QR code.
          </div>
        </div>
      </div>
    </div>
  )
}
