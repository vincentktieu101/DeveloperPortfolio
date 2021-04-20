import React from "react"
import Container from "@material-ui/core/Container"
import UCSBBirdEyesView from "../images/ucsb-birdseyeview.jpg"

export default function About() {
  return (
    <div id="about">
      <Container>
        <div className="flex-space-around">
          <div className="about-text fade-in">
            <h1 className="text-center">
              ABOUT ME{" "}
              <span className="emoji-shake">
                <span role="img" aria-label="emoji" className="hover-shake">
                  📚
                </span>
              </span>
            </h1>
            <hr />
            <br />
            <div>
              Hi! I'm <b>Vincent Tieu</b>, a <b>software engineer</b> and{" "}
              <b>full-stack web developer</b>, based in <b>Los Angeles</b>. I am
              passionate about programming, whether that means starting a web
              project from stratch (like this online portfolio!) or developing
              an existing code base. I am a programmer because I enjoy problem
              solving and view programming as a creative medium for achieving my
              goals.
            </div>
            <br />
            <div>
              I'm currently a 3rd year <b>Computer Science</b> major at{" "}
              <b>UC Santa Barbara</b>, (already taken / currently taking)
              classes in Operating Systems, Compilers, Databases, Artificial
              Intellegence, Web Development, HCI, Networking, etc.
            </div>
            <br />
            <div>
              However, I also enjoy learning outside of the classroom. Here is
              my online portfolio for my personal projects, something I wish I
              could elaborate more of on my resume.
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
      </Container>
    </div>
  )
}
