import React, { useState } from "react"
import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"
import Modal from "@material-ui/core/Modal"
import { makeStyles } from "@material-ui/core/styles"
import Backdrop from "@material-ui/core/Backdrop"

import ReactCRAStarterCode from "../projects/ReactCRAStarterCode"
import TouchOfElegance from "../projects/TouchOfElegance"
import MusicMap from "../projects/MusicMap"
import FreeFromClass from "../projects/FreeFromClass"
import Tetris from "../projects/Tetris"
import Snake from "../projects/Snake"
import ChristmasCaneRevenge from "../projects/ChristmasCaneRevenge"

import VincentHeadShot from "../images/vincent-headshot.png"

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

export default function Projects() {
  const classes = useStyles()
  const [modal, setModal] = useState({
    open: false,
    image: VincentHeadShot,
  })

  const handleModal = image => {
    setModal({ image: image, open: true })
  }

  const handleClose = () => {
    setModal({ ...modal, open: false })
  }

  const [projectsViewing, setProjectsViewing] = useState(3)
  const projects = [
    <ReactCRAStarterCode key={0} handleModal={handleModal} />,
    <TouchOfElegance key={1} handleModal={handleModal} />,
    <MusicMap key={2} handleModal={handleModal} />,
    <FreeFromClass key={3} handleModal={handleModal} />,
    <Tetris key={4} handleModal={handleModal} />,
    <Snake key={5} handleModal={handleModal} />,
    <ChristmasCaneRevenge key={6} handleModal={handleModal} />,
  ]

  return (
    <div id="projects">
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={modal.open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <div className={classes.paper}>
          <img
            src={modal.image}
            alt="modal popup"
            className="project-modal-img"
          />
        </div>
      </Modal>
      <Container>
        <h1>PERSONAL PROJECTS</h1>
        <br />
        {projects.slice(0, projectsViewing)}
        {projects.length > projectsViewing && (
          <Button
            variant="contained"
            color="primary"
            onClick={() => setProjectsViewing(projectsViewing + 2)}
          >
            See More Projects
          </Button>
        )}
      </Container>
    </div>
  )
}
