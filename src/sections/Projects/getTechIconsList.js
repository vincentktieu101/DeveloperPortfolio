import React from "react";
import ExternalLink from "@components/Link/ExternalLink";

import NodeJSIcon from "@images/tech-icons/nodejs.svg";
import ExpressJSIcon from "@images/tech-icons/expressjs.svg";
import ReactJSIcon from "@images/tech-icons/reactjs.svg";
import SocketIOIcon from "@images/tech-icons/socketio.svg";
import HerokuIcon from "@images/tech-icons/heroku.svg";
import NetlifyIcon from "@images/tech-icons/netlify.svg";
import GithubIcon from "@images/tech-icons/github.svg";
import ArduinoIcon from "@images/tech-icons/arduino.svg";
import GoogleDevelopersIcon from "@images/tech-icons/googledevelopers.svg";
import OpenCVIcon from "@images/tech-icons/opencv.svg";
import GatsbyJSIcon from "@images/tech-icons/gatsbyjs.svg";
import NextJSIcon from "@images/tech-icons/nextjs.svg";
import CypressIcon from "@images/tech-icons/cypress.png";
import Auth0Icon from "@images/tech-icons/auth0.svg";
import PygameIcon from "@images/tech-icons/pygame.gif";
import PythonIcon from "@images/tech-icons/python.svg";
import JavascriptIcon from "@images/tech-icons/javascript.svg";
import JestIcon from "@images/tech-icons/jest.svg";
import MaterialUIIcon from "@images/tech-icons/materialui.png";
import ReactBootstrapIcon from "@images/tech-icons/reactbootstrap.svg";
import ScratchIcon from "@images/tech-icons/scratch.svg";
import FirebaseIcon from "@images/tech-icons/firebase.svg";
import MongoDBIcon from "@images/tech-icons/mongodb.svg";
import CppIcon from "@images/tech-icons/c++.svg";

export default function Icons(iconsList) {
  if (iconsList === undefined) {
    return <React.Fragment></React.Fragment>;
  }

  const NodeJS = (
    <ExternalLink href="https://nodejs.org/en/">
      <img src={NodeJSIcon} className="project-tech-icon" alt="" />
    </ExternalLink>
  );
  const ExpressJS = (
    <ExternalLink href="https://expressjs.com/">
      <img src={ExpressJSIcon} className="project-tech-icon" alt="" />
    </ExternalLink>
  );
  const ReactJS = (
    <ExternalLink href="https://reactjs.org/">
      <img src={ReactJSIcon} className="project-tech-icon" alt="" />
    </ExternalLink>
  );
  const SocketIO = (
    <ExternalLink href="https://socket.io/">
      <img src={SocketIOIcon} className="project-tech-icon" alt="" />
    </ExternalLink>
  );
  const Heroku = (
    <ExternalLink href="https://www.heroku.com/">
      <img src={HerokuIcon} className="project-tech-icon" alt="" />
    </ExternalLink>
  );
  const Netlify = (
    <ExternalLink href="https://www.netlify.com/">
      <img src={NetlifyIcon} className="project-tech-icon" alt="" />
    </ExternalLink>
  );
  const Github = (
    <ExternalLink href="https://pages.github.com/">
      <img src={GithubIcon} className="project-tech-icon" alt="" />
    </ExternalLink>
  );
  const Arduino = (
    <ExternalLink href="https://www.arduino.cc/">
      <img src={ArduinoIcon} className="project-tech-icon" alt="" />
    </ExternalLink>
  );
  const GoogleDevelopers = (
    <ExternalLink href="https://developers.google.com/">
      <img src={GoogleDevelopersIcon} className="project-tech-icon" alt="" />
    </ExternalLink>
  );
  const OpenCV = (
    <ExternalLink href="https://opencv.org/">
      <img src={OpenCVIcon} className="project-tech-icon" alt="" />
    </ExternalLink>
  );
  const GatsbyJS = (
    <ExternalLink href="https://opencv.org/">
      <img src={GatsbyJSIcon} className="project-tech-icon" alt="" />
    </ExternalLink>
  );
  const NextJS = (
    <ExternalLink href="https://nextjs.org/">
      <img src={NextJSIcon} className="project-tech-icon" alt="" />
    </ExternalLink>
  );
  const Cypress = (
    <ExternalLink href="https://www.cypress.io/">
      <img
        src={CypressIcon}
        className="project-tech-icon"
        alt=""
        style={{ marginBottom: "10px", height: "30px" }}
      />
    </ExternalLink>
  );
  const Auth0 = (
    <ExternalLink href="https://auth0.com/">
      <img src={Auth0Icon} className="project-tech-icon" alt="" />
    </ExternalLink>
  );
  const Pygame = (
    <ExternalLink href="https://www.pygame.org/">
      <img src={PygameIcon} className="project-tech-icon" alt="" />
    </ExternalLink>
  );
  const Python = (
    <ExternalLink href="https://www.python.org/">
      <img
        src={PythonIcon}
        className="project-tech-icon"
        alt=""
        style={{ marginBottom: "-5px", height: "50px" }}
      />
    </ExternalLink>
  );
  const Jest = (
    <ExternalLink href="https://jestjs.io/">
      <img src={JestIcon} className="project-tech-icon" alt="" />
    </ExternalLink>
  );
  const MaterialUI = (
    <ExternalLink href="https://material-ui.com/">
      <img src={MaterialUIIcon} className="project-tech-icon" alt="" />
    </ExternalLink>
  );
  const ReactBootstrap = (
    <ExternalLink href="https://react-bootstrap.github.io/">
      <img src={ReactBootstrapIcon} className="project-tech-icon" alt="" />
    </ExternalLink>
  );
  const Scratch = (
    <ExternalLink href="https://scratch.mit.edu/">
      <img src={ScratchIcon} className="project-tech-icon" alt="" />
    </ExternalLink>
  );
  const Javascript = (
    <ExternalLink href="https://www.javascript.com/">
      <img
        src={JavascriptIcon}
        className="project-tech-icon"
        alt=""
        style={{ marginBottom: "10px", height: "30px" }}
      />
    </ExternalLink>
  );
  const Firebase = (
    <ExternalLink href="https://firebase.google.com/">
      <img src={FirebaseIcon} className="project-tech-icon" alt="" />
    </ExternalLink>
  );
  const MongoDB = (
    <ExternalLink href="https://www.mongodb.com/">
      <img
        src={MongoDBIcon}
        className="project-tech-icon"
        alt=""
        style={{ marginBottom: "10px", height: "30px" }}
      />
    </ExternalLink>
  );
  const Cpp = (
    <ExternalLink href="https://www.cplusplus.com/">
      <img
        src={CppIcon}
        className="project-tech-icon"
        alt=""
        style={{ marginBottom: "10px", height: "30px" }}
      />
    </ExternalLink>
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
