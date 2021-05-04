import React, { useState, createContext } from "react"
import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"
import Modal from "@material-ui/core/Modal"
import Fab from "@material-ui/core/Fab"
import CloseIcon from "@material-ui/icons/Close"

import ProjectModalContent from "../components/ProjectModalContent"
import { useSnackbar } from "notistack"
import getAllProjects from "../projects"

export const ModalContext = createContext()

export default function Projects() {
  const [modal, setModal] = useState({
    images: [],
    imageIndex: 0,
    linksComponent: null,
    open: false,
  })

  const handleModal = (images, imageIndex, linksComponent) => {
    setModal({
      images: images,
      imageIndex: imageIndex,
      linksComponent: linksComponent,
      open: true,
    })
  }

  const handleClose = () => {
    setModal({ ...modal, open: false })
  }
  
  const projects = getAllProjects()

  const [projectsViewing, setProjectsViewing] = useState(3)

  const { enqueueSnackbar } = useSnackbar()

  return (
    <div id="projects">
      <Modal
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        open={modal.open}
        onClose={handleClose}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <React.Fragment>
          <ProjectModalContent modal={modal} setModal={setModal} />
        </React.Fragment>
      </Modal>

      <Container>
        <h1 className="text-center fade-in">
          {/* <span className="emoji-shake">
            <span role="img" aria-label="emoji" className="hover-shake">
              🚀
            </span>
          </span>{" "} */}
          PERSONAL PROJECTS{" "}
          {/* <span className="emoji-shake">
            <span role="img" aria-label="emoji" className="hover-shake">
              🌕
            </span>
          </span> */}
        </h1>
        <hr />
        <ModalContext.Provider value={handleModal}>
          {projects.map((Component, i) => {
            return (
              <div key={i} className={i < projectsViewing ? "" : "hidden"}>
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
        <div id="projects-fab" className="hidden">
          {projectsViewing > 3 && (
            <Fab
              size="large"
              variant="extended"
              color="primary"
              onClick={() => {
                setProjectsViewing(3)
                enqueueSnackbar("Collapsed!", { variant: "success" })
              }}
            >
              <CloseIcon style={{ marginRight: "5px" }} />
              <h6>Collapse Projects</h6>
            </Fab>
          )}
        </div>
      </Container>
    </div>
  )
}
