import React from "react"
import TetrisDesktop from "../../images/projects/2019/tetris-desktop.png"
import TetrisDesktop2 from "../../images/projects/2019/tetris-desktop2.png"
import Project from "../../components/Project"
import getTechIcons from "../getTechIcons"

export default function Tetris() {
  const title = "Tetris"
  const links = {
    Github: "https://github.com/vincentktieu101/Tetris",
  }
  const date = "January 2019"
  const images = [TetrisDesktop, TetrisDesktop2]
  const description = (
    <React.Fragment>
      <div>
        Wanting to learn more about algorithms and OOP, I created a Tetris clone
        from scatch using Python and Pygame. I designed the game board, wrote
        the game rules which included algorithms for row clearing, shape
        swapping, and shape rotaton. There is also difficulty settings that
        users can tweak.
      </div>
    </React.Fragment>
  )
  const icons = {
    Pygame: true,
    Python: true,
  }
  return (
    <Project
      title={title}
      links={links}
      date={date}
      images={images}
      description={description}
      techIcons={getTechIcons(icons)}
    />
  )
}
