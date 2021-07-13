import React from "react";
import ExperienceItem from "../ExperienceItem";

export default function Syntiant() {
  const type = "work";
  const title = "Full-Stack Developer Intern";
  const company = "Syntiant";
  const location = "Irvine CA";
  const time = "June - September 2021";
  const text = `Worked full-time with the data team in implementing internal and 
  external web applications using React, Redux, Javascript, HTML, and CSS.`;
  return (
    <ExperienceItem
      type={type}
      title={title}
      company={company}
      location={location}
      time={time}
      text={text}
    />
  );
}
