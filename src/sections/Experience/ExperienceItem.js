import React from "react";

export default function ExperienceItem(props) {
  const { sidebarIcon, title, location, year, text } = props;

  return (
    <div className="experience-item">
      <div className="experience-item__sidebar" />
      <div className="experience-item__body">
        <h3>Software Engineer Intern</h3>
        <h5>Syntiant, Irvine CA</h5>
        <br />
        <div className="experience-item__body-text">
          Worked full-time with the data team in implementing internal and
          external web applications using React, Redux, Javascript, HTML, and
          CSS.
        </div>
      </div>
    </div>
  );
}
