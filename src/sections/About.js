import React from "react";
import Container from "@material-ui/core/Container";
import UCSBBirdEyesView from "../images/main/ucsb-birdseyeview.jpg";
import getResume from "../static/getResume";
import Computer from "../images/main/computer.webp";
import Backend from "../images/main/backend.webp";
import Design from "../images/main/design.webp";
import Product from "../images/main/product.webp";

export default function About() {
  return (
    <div id="about">
      <Container>
        <div className="flex-space-around" style={{ marginBottom: "10vh" }}>
          <div className="about-text fade-in">
            <h1 className="text-center">
              ABOUT ME <hr />
            </h1>
            <br />
            <div>
              Hi! I'm <b>Vincent Tieu</b>, a <b>software engineer</b> and{" "}
              <b>full-stack web developer</b>, based in <b>Los Angeles</b>. I am
              passionate about programming, whether that means starting a web
              project from scratch (like this online portfolio!) or developing
              an existing code base. I am a programmer because I enjoy problem
              solving and view programming as a creative medium for achieving my
              goals.
            </div>
            <br />
            <div>
              I'm currently a 3rd year <b>Computer Science</b> major at{" "}
              <b>UC Santa Barbara</b>, (already taken / currently taking)
              classes in Data Structures & Algorithms, Operating Systems,
              Compilers, Databases, Artificial Intellegence, Web Development,
              HCI, Networking, etc.
            </div>
            <br />
            <div>
              However, I also enjoy learning outside of the classroom. Here is
              my online portfolio for my personal projects, something I wish I
              could elaborate more of on my{" "}
              <a
                href={getResume()}
                className="link link-ltr"
                target="_blank"
                rel="noreferrer"
              >
                <b>resume</b>
              </a>
              .
            </div>
            <br />
          </div>
          <div className="fade-in">
            <img
              alt="UC Santa Barbara"
              src={UCSBBirdEyesView}
              className="about-skills"
            />
            <br />
            <div style={{ color: "rgb(87, 86, 86)", margin: "5px 0px" }}>
              View of my University, UC Santa Barbara
            </div>
          </div>
        </div>
        <div className="flex-space-around">
          <div className="about-text fade-in">
            <h4>
              <img src={Computer} style={{ marginRight: "12px" }} />
              Frontend Development
            </h4>
            <div>
              I enjoy building functional interfaces into a detailed
              architechiture that promotes rapid continous development. I'm
              proficient with HTML, CSS, and Javascript as well as have
              experience with frameworks like React, NodeJS, Redux, Flask, and
              Django.
            </div>
          </div>
          <div className="about-text fade-in">
            <h4>
              <img src={Design} style={{ marginRight: "12px" }} />
              User Experience & Design
            </h4>
            <div>
              I have learned about UI/UX by planning and designing my personal
              projects. It is important to not only have a website that works
              but is also intuitive and enjoyable to use. I am familiar with
              concepts like responsive design, interaction design, and
              accessibility.
            </div>
          </div>
          <div className="about-text fade-in">
            <h4>
              <img src={Backend} style={{ marginRight: "12px" }} />
              Backend Development
            </h4>
            <div>
              From my background in CS, I have practice with Object-Oriented
              Programming, Data Structures & Algorithms, Database Design &
              Implementation, and APIs.
            </div>
          </div>
          <div className="about-text fade-in">
            <h4>
              <img src={Product} style={{ marginRight: "12px" }} />
              Product Development
            </h4>
            <div>
              I've developed plenty of apps starting from scratch where I've
              taken them through planning, designing, technology, deployment,
              and production. I'm comfortable working in teams, communicating
              through Agile practices, and using Git for good version control
              and code review practices.
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
