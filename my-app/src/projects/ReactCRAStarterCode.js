import React from "react"
import ReactCRAStarterCodeDesktop from "../images/projects/reactcrastartercode-desktop.png"
import ReactCRAStarterCodeMobile from "../images/projects/reactcrastartercode-mobile.png"
import Project from "../components/Project"

export default function ReactCRAStarterCode() {
  const title = "ReactCRAStarterCode"
  const links = {
    Website: "https://react-cra-starter-code.herokuapp.com/",
    Github: "https://github.com/vincentktieu101/ReactCRAStarterCode",
  }
  const images = [ReactCRAStarterCodeDesktop, ReactCRAStarterCodeMobile]
  const description = (
    <React.Fragment>
      <div>April, 2021 - Present</div>
      <br />
      <div>
        In Spring of my junior year at UCSB, I became an Undergraduate Learning
        Assistant (ULA) for CS148 (Computer Science Project), in which students
        learn how to develop an application. Since most students wanted to
        create a React application, I wrote some starter code in React CRA
        (CreateReactApp) along with Google OAuth. I also wrote a mini guide on
        how to use React/Google OAuth on the Github repo.
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
