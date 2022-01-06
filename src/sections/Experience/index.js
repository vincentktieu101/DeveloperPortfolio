import React from "react";
import Container from "@material-ui/core/Container";
import ExperienceItem from "./ExperienceItem";
import experiences from "./experience-items";

export default function Experience() {
  return (
    <Container>
      <div id="experience">
        <h1 className="text-center">EXPERIENCE</h1>
        <hr />
        <br />
        <div id="experience-items">
          {experiences.map((experience) => (
            <ExperienceItem {...experience} />
          ))}
        </div>
      </div>
    </Container>
  );
}
