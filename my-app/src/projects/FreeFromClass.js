import React from "react"
import FreeFromClassDesktop from "../images/projects/freefromclass-desktop.png"
import FreeFromClassMobile2 from "../images/projects/freefromclass-mobile2.png"
import FreeFromClassMobile3 from "../images/projects/freefromclass-mobile3.png"
import FreeFromClassMobile from "../images/projects/freefromclass-mobile.png"

export default function FreeFromClass({ handleModal }) {
  return (
    <div className="project-item">
      <div className="vl" />
      <div>
        <h3>FreeFromClass</h3>
        Links:{" "}
        <a
          className="link"
          href="https://cs48-s20-s2-t2-prod.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          Website
        </a>{" "}
        |{" "}
        <a
          className="link"
          href="https://github.com/ucsb-cs48-s20/project-s2-t2-free"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <br />
        <br />
        <button onClick={() => handleModal(FreeFromClassDesktop)}>
          <img
            className="project-img"
            src={FreeFromClassDesktop}
            alt="project-img"
          />
        </button>{" "}
        <button onClick={() => handleModal(FreeFromClassMobile3)}>
          <img
            className="project-img"
            src={FreeFromClassMobile3}
            alt="project-img"
          />
        </button>{" "}
        <button onClick={() => handleModal(FreeFromClassMobile2)}>
          <img
            className="project-img"
            src={FreeFromClassMobile2}
            alt="project-img"
          />
        </button>{" "}
        <button onClick={() => handleModal(FreeFromClassMobile)}>
          <img
            className="project-img"
            src={FreeFromClassMobile}
            alt="project-img"
          />
        </button>
        <br />
        <br />
        <div className="project-desc">
          <div>March 2020 - May 2020</div>
          <div>
            FreeFromClass was a class project for CS48. This was my introduction
            into web development where I worked in a team of 4 to develop an app
            from scratch to deployment. Through this app, I learned everything
            from React NextJS, Auth0, MongoDB, Cypress testing, and Heroku. I
            learned lots of frontend skills, adjusting this app for mobile
            as well as desktop. I also learned how to build a REST API.
          </div>
        </div>
      </div>
    </div>
  )
}
