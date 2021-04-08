import React from "react"
import ReactCRAStarterCodeDesktop from "../images/projects/reactcrastartercode-desktop.png"
import ReactCRAStarterCodeMobile from "../images/projects/reactcrastartercode-mobile.png"

export default function ReactCRAStarterCode({ handleModal }) {
  return (
    <div className="project-item">
      <div className="vl" />
      <div>
        <h3>ReactCRAStarterCode</h3>
        Links:{" "}
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
        </button>{" "}
        <button onClick={() => handleModal(ReactCRAStarterCodeMobile)}>
          <img
            className="project-img"
            src={ReactCRAStarterCodeMobile}
            alt="project-img"
          />
        </button>
        <br />
        <br />
        <div className="project-desc">
          <div>April, 2021 - Present</div>
          <div>
            In Spring of my junior year at UCSB, I became an Undergraduate
            Learning Assistant (ULA) for CS148 (Computer Science Project), in
            which students learn how to develop an application. Since most
            students wanted to create a React application, I wrote some starter
            code in React CRA (CreateReactApp) along with Google OAuth. I also
            wrote a mini guide on how to use React/Google OAuth on the Github
            repo.
          </div>
        </div>
      </div>
    </div>
  )
}
