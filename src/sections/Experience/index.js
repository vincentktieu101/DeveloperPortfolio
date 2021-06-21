import React from "react";
import Container from "@material-ui/core/Container";
import ExperienceItems from "./ExperienceItems/index";

export default function Experience() {
  return (
    <Container>
      <div id="experience">
        <h1 className="text-center">EXPERIENCE</h1>
        <hr />
        <br />
        <ExperienceItems />
      </div>
    </Container>
  );
}
