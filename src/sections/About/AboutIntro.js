import React from "react";
import getResume from "../../static/getResume";

export default function AboutIntro() {
  return (
    <React.Fragment>
      <div>
        Hi! I'm <b>Vincent Tieu</b>, a <b>software engineer</b> and{" "}
        <b>full-stack web developer</b>, based in <b>Los Angeles</b>. I am
        passionate about programming, whether that means starting a web project
        from scratch (like this online portfolio!) or developing an existing
        code base. I program because I enjoy problem solving and want
        a creative medium for achieving my goals.
      </div>
      <br />
      <div>
        I'm currently a 3rd year <b>Computer Science</b> major at{" "}
        <b>UC Santa Barbara</b>, (already taken / currently taking) classes in
        Data Structures & Algorithms, Operating Systems, Compilers, Databases,
        Artificial Intellegence, Web Development, HCI, Networking, etc.
      </div>
      <br />
      <div>
        However, I also enjoy learning outside of the classroom. Here is my
        online portfolio for my personal projects, something I wish I could
        elaborate more of on my{" "}
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
    </React.Fragment>
  );
}
