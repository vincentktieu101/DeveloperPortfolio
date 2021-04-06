import React from "react"
import ChristmasCaneRevengeDesktop from "../images/projects/christmascanerevenge-desktop.png"

export default function ChristmasCaneRevenge({ handleModal }) {
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
          <img
            className="project-img"
            src={ChristmasCaneRevengeDesktop}
            alt="project-img"
          />
        </button>
        <br />
        <br />
        <div className="project-desc">
          <div>December 2017</div>
          <div>
            This is a little bonus project for scrolling to the end :). I wrote
            this bad boy before ever taking a real programming class!
          </div>
        </div>
      </div>
    </div>
  )
}
