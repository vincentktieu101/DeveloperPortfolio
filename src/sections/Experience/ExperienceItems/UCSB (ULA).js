import React from "react";
import ExperienceItem from "../ExperienceItem";

export default function UCSB_ULA() {
  const type = "work";
  const title = "Undergraduate Teaching Assistant";
  const company = "UCSB";
  const location = "Santa Barbara CA";
  const time = "March - June 2021";
  const text = `Worked part-time undergraduate learning assistant for CS148,
  Computer Science Project, where students learn about Agile development
  practices, testing, and software reliability. Students also build a self
  guided project together using techniques learned, most commonly using React, NoSQL,
  Flask / Express, Git, and app deployment.`
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
