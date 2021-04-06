import React from "react"
import SnakeDesktop from "../images/projects/snake-desktop.png"
import SnakeDesktop2 from "../images/projects/snake-desktop2.png"

export default function Snake({ handleModal }) {
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
        </a>{" "}
        |{" "}
        <a
          href="https://docs.google.com/document/d/1OEufgKplRawOo76_liC3QqEdKu9eFTG4x-0CQsaFhbw/edit?usp=sharing"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          Programming Guide
        </a>
        <br />
        <br />
        <button onClick={() => handleModal(SnakeDesktop)}>
          <img className="project-img" src={SnakeDesktop} alt="project-img" />
        </button>{" "}
        <button onClick={() => handleModal(SnakeDesktop2)}>
          <img className="project-img" src={SnakeDesktop2} alt="project-img" />
        </button>
        <br />
        <br />
        <div className="project-desc">
          <div>December 2019</div>
          <br />
          <div>
            I developed this project while I was still an Electrical Engineering
            major. This project has a special place in my heart because it
            helped me gain the confidence I needed to switch majors, especially
            since I knew that the path of a Computer Science major wasn't going
            to be an easy. Every now and again when I need inspiration, I boot
            up the game and enjoy this project I created.
          </div>
          <div>
            I also wrote a mini programming guide that you can checkout
            <a
              href="https://docs.google.com/document/d/1OEufgKplRawOo76_liC3QqEdKu9eFTG4x-0CQsaFhbw/edit?usp=sharing"
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              here
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  )
}
