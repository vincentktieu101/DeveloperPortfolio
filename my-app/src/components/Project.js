import React, { useContext } from "react"
import { ModalContext } from "../sections/Projects"

export default function Project(props) {
  const { title, links, images, description } = props
  const handleModal = useContext(ModalContext)

  return (
    <div className="project-item">
      <div className="vl" />
      <div>
        <h3>{title}</h3>
        <div>
          Links:{" "}
          {
            Object.keys(links).map((link, i) => {
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
                  {" "}
                </React.Fragment>
              )
            })
          }
        </div>
        <br />
        {
          images.map((image, i) => {
            return (
              <React.Fragment key={i}>
                <button onClick={() => handleModal(image)}>
                  <img
                    key={i}
                    className="project-img"
                    src={image}
                    alt="project-img"
                  />
                </button>
                {" "}
              </React.Fragment>
            )
          })
        }
        <br />
        <br />
        <div className="project-desc">{description}</div>
      </div>
    </div>
  )
}