import React from "react";
import LineTrackingCarImage from "../../../../images/projects/2019/linetrackingcar.jpeg";
import LineTrackingCarDesktop from "../../../../images/projects/2019/linetrackingcar-desktop.png";
import Project from "../../ProjectItem";
import getTechIconsList from "../getTechIconsList";

export default function LineTrackingCar() {
  const title = "Line Tracking Car";
  const links = {
    YouTube:
      "https://www.youtube.com/watch?v=SqduUmIUFV4&ab_channel=VincentTieu",
  };
  const date = "January 2019 - March 2019";
  const images = [LineTrackingCarImage, LineTrackingCarDesktop];
  const description = (
    <React.Fragment>
      <div>
        The Line Tracking Car was a project from a ECE project class that I
        took. The project required me to learn breadboarding as well as tweak
        the linear regression algorithm to get the car to turn accordingly.
      </div>
    </React.Fragment>
  );
  const iconsList = ["OpenCV", "Arduino", "Python", "Cpp"];
  return (
    <React.Fragment>
      <Project
        title={title}
        links={links}
        date={date}
        images={images}
        description={description}
        techIcons={getTechIconsList(iconsList)}
      />
    </React.Fragment>
  );
}
