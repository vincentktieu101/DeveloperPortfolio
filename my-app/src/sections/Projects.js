import React, { useState } from "react"
import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"
import Modal from "@material-ui/core/Modal"
import { makeStyles } from "@material-ui/core/styles"
import Backdrop from "@material-ui/core/Backdrop"
import IconButton from "@material-ui/core/IconButton"
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

import ReactCRAStarterCode from "../projects/ReactCRAStarterCode"
import TouchOfElegance from "../projects/TouchOfElegance"
import MusicMap from "../projects/MusicMap"
import FreeFromClass from "../projects/FreeFromClass"
import LineTrackingCar from "../projects/LineTrackingCar"
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
    backgroundColor: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2, 3),
    maxWidth: "100%",
    maxHeight: "100%",
    margin: "10px",
  },
}))

export const ModalContext = React.createContext()

export default function Projects() {
  const classes = useStyles()
  const [modal, setModal] = useState({
    images: [],
    imageIndex: 0,
    linksLine: null,
    open: false,
  })

  const handleModal = (images, imageIndex, linksLine) => {
    setModal({ images: images, imageIndex: imageIndex, linksLine: linksLine, open: true })
    console.log(imageIndex)
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
    LineTrackingCar,
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
          <div class="flex-space-between">
            <img
              src={modal.images[modal.imageIndex]}
              alt="modal popup"
              className="project-modal-img"
            />
          </div>
          <br />
          <div className="desktop-render" style={{ textAlign: "center" }}>
            <IconButton onClick={() => handleModal(modal.images, (modal.imageIndex - 1) % (modal.images).length, modal.linksLine)}>
              <NavigateBeforeIcon />
            </IconButton>
            {" "}
            {modal.linksLine}
            {" "}
            <IconButton onClick={() => handleModal(modal.images, (modal.imageIndex + 1) % (modal.images).length, modal.linksLine)}>
              <NavigateNextIcon />
            </IconButton>
          </div>
          <div className="mobile-render" style={{ textAlign: "center" }}>
            <div>{modal.linksLine}</div>
            <div>
              <IconButton onClick={() => handleModal(modal.images, (modal.imageIndex - 1) % (modal.images).length, modal.linksLine)}>
                <NavigateBeforeIcon />
              </IconButton>
              <IconButton onClick={() => handleModal(modal.images, (modal.imageIndex + 1) % (modal.images).length, modal.linksLine)}>
                <NavigateNextIcon />
              </IconButton>
            </div>
          </div>
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
