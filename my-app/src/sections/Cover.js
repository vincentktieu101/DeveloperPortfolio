import React from "react"
import VincentHeadshot from "../images/vincent-headshot.png"

export default function Cover() {
  return (
    <div id="cover">
      <div className="cover-background" />
      <img className="cover-content" src={VincentHeadshot} alt="Vincent Tieu" />
      <div className="cover-text">
        <h2>I'm VINCENT TIEU</h2>
        <div className="cover-animated-title">
          <h4 className="line">Software Developer</h4>
          <h4 className="line">Full-Stack Web Developer</h4>
        </div>
      </div>
    </div>
  )
}
