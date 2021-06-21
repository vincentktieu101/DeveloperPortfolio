import React from "react";
import ExperienceItem from "../ExperienceItem";

export default function UCSBComputerScience() {
  const type = "school";
  const title = "Bachelors in Computer Science";
  const company = "UCSB"
  const location = "Santa Barbara CA";
  const time = "September 2018 - December 2021";
  const text = `I'm currently a 3rd year Computer Science major at 
  UC Santa Barbara, (already taken / currently taking) classes in 
  Data Structures & Algorithms, Operating Systems, Compilers, 
  Databases, Artificial Intellegence, Web Development, HCI, Networking, etc.`;
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
