import React from "react"
import ReactCRAStarterCodeDesktop from "../images/reactcrastartercode-desktop.png"

export default function ReactCRAStarterCode({handleModal}) {
  return (
    <div className="project-item">
      <div className="vl" />
      <div>
        <h3>ReactCRAStarterCode</h3>
        <a
          className="link"
          href="https://react-cra-starter-code.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          Website
        </a>{" "}
        |{" "}
        <a
          className="link"
          href="https://github.com/vincentktieu101/ReactCRAStarterCode"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <br />
        <br />
        <button onClick={() => handleModal(ReactCRAStarterCodeDesktop)}>
          <img
            className="project-img"
            src={ReactCRAStarterCodeDesktop}
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
