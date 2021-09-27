import React from "react";
import ExperienceItem from "../ExperienceItem";

export default function CodePath() {
  const type = "school";
  const title = "Codepath's Advanced SWE Course Graduate";
  const company = "CodePath";
  const location = "Remote";
  const time = "June 2021 - August 2021";
  const text = `Enrolled in a course in technical interviewing preparation. 
  Students solve challenging algorithm problems done in real whiteboard and coding interviews,
  network, and practice behavior interviews.`;
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
