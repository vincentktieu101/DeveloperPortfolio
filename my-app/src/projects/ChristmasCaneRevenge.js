import React from "react"
import ChristmasCaneRevengeDesktop from "../images/projects/christmascanerevenge-desktop.png"
import Project from "../components/Project"

export default function ChristmasCaneRevenge() {
  const title = "ChristmasCaneRevenge"
  const links = {
    "Scratch URL": "https://scratch.mit.edu/projects/195203068/",
  }
  const date = "December 2017"
  const images = [ChristmasCaneRevengeDesktop]
  const description = (
    <React.Fragment>
      <div>This is a little bonus project for scrolling to the end :)</div>
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
