import React from "react"
import TouchOfEleganceDesktop from "../images/touchofelegance-desktop.png"
import TouchOfEleganceMobile from "../images/touchofelegance-mobile.png"
import TouchOfEleganceMobile2 from "../images/touchofelegance-mobile-2.png"

export default function MusicMap() {
  return (
    <div>
      <div className="project-item">
        <div className="vl" />
        <div>
          <h2>Touch Of Elegance Website</h2>
          <a className="link" href="https://touchofelegance.netlify.app/">
            Website
          </a>
          {" "}|{" "}
          <a className="link" href="https://github.com/vincentktieu101/TouchOfElegance">
            Github
          </a>
          <br />
          <br />
          <img 
            className="project-img"
            src={TouchOfEleganceDesktop}
            alt="project-img"
          />
          {" "}
          <img 
            className="project-img"
            src={TouchOfEleganceMobile}
            alt="project-img"
          />
          {" "}
          <img 
            className="project-img"
            src={TouchOfEleganceMobile2}
            alt="project-img"
          />
          <br />
          <br />
          <div className="project-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  )
}