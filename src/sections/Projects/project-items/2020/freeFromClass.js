import React from "react";
import FreeFromClassDesktop from "@images/projects/2020/freefromclass-desktop.png";
import FreeFromClassMobile2 from "@images/projects/2020/freefromclass-mobile2.png";
import FreeFromClassMobile3 from "@images/projects/2020/freefromclass-mobile3.png";
import FreeFromClassMobile from "@images/projects/2020/freefromclass-mobile.png";

const freeFromClass = {
  title: "FreeFromClass",
  links: {
    Website: "https://cs48-s20-s2-t2-prod.herokuapp.com/",
    Github: "https://github.com/ucsb-cs48-s20/project-s2-t2-free",
  },
  date: "March 2020 - May 2020",
  images: [
    FreeFromClassDesktop,
    FreeFromClassMobile2,
    FreeFromClassMobile3,
    FreeFromClassMobile,
  ],
  description: (
    <React.Fragment>
      <div>
        FreeFromClass was a class project for CS48. This was my introduction
        into web development where I worked in a team of 4 to develop an app
        from scratch to deployment. Through this app, I learned everything from
        React NextJS, Auth0, MongoDB, Cypress testing, and Heroku. I learned
        frontend development, how to build RESTful APIs, responsive design, and
        user experience.
      </div>
    </React.Fragment>
  ),
  iconsList: [
    "ReactJS",
    "NextJS",
    "MongoDB",
    "Auth0",
    "Heroku",
    "Cypress",
    "Jest",
    "ReactBootstrap",
    "Javascript",
  ],
};

export default freeFromClass;
