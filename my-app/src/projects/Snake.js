import React from "react"
import SnakeDesktop from "../images/projects/snake-desktop.png"
import SnakeDesktop2 from "../images/projects/snake-desktop2.png"

export default function Snake({handleModal}) {
  return (
    <div className="project-item">
      <div className="vl" />
      <div>
        <h3>Snake</h3>
        <a
          className="link"
          href="https://github.com/vincentktieu101/Snake"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <br />
        <br />
        <button onClick={() => handleModal(SnakeDesktop)}>
          <img className="project-img" src={SnakeDesktop} alt="project-img" />
        </button>
        {" "}
        <button onClick={() => handleModal(SnakeDesktop2)}>
          <img className="project-img" src={SnakeDesktop2} alt="project-img" />
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
