import React from "react";
import ExperienceItem from "../ExperienceItem";

export default function PrivateMathTutor() {
  const type = "work";
  const title = "Private Math Tutor";
  const company = "Freelance"
  const location = "Los Angeles CA";
  const time = "February - June 2018";
  const text = `Prepared two students for an Algebra II placement exam, writing lesson plans and assigning homework.`;
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
