import React from "react"
import FreeFromClassDesktop from "../images/freefromclass-desktop.png"
import FreeFromClassMobile from "../images/freefromclass-mobile.png"

export default function FreeFromClass() {
  return (
      <div className="project-item">
        <div className="vl" />
        <div>
          <h3>FreeFromClass</h3>
          <a className="link" href="https://cs48-s20-s2-t2-prod.herokuapp.com/" target="_blank">
            Website
          </a>
          {" "}|{" "}
          <a className="link" href="https://github.com/ucsb-cs48-s20/project-s2-t2-free" target="_blank">
            Github
          </a>
          <br />
          <br />
          <img 
            className="project-img"
            src={FreeFromClassDesktop}
            alt="project-img" 
          />
          {" "}
          <img 
            className="project-img"
            src={FreeFromClassMobile}
            alt="project-img"
          />
          <br />
          <br />
          <div className="project-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
  )
}