import React from "react"
import ChristmasCaneRevengeDesktop from "../images/projects/christmascanerevenge-desktop.png"

export default function ChristmasCaneRevenge({handleModal}) {
  return (
    <div className="project-item">
      <div className="vl" />
      <div>
        <h3>Christmas Cane Revenge</h3>
        Links:{" "}
        <a
          className="link"
          href="https://scratch.mit.edu/projects/195203068/"
          target="_blank"
          rel="noreferrer"
        >
          Scratch URL
        </a>
        <br />
        <br />
        <button onClick={() => handleModal(ChristmasCaneRevengeDesktop)}>
          <img className="project-img" src={ChristmasCaneRevengeDesktop} alt="project-img" />
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
