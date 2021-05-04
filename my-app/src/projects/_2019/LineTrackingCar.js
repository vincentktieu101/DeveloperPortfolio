import React from "react"
import LineTrackingCarImage from "../../images/projects/_2019/linetrackingcar.jpeg"
import LineTrackingCarDesktop from "../../images/projects/_2019/linetrackingcar-desktop.png"
import Project from "../../components/Project"
import getTechIcons from "../getTechIcons"

export default function LineTrackingCar() {
  const title = "Line Tracking Car"
  const links = {
    YouTube:
      "https://www.youtube.com/watch?v=SqduUmIUFV4&ab_channel=VincentTieu",
  }
  const date = "January 2019 - March 2019"
  const images = [LineTrackingCarImage, LineTrackingCarDesktop]
  const description = (
    <React.Fragment>
      <div>
        The Line Tracking Car was a project from a ECE project class that I
        took. The project required me to learn breadboarding as well as tweak
        the linear regression algorithm so get the car to turn accordingly.
      </div>
    </React.Fragment>
  )
  const icons = {
    OpenCV: true,
    Arduino: true,
    Python: true,
  }
  return (
    <React.Fragment>
      <Project
        title={title}
        links={links}
        date={date}
        images={images}
        description={description}
        techIcons={getTechIcons(icons)}
      />
    </React.Fragment>
  )
}
