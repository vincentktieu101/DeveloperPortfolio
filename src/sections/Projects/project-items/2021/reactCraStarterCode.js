import React from "react";
import ReactCRAStarterCodeTutorial from "@images/projects/2021/reactcrastartercode-tutorial.png";
import ReactCRAStarterCodeMobile1 from "@images/projects/2021/reactcrastartercode-mobile1.png";
import ReactCRAStarterCodeMobile2 from "@images/projects/2021/reactcrastartercode-mobile2.png";
import ReactCRAStarterCodeMobile3 from "@images/projects/2021/reactcrastartercode-mobile3.png";

const reactCraStarterCode = {
  title: "ReactGoogleAuthStarter",
  links: {
    Website: "https://react-google-auth-starter.herokuapp.com/",
    Github: "https://github.com/vincentktieu101/ReactGoogleAuthStarter",
    "YouTube Tutorial": "https://youtu.be/XZceEXlYC1w",
  },
  date: "April 2021",
  images: [
    ReactCRAStarterCodeTutorial,
    ReactCRAStarterCodeMobile1,
    ReactCRAStarterCodeMobile2,
    ReactCRAStarterCodeMobile3,
  ],
  description: (
    <React.Fragment>
      <div>
        In Spring of my junior year at UCSB, I became an tutor for CS148
        (Computer Science Project) in which students learn how to develop an
        application. Since most students wanted to create a React application, I
        wrote some starter code for Google OAuth. I also filmed a mini guide on
        how to use React/Google OAuth on YouTube as well as wrote a Github
        Readme.
      </div>
    </React.Fragment>
  ),
  iconsList: [
    "ReactJS",
    "GoogleDevelopers",
    "Heroku",
    "ReactBootstrap",
    "Javascript",
  ],
};

export default reactCraStarterCode;
