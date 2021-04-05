import React from "react"
import VincentHeadshot from "../images/vincent-headshot.png"

export default function Cover() {
  return (
    <div id="cover">
      <div className="cover-background" />
      <img
        className="cover-content"
        src={VincentHeadshot}
      />
      <div className="cover-text">
        <h2>I'm VINCENT TIEU,</h2>
        <div className="cover-animated-title">
          <h3 className="line">Software Developer</h3>
          <h3 className="line">Full-Stack Web Developer</h3>
        </div>
      </div>
    </div>
  )
}