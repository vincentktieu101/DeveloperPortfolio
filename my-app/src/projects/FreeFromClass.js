import React from "react"
import FreeFromClassDesktop from "../images/projects/freefromclass-desktop.png"
import FreeFromClassMobile2 from "../images/projects/freefromclass-mobile2.png"
import FreeFromClassMobile3 from "../images/projects/freefromclass-mobile3.png"
import FreeFromClassMobile from "../images/projects/freefromclass-mobile.png"
import Project from "../components/Project"

export default function FreeFromClass() {
  const title = "FreeFromClass"
  const links = {
    Website: "https://cs48-s20-s2-t2-prod.herokuapp.com/",
    Github: "https://github.com/ucsb-cs48-s20/project-s2-t2-free",
  }
  const images = [
    FreeFromClassDesktop,
    FreeFromClassMobile2,
    FreeFromClassMobile3,
    FreeFromClassMobile,
  ]
  const description = (
    <React.Fragment>
      <div>March 2020 - May 2020</div>
      <br />
      <div>
        FreeFromClass was a class project for CS48. This was my introduction
        into web development where I worked in a team of 4 to develop an app
        from scratch to deployment. Through this app, I learned everything from
        React NextJS, Auth0, MongoDB, Cypress testing, and Heroku. I learned
        lots of frontend skills, adjusting this app for mobile as well as
        desktop. I also learned how to build a REST API.
      </div>
    </React.Fragment>
  )

  return (
    <Project
      title={title}
      links={links}
      images={images}
      description={description}
    />
  )
}