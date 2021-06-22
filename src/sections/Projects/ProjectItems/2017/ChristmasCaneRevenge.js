import React from "react";
import ChristmasCaneRevengeDesktop from "../../../../images/projects/2017/christmascanerevenge-desktop.png";
import Project from "../../ProjectItem";
import getTechIconsList from "../getTechIconsList";

export default function ChristmasCaneRevenge() {
  const title = "ChristmasCaneRevenge";
  const links = {
    "Scratch URL": "https://scratch.mit.edu/projects/195203068/",
  };
  const date = "December 2017";
  const images = [ChristmasCaneRevengeDesktop];
  const description = (
    <React.Fragment>
      <div>This is a little bonus project for scrolling to the end :)</div>
    </React.Fragment>
  );
  const iconsList = ["Scratch"];
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
