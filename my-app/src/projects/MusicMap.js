import React from "react"
import MusicMapDesktop from "../images/musicmap-desktop.png"
import MusicMapMobile from "../images/musicmap-mobile.png"

export default function MusicMap({handleModal}) {
  return (
    <div className="project-item">
      <div className="vl" />
      <div>
        <h3>MusicMap</h3>
        <a
          className="link"
          href="https://vincentktieu101.github.io/MusicMap/"
          target="_blank"
          rel="noreferrer"
        >
          Website
        </a>{" "}
        |{" "}
        <a
          className="link"
          href="https://github.com/vincentktieu101/MusicMap"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <br />
        <br />
        <button onClick={() => handleModal(MusicMapDesktop)}>
          <img
            className="project-img"
            src={MusicMapDesktop}
            alt="project-img"
          />
        </button>
        {" "}
        <button onClick={() => handleModal(MusicMapMobile)}>
          <img 
            className="project-img"
            src={MusicMapMobile}
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
