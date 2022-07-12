import React from "react";
import Container from "@material-ui/core/Container";
import UCSBBirdEyesView from "@images/main/ucsb-birdseyeview.jpg";
import { AboutMainSummary, AboutUcsbImage } from "./styles";
import ExternalLink from "@components/Link/ExternalLink";
import resumeLink from "@objects/resume-link";

export default function About() {
  return (
    <div id="about">
      <Container>
        <div className="flex-space-around">
          <AboutMainSummary className="fade-in">
            <h1 className="text-center">
              ABOUT ME <hr />
            </h1>
            <br />
            <div>
              Hi! I'm <b>Vincent Tieu</b>, a <b>software engineer</b> and{" "}
              <b>full-stack web developer</b>, based in <b>Los Angeles</b>! I am
              passionate about programming, whether that means starting a web
              project from scratch (like this online portfolio!) or developing
              an existing codebase.
            </div>
            <br />
            <div>
              I'm a new graduate from <b>UC Santa Barbara</b> in{" "}
              <b>Computer Science</b>! I enjoy programming, from designing and
              developing frontends, building RESTful APIs, and optimizing
              backend operations. I'm most comfortable in the React and NodeJS
              frameworks.
            </div>
            <br />
            <div>
              Below, you can view my professional experience as well as some
              personal projects. For a quick summary, check out my{" "}
              <ExternalLink href={resumeLink} className="link link-ltr">
                resume
              </ExternalLink>
              .
            </div>
          </AboutMainSummary>
          <div className="fade-in">
            <AboutUcsbImage alt="UC Santa Barbara" src={UCSBBirdEyesView} />
            <br />
            <div style={{ color: "rgb(87, 86, 86)", margin: "5px 0px" }}>
              View of my University, UC Santa Barbara
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
