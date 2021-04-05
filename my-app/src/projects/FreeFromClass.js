import React from "react"
import FreeFromClassDesktop from "../images/projects/freefromclass-desktop.png"
import FreeFromClassMobile2 from "../images/projects/freefromclass-mobile2.png"
import FreeFromClassMobile3 from "../images/projects/freefromclass-mobile3.png"
import FreeFromClassMobile from "../images/projects/freefromclass-mobile.png"

export default function FreeFromClass({handleModal}) {
  return (
    <div className="project-item">
      <div className="vl" />
      <div>
        <h3>FreeFromClass</h3>
        <a
          className="link"
          href="https://cs48-s20-s2-t2-prod.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          Website
        </a>{" "}
        |{" "}
        <a
          className="link"
          href="https://github.com/ucsb-cs48-s20/project-s2-t2-free"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <br />
        <br />
        <button onClick={() => handleModal(FreeFromClassDesktop)}>
          <img
            className="project-img"
            src={FreeFromClassDesktop}
            alt="project-img"
          />
        </button>
        {" "}
        <button onClick={() => handleModal(FreeFromClassMobile3)}>
          <img
            className="project-img"
            src={FreeFromClassMobile3}
            alt="project-img"
          />
        </button>
        {" "}
        <button onClick={() => handleModal(FreeFromClassMobile2)}>
          <img
            className="project-img"
            src={FreeFromClassMobile2}
            alt="project-img"
          />
        </button>
        {" "}
        <button onClick={() => handleModal(FreeFromClassMobile)}>
          <img
            className="project-img"
            src={FreeFromClassMobile}
            alt="project-img"
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
