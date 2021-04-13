import React from "react"
import LineTrackingCarImage from "../images/projects/linetrackingcar.jpeg"
import LineTrackingCarDesktop from "../images/projects/linetrackingcar-desktop.png"
import Project from "../components/Project"

export default function LineTrackingCar() {
  const title = "Line Tracking Car"
  const links = {
    YouTube: "https://www.youtube.com/watch?v=SqduUmIUFV4&ab_channel=VincentTieu",
  }
  const images = [LineTrackingCarImage, LineTrackingCarDesktop]
  const description = (
    <React.Fragment>
      <div>January 2019 - March 2019</div>
      <br />
      <div>
        The Line Tracking Car was a project from a ECE project class that I took.
        The project required me to learn breadboarding as well as tweak the
        linear regression algorithm so get the car to turn accordingly.
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
