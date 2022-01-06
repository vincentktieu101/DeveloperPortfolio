import React from "react";
import Container from "@material-ui/core/Container";
import ExperienceItem from "./ExperienceItem";
import experienceItems from "./experience-items";

export default function Experience() {
  return (
    <Container>
      <div id="experience">
        <h1 className="text-center">EXPERIENCE</h1>
        <hr />
        <br />
        <div id="experience-items">
          {experienceItems.map((experience) => (
            <ExperienceItem {...experience} />
          ))}
        </div>
      </div>
    </Container>
  );
}
