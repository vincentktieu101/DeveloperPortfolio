import React from "react"
import ReactCRAStarterCodeTutorial from "../images/projects/reactcrastartercode-tutorial.png"
import ReactCRAStarterCodeMobile1 from "../images/projects/reactcrastartercode-mobile1.png"
import ReactCRAStarterCodeMobile2 from "../images/projects/reactcrastartercode-mobile2.png"
import ReactCRAStarterCodeMobile3 from "../images/projects/reactcrastartercode-mobile3.png"
import Project from "../components/Project"

export default function ReactGoogleAuthStarter() {
  const title = "ReactGoogleAuthStarter"
  const links = {
    Website: "https://react-google-auth-starter.herokuapp.com/",
    Github: "https://github.com/vincentktieu101/ReactGoogleAuthStarter",
    "YouTube Tutorial": "https://youtu.be/XZceEXlYC1w",
  }
  const images = [
    ReactCRAStarterCodeTutorial,
    ReactCRAStarterCodeMobile1,
    ReactCRAStarterCodeMobile2,
    ReactCRAStarterCodeMobile3,
  ]
  const description = (
    <React.Fragment>
      <div>April, 2021 - Present</div>
      <br />
      <div>
        In Spring of my junior year at UCSB, I became an Undergraduate Learning
        Assistant (ULA) for CS148 (Computer Science Project), in which students
        learn how to develop an application. Since most students wanted to
        create a React application, I wrote some starter code in React CRA
        (CreateReactApp) along with Google OAuth. I also filmed a mini guide on
        how to use React/Google OAuth on YouTube as well as wrote a Github
        Readme.
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
