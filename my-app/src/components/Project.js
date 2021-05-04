import React, { useContext, Fragment } from "react"
import { ModalContext } from "../sections/Projects"
import TodayIcon from "@material-ui/icons/Today"
import WebIcon from "@material-ui/icons/Web"

export default function Project({ title, links, date, images, description, techIcons }) {
  const handleModal = useContext(ModalContext)

  const linksComponent = (
    <Fragment>
      Links:{" "}
      {Object.keys(links).map((link, i) => {
        return (
          <React.Fragment key={i}>
            <a
              className="link"
              href={links[link]}
              target="_blank"
              rel="noreferrer"
            >
              {link}
            </a>
            {i !== Object.keys(links).length - 1 ? " | " : ""}
          </React.Fragment>
        )
      })}
    </Fragment>
  )

  return (
    <div className="project-item fade-in">
      <div className="project-item-vl" />
      <div>
        <h3>{title}</h3>
        <div>
          <div style={{ marginBottom: "5px" }}>
            <TodayIcon style={{ fontSize: "16px" }} /> {date}
          </div>
          <div>
            <WebIcon style={{ fontSize: "16px" }} /> {linksComponent}
          </div>
        </div>
        <br />
        {images.map((image, i) => {
          return (
            <Fragment key={i}>
              <button
                onClick={() => handleModal(images, i, linksComponent)}
                className={i !== 0 ? "desktop-render" : ""}
              >
                <img
                  key={i}
                  className="project-img"
                  src={image}
                  alt="project-img"
                />
              </button>{" "}
            </Fragment>
          )
        })}
        <br />
        <br />
        <div className="project-desc">{description}</div>
        <br />
        <div className="project-tech-column">{techIcons}</div>
      </div>
      {/* <div className="project-tech-column">{techIcons}</div> */}
    </div>
  )
}
