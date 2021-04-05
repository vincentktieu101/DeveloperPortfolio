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
    </div>
  )
}