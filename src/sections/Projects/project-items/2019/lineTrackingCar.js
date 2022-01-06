import React from "react";
import LineTrackingCarImage from "@images/projects/2019/linetrackingcar.jpeg";
import LineTrackingCarDesktop from "@images/projects/2019/linetrackingcar-desktop.png";

const lineTrackingCar = {
  title: "Line Tracking Car",
  links: {
    YouTube:
      "https://www.youtube.com/watch?v=SqduUmIUFV4&ab_channel=VincentTieu",
  },
  date: "January 2019 - March 2019",
  images: [LineTrackingCarImage, LineTrackingCarDesktop],
  description: (
    <React.Fragment>
      <div>
        The Line Tracking Car was a project from a ECE project class that I
        took. The project required me to learn breadboarding as well as tweak
        the linear regression algorithm to get the car to turn accordingly.
      </div>
    </React.Fragment>
  ),
  iconsList: ["OpenCV", "Arduino", "Python", "Cpp"],
};

export default lineTrackingCar;
