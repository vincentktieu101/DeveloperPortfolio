import React from "react";
import Container from "@material-ui/core/Container";
import UCSBBirdEyesView from "@images/main/ucsb-birdseyeview.jpg";
import Skills from "./Skills";
import { AboutMainSummary, AboutUcsbImage } from "./styles";
import NewLink from "@components/Link/NewLink";

export default function About() {
  return (
    <div id="about">
      <Container>
        <div className="flex-space-around" style={{ marginBottom: "15vh" }}>
          <AboutMainSummary className="fade-in">
            <h1 className="text-center">
              ABOUT ME <hr />
            </h1>
            <br />
            <div>
              Hi! I'm <b>Vincent Tieu</b>, a <b>software engineer</b> and{" "}
              <b>full-stack web developer</b>, based in <b>Los Angeles</b>. I am
              passionate about programming, whether that means starting a web
              project from scratch (like this online portfolio!) or developing
              an existing codebase. I program because I enjoy problem-solving
              and want a creative medium for achieving my goals.
            </div>
            <br />
            <div>
              I'm currently a 3rd year <b>Computer Science</b> major at{" "}
              <b>UC Santa Barbara</b> graduating <b>December '21</b>. I already
              taken classes in Data Structures & Algorithms, Operating Systems,
              Compilers, Databases, Artificial Intelligence, Web Development,
              HCI, Networking, etc.
            </div>
            <br />
            <div>
              However, I also enjoy learning outside of the classroom. Here is
              my portfolio for my personal projects, something I wish I could
              elaborate more of on my{" "}
              <NewLink
                href="https://drive.google.com/file/d/1C_F7pFjvxAtaEg8cRhYUk0UfXWM83t63/view?usp=sharing"
                className="link link-ltr"
              >
                resume
              </NewLink>
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
      <Skills />
    </div>
  );
}
