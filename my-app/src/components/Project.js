import React, { useContext, Fragment } from "react"
import { ModalContext } from "../sections/Projects"

export default function Project(props) {
  const { title, links, date, images, description } = props
  const handleModal = useContext(ModalContext)

  const linksDescription = (
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
    <div className="project-item">
      <div className="vl" />
      <div>
        <h3>{title}</h3>
        <div style={{ marginBottom: "10px" }}>{date}</div>
        <div>{linksDescription}</div>
        <br />
        {images.map((image, i) => {
          return (
            <Fragment key={i}>
              <button
                onClick={() => handleModal(images, i, linksDescription)}
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
      </div>
    </div>
  )
}
