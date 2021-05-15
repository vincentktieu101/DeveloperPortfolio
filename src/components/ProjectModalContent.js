import React from "react";
import IconButton from "@material-ui/core/IconButton";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

export default function ProjectModalContent(props) {
  const { modal, setModal } = props;
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "10px",
        textAlign: "center",
        margin: "10px",
      }}
    >
      <img
        src={modal.images[modal.imageIndex]}
        alt="modal popup"
        className="project-modal-img"
      />
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
        {modal.linksComponent}{" "}
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
        <div>{modal.linksComponent}</div>
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
  );
}
