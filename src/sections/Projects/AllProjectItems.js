import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Modal from "@material-ui/core/Modal";
import Fab from "@material-ui/core/Fab";
import { Link } from "gatsby";
import CloseIcon from "@material-ui/icons/Close";

import { ModalContext } from "@components/Layout";
import ProjectModalContent from "@components/ProjectModalContent";
import ProjectItems from "./ProjectItems/All";

export default function Projects() {
  const [modal, setModal] = useState({
    images: [],
    imageIndex: 0,
    linksComponent: null,
    open: false,
  });
  const handleModal = (images, imageIndex, linksComponent) => {
    setModal({
      images: images,
      imageIndex: imageIndex,
      linksComponent: linksComponent,
      open: true,
    });
  };
  const handleClose = () => {
    setModal({ ...modal, open: false });
  };
  const projectsItems = ProjectItems();
  // const [projectsViewing, setProjectsViewing] = useState(3);
  // const { enqueueSnackbar } = useSnackbar();

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
          <hr />
        </h1>
        <ModalContext.Provider value={handleModal}>
          {projectsItems.map((Component, i) => {
            return (
              <div key={i}>
                <Component />
              </div>
            );
          })}
        </ModalContext.Provider>
        <Link to="/#projects">
          <div id="projects-fab" className="hidden">
            <Fab
              size="large"
              variant="extended"
              color="primary"
              onClick={() => {}}
            >
              <CloseIcon />
              <h6>Collapse Projects</h6>
            </Fab>
          </div>
        </Link>
      </Container>
    </div>
  );
}
