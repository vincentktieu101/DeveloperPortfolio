import React from "react"
import NodeJS from "./nodejs.svg"
import ExpressJS from "./expressjs.svg"
import ReactJS from "./reactjs.svg"
import SocketIO from "./socketio.svg"
import Heroku from "./heroku.svg"
import Netlify from "./netlify.svg"
import Github from "./github.svg"
import Arduino from "./arduino.svg"
import GoogleDevelopers from "./googledevelopers.svg"
import OpenCV from "./opencv.svg"
import GatsbyJS from "./gatsbyjs.svg"
import NextJS from "./nextjs.svg"
import Cypress from "./cypress.png"
import Auth0 from "./auth0.svg"
import Pygame from "./pygame.gif"
import Python from "./python.svg"
import Javascript from "./javascript.svg"
import Jest from "./jest.svg"
import MaterialUI from "./materialui.png"
import ReactBootstrap from "./reactbootstrap.svg"
import Scratch from "./scratch.svg"

export default function Icons(iconsList) {
  if (iconsList === undefined) {
    return <React.Fragment></React.Fragment>
  }
  const techIcons = [];
  if (iconsList.NodeJS) {
    techIcons.push(
      <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer" key={0}>
        <img src={NodeJS} className="project-tech-icon" alt="" />
      </a>
    )
  }
  if (iconsList.ExpressJS) {
    techIcons.push(
      <a href="https://expressjs.com/" target="_blank" rel="noreferrer" key={1}>
        <img src={ExpressJS} className="project-tech-icon" alt="" />
      </a>
    )
  }
  if (iconsList.ReactJS) {
    techIcons.push(
      <a href="https://reactjs.org/" target="_blank" rel="noreferrer" key={2}>
        <img src={ReactJS} className="project-tech-icon" alt="" />
      </a>
    )
  }
  if (iconsList.SocketIO) {
    techIcons.push(
      <a href="https://socket.io/" target="_blank" rel="noreferrer" key={3}>
        <img src={SocketIO} className="project-tech-icon" alt="" />
      </a>
    )
  }
  if (iconsList.Heroku) {
    techIcons.push(
      <a href="https://www.heroku.com/" target="_blank" rel="noreferrer" key={4}>
        <img src={Heroku} className="project-tech-icon" alt="" />
      </a>
    )
  }
  if (iconsList.Netlify) {
    techIcons.push(
      <a href="https://www.netlify.com/" target="_blank" rel="noreferrer" key={5}>
        <img src={Netlify} className="project-tech-icon" alt="" />
      </a>
    )
  }
  if (iconsList.Github) {
    techIcons.push(
      <a href="https://pages.github.com/" target="_blank" rel="noreferrer" key={6}>
        <img src={Github} className="project-tech-icon" alt="" />
      </a>
    )
  }
  if (iconsList.Arduino) {
    techIcons.push(
      <a href="https://www.arduino.cc/" target="_blank" rel="noreferrer" key={7}>
        <img src={Arduino} className="project-tech-icon" alt="" />
      </a>
    )
  }
  if (iconsList.GoogleDevelopers) {
    techIcons.push(
      <a href="https://developers.google.com/" target="_blank" rel="noreferrer" key={8}>
        <img src={GoogleDevelopers} className="project-tech-icon" alt="" />
      </a>
    )
  }
  if (iconsList.OpenCV) {
    techIcons.push(
      <a href="https://opencv.org/" target="_blank" rel="noreferrer" key={9}>
        <img src={OpenCV} className="project-tech-icon" alt="" />
      </a>
    )
  }
  if (iconsList.GatsbyJS) {
    techIcons.push(
      <a href="https://opencv.org/" target="_blank" rel="noreferrer" key={10}>
        <img src={GatsbyJS} className="project-tech-icon" alt="" />
      </a>
    )
  }
  if (iconsList.NextJS) {
    techIcons.push(
      <a href="https://nextjs.org/" target="_blank" rel="noreferrer" key={11}>
        <img src={NextJS} className="project-tech-icon" alt="" />
      </a>
    )
  }
  if (iconsList.Cypress) {
    techIcons.push(
      <a href="https://www.cypress.io/" target="_blank" rel="noreferrer" key={12}>
        <img src={Cypress} className="project-tech-icon" alt="" style={{marginBottom: "10px", height: "30px"}} />
      </a>
    )
  }
  if (iconsList.Auth0) {
    techIcons.push(
      <a href="https://auth0.com/" target="_blank" rel="noreferrer" key={13}>
        <img src={Auth0} className="project-tech-icon" alt="" />
      </a>
    )
  }
  if (iconsList.Pygame) {
    techIcons.push(
      <a href="https://www.pygame.org/" target="_blank" rel="noreferrer" key={14}>
        <img src={Pygame} className="project-tech-icon" alt="" />
      </a>
    )
  }
  if (iconsList.Python) {
    techIcons.push(
      <a href="https://www.python.org/" target="_blank" rel="noreferrer" key={15}>
        <img src={Python} className="project-tech-icon" alt="" style={{marginBottom: "-5px", height: "50px"}} />
      </a>
    )
  }
  if (iconsList.Jest) {
    techIcons.push(
      <a href="https://jestjs.io/" target="_blank" rel="noreferrer" key={17}>
        <img src={Jest} className="project-tech-icon" alt="" />
      </a>
    )
  }
  if (iconsList.MaterialUI) {
    techIcons.push(
      <a href="https://material-ui.com/" target="_blank" rel="noreferrer" key={18}>
        <img src={MaterialUI} className="project-tech-icon" alt="" />
      </a>
    )
  }
  if (iconsList.ReactBootstrap) {
    techIcons.push(
      <a href="https://react-bootstrap.github.io/" target="_blank" rel="noreferrer" key={19}>
        <img src={ReactBootstrap} className="project-tech-icon" alt="" />
      </a>
    )
  }
  if (iconsList.Scratch) {
    techIcons.push(
      <a href="https://scratch.mit.edu/" target="_blank" rel="noreferrer" key={20}>
        <img src={Scratch} className="project-tech-icon" alt="" />
      </a>
    )
  }
  if (iconsList.Javascript) {
    techIcons.push(
      <a href="https://www.javascript.com/" target="_blank" rel="noreferrer" key={16}>
        <img src={Javascript} className="project-tech-icon" alt="" style={{marginBottom: "10px", height: "30px"}} />
      </a>
    )
  }
  return techIcons;
}
