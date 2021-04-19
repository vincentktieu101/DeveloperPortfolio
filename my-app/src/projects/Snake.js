import React from "react"
import SnakeDesktop from "../images/projects/snake-desktop.png"
import SnakeDesktop2 from "../images/projects/snake-desktop2.png"
import Project from "../components/Project"

export default function Snake() {
  const title = "Snake"
  const links = {
    Github: "https://github.com/vincentktieu101/Snake",
    Guide: "https://docs.google.com/document/d/1OEufgKplRawOo76_liC3QqEdKu9eFTG4x-0CQsaFhbw/edit"
  }
  const date = "December 2018"
  const images = [SnakeDesktop, SnakeDesktop2]
  const description = (
    <React.Fragment>
      <div>
        I developed this project while I was still an Electrical Engineering
        major. This project has a special place in my heart because it helped me
        gain the confidence I needed to switch majors, especially since I knew
        that the path of a Computer Science major wasn't going to be an easy.
        Every now and again when I need inspiration, I boot up the game and
        enjoy this project I created.
      </div>
      <br />
      <div>
        I wrote this app in Python and Pygame. I also wrote a mini programming
        guide that you can check out
        <a
          href="https://docs.google.com/document/d/1OEufgKplRawOo76_liC3QqEdKu9eFTG4x-0CQsaFhbw/edit?usp=sharing"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          here
        </a>
        . I even designed an 8-bit music theme for the game!
      </div>
    </React.Fragment>
  )

  return (
    <Project
      title={title}
      links={links}
      date={date}
      images={images}
      description={description}
    />
  )
}
