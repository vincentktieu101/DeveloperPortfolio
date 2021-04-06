import React from "react"
import TetrisDesktop from "../images/projects/tetris-desktop.png"
import TetrisDesktop2 from "../images/projects/tetris-desktop2.png"

export default function Tetris({ handleModal }) {
  return (
    <div className="project-item">
      <div className="vl" />
      <div>
        <h3>Tetris</h3>
        Links:{" "}
        <a
          className="link"
          href="https://github.com/vincentktieu101/Tetris"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <br />
        <br />
        <button onClick={() => handleModal(TetrisDesktop)}>
          <img className="project-img" src={TetrisDesktop} alt="project-img" />
        </button>{" "}
        <button onClick={() => handleModal(TetrisDesktop2)}>
          <img className="project-img" src={TetrisDesktop2} alt="project-img" />
        </button>
        <br />
        <br />
        <div className="project-desc">
          <div>January 2020</div>
          <br />
          <div>
            Wanting to learn algorithms and OOP, I created a Tetris clone from
            scatch using Pygame. I designed the game board, wrote the game rules
            which included algorithms for row clearing, shape swapping, and
            shape rotaton. There is also difficulty settings that users can
            tweak.
          </div>
        </div>
      </div>
    </div>
  )
}
