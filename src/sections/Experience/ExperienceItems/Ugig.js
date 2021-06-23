import React from "react";
import ExperienceItem from "../ExperienceItem";

export default function Syntiant() {
  const type = "work";
  const title = "Web Developer Intern";
  const company = "Ugig";
  const location = "Santa Barbara CA";
  const time = "February - May 2020";
  const text = `Assisted in developing, creating, and adjusting web features and
  components within Django. Redesigned important web forms to enhance user 
  experience and improve communication with customers and clients.`;
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
