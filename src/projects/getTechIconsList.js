import React from "react";
import NodeJSIcon from "../images/tech-icons/nodejs.svg";
import ExpressJSIcon from "../images/tech-icons/expressjs.svg";
import ReactJSIcon from "../images/tech-icons/reactjs.svg";
import SocketIOIcon from "../images/tech-icons/socketio.svg";
import HerokuIcon from "../images/tech-icons/heroku.svg";
import NetlifyIcon from "../images/tech-icons/netlify.svg";
import GithubIcon from "../images/tech-icons/github.svg";
import ArduinoIcon from "../images/tech-icons/arduino.svg";
import GoogleDevelopersIcon from "../images/tech-icons/googledevelopers.svg";
import OpenCVIcon from "../images/tech-icons/opencv.svg";
import GatsbyJSIcon from "../images/tech-icons/gatsbyjs.svg";
import NextJSIcon from "../images/tech-icons/nextjs.svg";
import CypressIcon from "../images/tech-icons/cypress.png";
import Auth0Icon from "../images/tech-icons/auth0.svg";
import PygameIcon from "../images/tech-icons/pygame.gif";
import PythonIcon from "../images/tech-icons/python.svg";
import JavascriptIcon from "../images/tech-icons/javascript.svg";
import JestIcon from "../images/tech-icons/jest.svg";
import MaterialUIIcon from "../images/tech-icons/materialui.png";
import ReactBootstrapIcon from "../images/tech-icons/reactbootstrap.svg";
import ScratchIcon from "../images/tech-icons/scratch.svg";
import FirebaseIcon from "../images/tech-icons/firebase.svg";
import MongoDBIcon from "../images/tech-icons/mongodb.svg";
import CppIcon from "../images/tech-icons/c++.svg";

export default function Icons(iconsList) {
  if (iconsList === undefined) {
    return <React.Fragment></React.Fragment>;
  }

  const NodeJS = (
    <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
      <img src={NodeJSIcon} className="project-tech-icon" alt="" />
    </a>
  );
  const ExpressJS = (
    <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
      <img src={ExpressJSIcon} className="project-tech-icon" alt="" />
    </a>
  );
  const ReactJS = (
    <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
      <img src={ReactJSIcon} className="project-tech-icon" alt="" />
    </a>
  );
  const SocketIO = (
    <a href="https://socket.io/" target="_blank" rel="noreferrer">
      <img src={SocketIOIcon} className="project-tech-icon" alt="" />
    </a>
  );
  const Heroku = (
    <a href="https://www.heroku.com/" target="_blank" rel="noreferrer">
      <img src={HerokuIcon} className="project-tech-icon" alt="" />
    </a>
  );
  const Netlify = (
    <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">
      <img src={NetlifyIcon} className="project-tech-icon" alt="" />
    </a>
  );
  const Github = (
    <a href="https://pages.github.com/" target="_blank" rel="noreferrer">
      <img src={GithubIcon} className="project-tech-icon" alt="" />
    </a>
  );
  const Arduino = (
    <a href="https://www.arduino.cc/" target="_blank" rel="noreferrer">
      <img src={ArduinoIcon} className="project-tech-icon" alt="" />
    </a>
  );
  const GoogleDevelopers = (
    <a href="https://developers.google.com/" target="_blank" rel="noreferrer">
      <img src={GoogleDevelopersIcon} className="project-tech-icon" alt="" />
    </a>
  );
  const OpenCV = (
    <a href="https://opencv.org/" target="_blank" rel="noreferrer">
      <img src={OpenCVIcon} className="project-tech-icon" alt="" />
    </a>
  );
  const GatsbyJS = (
    <a href="https://opencv.org/" target="_blank" rel="noreferrer">
      <img src={GatsbyJSIcon} className="project-tech-icon" alt="" />
    </a>
  );
  const NextJS = (
    <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
      <img src={NextJSIcon} className="project-tech-icon" alt="" />
    </a>
  );
  const Cypress = (
    <a href="https://www.cypress.io/" target="_blank" rel="noreferrer">
      <img
        src={CypressIcon}
        className="project-tech-icon"
        alt=""
        style={{ marginBottom: "10px", height: "30px" }}
      />
    </a>
  );
  const Auth0 = (
    <a href="https://auth0.com/" target="_blank" rel="noreferrer">
      <img src={Auth0Icon} className="project-tech-icon" alt="" />
    </a>
  );
  const Pygame = (
    <a href="https://www.pygame.org/" target="_blank" rel="noreferrer">
      <img src={PygameIcon} className="project-tech-icon" alt="" />
    </a>
  );
  const Python = (
    <a href="https://www.python.org/" target="_blank" rel="noreferrer">
      <img
        src={PythonIcon}
        className="project-tech-icon"
        alt=""
        style={{ marginBottom: "-5px", height: "50px" }}
      />
    </a>
  );
  const Jest = (
    <a href="https://jestjs.io/" target="_blank" rel="noreferrer">
      <img src={JestIcon} className="project-tech-icon" alt="" />
    </a>
  );
  const MaterialUI = (
    <a href="https://material-ui.com/" target="_blank" rel="noreferrer">
      <img src={MaterialUIIcon} className="project-tech-icon" alt="" />
    </a>
  );
  const ReactBootstrap = (
    <a
      href="https://react-bootstrap.github.io/"
      target="_blank"
      rel="noreferrer"
    >
      <img src={ReactBootstrapIcon} className="project-tech-icon" alt="" />
    </a>
  );
  const Scratch = (
    <a href="https://scratch.mit.edu/" target="_blank" rel="noreferrer">
      <img src={ScratchIcon} className="project-tech-icon" alt="" />
    </a>
  );
  const Javascript = (
    <a href="https://www.javascript.com/" target="_blank" rel="noreferrer">
      <img
        src={JavascriptIcon}
        className="project-tech-icon"
        alt=""
        style={{ marginBottom: "10px", height: "30px" }}
      />
    </a>
  );
  const Firebase = (
    <a href="https://firebase.google.com/" target="_blank" rel="noreferrer">
      <img src={FirebaseIcon} className="project-tech-icon" alt="" />
    </a>
  );
  const MongoDB = (
    <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
      <img
        src={MongoDBIcon}
        className="project-tech-icon"
        alt=""
        style={{ marginBottom: "10px", height: "30px" }}
      />
    </a>
  );
  const Cpp = (
    <a href="https://www.cplusplus.com/" target="_blank" rel="noreferrer">
      <img
        src={CppIcon}
        className="project-tech-icon"
        alt=""
        style={{ marginBottom: "10px", height: "30px" }}
      />
    </a>
  );

  const techIconsDict = {
    NodeJS,
    ExpressJS,
    ReactJS,
    SocketIO,
    Heroku,
    Netlify,
    Github,
    Arduino,
    GoogleDevelopers,
    OpenCV,
    GatsbyJS,
    NextJS,
    Cypress,
    Auth0,
    Pygame,
    Python,
    Javascript,
    Jest,
    MaterialUI,
    ReactBootstrap,
    Scratch,
    Firebase,
    MongoDB,
    Cpp,
  };

  const techIconsList = [];

  for (let i = 0; i < iconsList.length; i++) {
    techIconsList.push(
      <span key={i} className={`project-tech-icon-${i}`}>
        {techIconsDict[iconsList[i]]}
      </span>
    );
  }

  return techIconsList;
}
