import React from "react"
import Container from "@material-ui/core/Container"
import ReactCRAStarterCode from "../projects/ReactCRAStarterCode"
import TouchOfElegance from "../projects/TouchOfElegance"
import MusicMap from "../projects/MusicMap"
import Tetris from "../projects/Tetris"

export default function Projects() {
  return (
    <div id="projects">
      <Container>
        <h1><b>PROJECTS</b></h1>
        <br />
        <ReactCRAStarterCode />
        <TouchOfElegance />
        <MusicMap />
        <Tetris />
      </Container>
    </div>
  )
}