import React from "react"
import SnakeDesktop from "../images/projects/snake-desktop.png"
import SnakeDesktop2 from "../images/projects/snake-desktop2.png"

export default function Snake({handleModal}) {
  return (
    <div className="project-item">
      <div className="vl" />
      <div>
        <h3>Snake</h3>
        Links:{" "}
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
          {/* https://docs.google.com/document/d/1OEufgKplRawOo76_liC3QqEdKu9eFTG4x-0CQsaFhbw/edit?usp=sharing */}
        </div>
      </div>
    </div>
  )
}
