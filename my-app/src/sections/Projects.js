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
    maxWidth: "100%",
    maxHeight: "100%",
    margin: "20px",
  },
}))

export const ModalContext = React.createContext()

export default function Projects() {
  const classes = useStyles()
  const [modal, setModal] = useState({
    open: false,
    image: null,
  })

  const handleModal = image => {
    setModal({ image: image, open: true })
  }

  const handleClose = () => {
    setModal({ ...modal, open: false })
  }

  const [projectsViewing, setProjectsViewing] = useState(3)

  const projects = [
    ReactCRAStarterCode,
    TouchOfElegance,
    MusicMap,
    FreeFromClass,
    Tetris,
    Snake,
    ChristmasCaneRevenge,
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
        <hr align="left" />
        <br />
        <ModalContext.Provider value={handleModal}>
          {projects.slice(0, projectsViewing).map((Component, i) => {
            return <Component key={i} handleModal={handleModal} />
          })}
        </ModalContext.Provider>
        {projects.length > projectsViewing ? (
          <Button
            variant="contained"
            color="primary"
            onClick={() => setProjectsViewing(projectsViewing + 2)}
          >
            <h6>See More Projects</h6>
          </Button>
        ) : (
          <Button variant="contained" onClick={() => setProjectsViewing(3)}>
            <h6>Collapse Projects</h6>
          </Button>
        )}
      </Container>
    </div>
  )
}
