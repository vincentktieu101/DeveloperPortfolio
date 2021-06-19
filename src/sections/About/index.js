import React from "react";
import Container from "@material-ui/core/Container";
import UCSBBirdEyesView from "../../images/main/ucsb-birdseyeview.jpg";
import AboutInfo from "./AboutIntro";
import AboutSkills from "./AboutSkills";

export default function About() {
  return (
    <div id="about">
      <Container>
        <div className="flex-space-around" style={{ marginBottom: "15vh" }}>
          <div id="about-main-summary" className="fade-in">
            <h1 className="text-center">
              ABOUT ME <hr />
            </h1>
            <br />
            <AboutInfo />
          </div>
          <div className="fade-in">
            <img
              alt="UC Santa Barbara"
              src={UCSBBirdEyesView}
              id="about-ucsb-image"
            />
            <br />
            <div style={{ color: "rgb(87, 86, 86)", margin: "5px 0px" }}>
              View of my University, UC Santa Barbara
            </div>
          </div>
        </div>
      </Container>
      <AboutSkills />
    </div>
  );
}
