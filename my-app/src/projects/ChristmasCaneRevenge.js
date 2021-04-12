import React from "react"
import ChristmasCaneRevengeDesktop from "../images/projects/christmascanerevenge-desktop.png"
import Project from "../components/Project"

export default function ChristmasCaneRevenge() {
  const title = "ChristmasCaneRevenge"
  const links = {
    "Scratch URL": "https://scratch.mit.edu/projects/195203068/",
  }
  const images = [
    ChristmasCaneRevengeDesktop,
  ]
  const description = (
    <React.Fragment>
      <div>December 2017</div>
      <div>
        This is a little bonus project for scrolling to the end :). I wrote
        this bad boy before ever taking a real programming class!
      </div>
    </React.Fragment>
  )

  return <Project title={title} links={links} images={images} description={description} />
}