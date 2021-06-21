import React from "react";
import ExperienceItem from "../ExperienceItem";

export default function CodePath() {
  const type = "school";
  const title = "Student at Codepath's Advanced SWE Course";
  const company = "CodePath";
  const location = "Remote";
  const time = "June - August 2021";
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
