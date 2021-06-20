import React from "react";
import Container from "@material-ui/core/Container";

export default function Experience() {
  return (
    <Container>
      <div id="experience">
        <h1 className="text-center">EXPERIENCE</h1>
        <hr />
        <br />
        <div id="experience-items">
          <div className="experience-item">
            <div className="experience-item__sidebar" />
            <div className="experience-item__body">
              <h4>Software Engineer Intern</h4>
              <h6>Syntiant, Irvine CA</h6>
              <div className="experience-item__body-text">
                Worked full-time with the data team in implementing internal and
                external web applications using React, Redux, Javascript, HTML,
                and CSS.
              </div>
            </div>
          </div>
          <div className="experience-item">
            <div className="experience-item__sidebar" />
            <div className="experience-item__body">
              <h4>Undergraduate Teaching Assistant</h4>
              <h6>UC Santa Barbara, Santa Barbara CA</h6>
              <div className="experience-item__body-text">
                Worked part-time undergraduate learning assistant for CS148,
                Computer Science Project, where students learn about software
                development practices, testing, and software reliability.
                Students also build a self guided project together using
                techniques learned.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
