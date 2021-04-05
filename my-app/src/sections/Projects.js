import React, { useState } from "react"
import Container from "@material-ui/core/Container"
import Modal from "@material-ui/core/Modal"
import { makeStyles } from "@material-ui/core/styles"
import Backdrop from "@material-ui/core/Backdrop"
import Button from "@material-ui/core/Button"
import ReactCRAStarterCode from "../projects/ReactCRAStarterCode"
import TouchOfElegance from "../projects/TouchOfElegance"
import MusicMap from "../projects/MusicMap"
import FreeFromClass from "../projects/FreeFromClass"
import Tetris from "../projects/Tetris"
import Snake from "../projects/Snake"

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
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const [projectsViewing, setProjectsViewing] = useState(3)
  const projects = [
    <ReactCRAStarterCode key={0} />,
    <TouchOfElegance key={1} />,
    <MusicMap key={2} />,
    <FreeFromClass key={3} />,
    <Tetris key={4} />,
    <Snake key={5} />,
  ]

  return (
    <div id="projects">
      <button type="button" onClick={handleOpen}>
        react-transition-group
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <div className={classes.paper}>
          <h2 id="transition-modal-title">Transition modal</h2>
          <p id="transition-modal-description">
            react-transition-group animates me.
          </p>
        </div>
      </Modal>
      <Container>
        <h1>PERSONAL PROJECTS</h1>
        <br />
        {projects.slice(0, projectsViewing)}
        {projects.length >= projectsViewing && (
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
