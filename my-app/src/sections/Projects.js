import React, { useState } from "react"
import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"
import ReactCRAStarterCode from "../projects/ReactCRAStarterCode"
import TouchOfElegance from "../projects/TouchOfElegance"
import MusicMap from "../projects/MusicMap"
import FreeFromClass from "../projects/FreeFromClass"
import Tetris from "../projects/Tetris"
import Snake from "../projects/Snake"

export default function Projects() {
  const [projectsViewing, setProjectsViewing] = useState(3)
  const projects = [
    <ReactCRAStarterCode />,
    <TouchOfElegance />,
    <MusicMap />,
    <FreeFromClass />,
    <Tetris />,
    <Snake />,
  ]

  return (
    <div id="projects">
      <Container>
        <h1><b>PROJECTS</b></h1>
        <br />
        {projects.slice(0, projectsViewing)}
        {
          projects.length >= projectsViewing &&
          <Button variant="containedPrimary" onClick={() => setProjectsViewing(projectsViewing + 2)}>
            See More Projects
          </Button>
        }
      </Container>
    </div>
  )
}