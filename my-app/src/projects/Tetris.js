import React from "react"
import TetrisDesktop from "../images/projects/tetris-desktop.png"
import TetrisDesktop2 from "../images/projects/tetris-desktop2.png"
import Project from "../components/Project"

export default function Tetris() {
  const title = "Tetris"
  const links = {
    Github: "https://github.com/vincentktieu101/Tetris",
  }
  const images = [TetrisDesktop, TetrisDesktop2]
  const description = (
    <React.Fragment>
      <div>January 2019</div>
      <br />
      <div>
        Wanting to learn more about algorithms and OOP, I created a Tetris clone
        from scatch using Python and Pygame. I designed the game board, wrote
        the game rules which included algorithms for row clearing, shape
        swapping, and shape rotaton. There is also difficulty settings that
        users can tweak.
      </div>
    </React.Fragment>
  )

  return (
    <Project
      title={title}
      links={links}
      images={images}
      description={description}
    />
  )
}
