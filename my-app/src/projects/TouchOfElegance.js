import React from "react"
import TouchOfEleganceDesktop from "../images/projects/touchofelegance-desktop.png"
import TouchOfEleganceMobile from "../images/projects/touchofelegance-mobile.png"
import TouchOfEleganceMobile2 from "../images/projects/touchofelegance-mobile-2.png"

export default function TouchOfElegance({handleModal}) {
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
        </button>
        {" "}
        <button onClick={() => handleModal(TouchOfEleganceMobile)}>
          <img
            className="project-img"
            src={TouchOfEleganceMobile}
            alt="project-img"
          />
        </button>
        {" "}
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </div>
  )
}
