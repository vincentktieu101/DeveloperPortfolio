import React, { useState, useEffect } from "react"
import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"
import Modal from "@material-ui/core/Modal"
import { makeStyles } from "@material-ui/core/styles"
import Backdrop from "@material-ui/core/Backdrop"
import IconButton from "@material-ui/core/IconButton"
import NavigateNextIcon from "@material-ui/icons/NavigateNext"
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore"
import initVl from "../utils/init-vl"
import initFaders from "../utils/init-faders"
import getAllProjects from "../projects"

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
    textAlign: "center",
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
    setModal({
      images: images,
      imageIndex: imageIndex,
      linksLine: linksLine,
      open: true,
    })
  }

  const handleClose = () => {
    setModal({ ...modal, open: false })
  }

  const [projectsViewing, setProjectsViewing] = useState(3)

  const projects = getAllProjects()

  useEffect(() => {
    initVl()
    initFaders()
  }, [projectsViewing])

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
          <div>
            <img
              src={modal.images[modal.imageIndex]}
              alt="modal popup"
              className="project-modal-img"
            />
          </div>
          <br />
          <div className="desktop-render">
            <IconButton
              onClick={() =>
                setModal({
                  ...modal,
                  imageIndex:
                    modal.imageIndex === 0
                      ? modal.images.length - 1
                      : modal.imageIndex - 1,
                })
              }
            >
              <NavigateBeforeIcon />
            </IconButton>{" "}
            {modal.linksLine}{" "}
            <IconButton
              onClick={() =>
                setModal({
                  ...modal,
                  imageIndex: (modal.imageIndex + 1) % modal.images.length,
                })
              }
            >
              <NavigateNextIcon />
            </IconButton>
          </div>
          <div className="mobile-render">
            <div>{modal.linksLine}</div>
            <div>
              <IconButton
                onClick={() =>
                  setModal({
                    ...modal,
                    imageIndex:
                      modal.imageIndex === 0
                        ? modal.images.length - 1
                        : modal.imageIndex - 1,
                  })
                }
              >
                <NavigateBeforeIcon />
              </IconButton>
              <IconButton
                onClick={() =>
                  setModal({
                    ...modal,
                    imageIndex: (modal.imageIndex + 1) % modal.images.length,
                  })
                }
              >
                <NavigateNextIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </Modal>

      <Container>
        <h1 className="text-center fade-in">
          <span
            className="desktop-render emoji-shake"
          >
            <span role="img" aria-label="emoji" className="hover-shake">
              🚀
            </span>
          </span>{" "}
          PERSONAL PROJECTS{" "}
          <span role="img" aria-label="emoji" className="desktop-render">
            🌕
          </span>
        </h1>
        <hr />
        <br />
        <ModalContext.Provider value={handleModal}>
          {projects.slice(0, projectsViewing).map((Component, i) => {
            return (
              <div className="fade-in" key={i}>
                <Component />
              </div>
            )
          })}
        </ModalContext.Provider>
        <div className="mobile-center">
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
        </div>
      </Container>
    </div>
  )
}
