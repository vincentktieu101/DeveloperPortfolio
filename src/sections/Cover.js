import React from "react";
import VincentHeadshot from "../images/main/vincent-headshot.png";
import Button from "@material-ui/core/Button";
import { Link } from "gatsby";

export default function Cover() {
  return (
    <div id="cover" className="fade-in">
      <div className="cover-background" />
      <img id="cover-hero-image" src={VincentHeadshot} alt="Vincent Tieu" />
      <div id="cover-body">
        <div id="cover-text">
          <h2>I'm VINCENT TIEU</h2>
          <div className="cover-animated-title">
            <h4 className="line">Full-Stack Web Developer</h4>
            <h4 className="line">Software Engineer</h4>
          </div>
        </div>
        <div id="cover-buttons">
          <a
            href={
              "https://drive.google.com/file/d/1C_F7pFjvxAtaEg8cRhYUk0UfXWM83t63/view?usp=sharing"
            }
            target="_blank"
            rel="noreferrer"
            className="link-no-styles cover-a"
          >
            <Button
              variant="contained"
              color="primary"
              className="cover-a__button"
            >
              <h6>RESUME</h6>
            </Button>
          </a>
          <Link to="/#contact" className="link-no-styles cover-a">
            <Button variant="contained" className="cover-a__button">
              <h6>CONTACT</h6>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
