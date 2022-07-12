import React from "react";
import ExperienceItem from "./ExperienceItem";
import experiences from "@objects/experiences";

export default function Experience() {
  return (
    <div id="experience">
      <h1 className="text-center">EXPERIENCE</h1>
      <hr />
      <br />
      <div id="experience-items">
        {experiences.map((experience, i) => (
          <ExperienceItem key={i} {...experience} />
        ))}
      </div>
    </div>
  );
}
