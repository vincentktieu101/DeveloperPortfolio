import React from "react";
import Carousel from "react-material-ui-carousel";
import AboutSkillsHeader from "./AboutSkillsHeader";
import Computer from "../../images/main/computer.webp";
import Backend from "../../images/main/backend.webp";
import Design from "../../images/main/design.webp";
import Product from "../../images/main/product.webp";
import FrontendDevelopmentBg from "../../images/backgrounds/frontend-development.jpeg";
import BackendDevelopmentBg from "../../images/backgrounds/backend-development.png";
import UserInterfaceBg from "../../images/backgrounds/user-interface.jpeg";
import ProductDevelopmentBg from "../../images/backgrounds/product-development.jpeg";

export default function AboutSkills() {
  const backgrounds = [
    FrontendDevelopmentBg,
    UserInterfaceBg,
    BackendDevelopmentBg,
    ProductDevelopmentBg,
  ];

  const backgroundTexts = [
    FrontendDevelopmentText,
    UserInterfaceText,
    BackendDevelopmentText,
    ProductDevelopmentText,
  ];

  return (
    <div className="about-skill fade-in">
      <Carousel swipe={true} navButtonsAlwaysVisible={true} autoPlay={false}>
        {backgrounds.map((background, i) => (
          <React.Fragment>
            <div
              className="about-skill__bg"
              style={{
                backgroundImage: `url(${background})`,
              }}
            />
            <AboutSkillsHeader />
            <div className="about-skill__body">
              <div className="about-skill__text">{backgroundTexts[i]}</div>
            </div>
          </React.Fragment>
        ))}
      </Carousel>
    </div>
  );
}

const FrontendDevelopmentText = (
  <React.Fragment>
    <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
      <img src={Computer} style={{ marginRight: "20px" }} alt="" />
      Frontend Development
    </h2>
    <div>
      Frontend is more than getting interfaces pixel perfect. It's about
      building functional interfaces into detailed architechitures that promote
      rapid continous development. I'm proficient with HTML, CSS, and Javascript
      along with frameworks like React, Redux, and Google OAuth.
    </div>
  </React.Fragment>
);

const UserInterfaceText = (
  <React.Fragment>
    <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
      <img src={Design} style={{ marginRight: "20px" }} alt="" />
      User Experience & Design
    </h2>
    <div>
      Interfaces need to be intuitive and enjoyable to use. I have learned about
      UI/UX by planning and designing my personal projects. Through learning
      concepts like responsive design, interaction design, and accessibility,
      I'm able to work with designers to create functional and stunning
      interfaces.
    </div>
  </React.Fragment>
);

const BackendDevelopmentText = (
  <React.Fragment>
    <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
      <img src={Backend} style={{ marginRight: "20px" }} alt="" />
      Backend Development
    </h2>
    <div>
      From my background in CS, I have practice with Object-Oriented
      Programming, Data Structures & Algorithms, Database Design &
      Implementation, and APIs. Reliablity, efficiency, and security are super
      important to me as a programmer. Some backend frameworks I am familiar
      with include NodeJS, Express, Flask, and Django.
    </div>
  </React.Fragment>
);

const ProductDevelopmentText = (
  <React.Fragment>
    <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
      <img src={Product} style={{ marginRight: "20px" }} alt="" />
      Product Development
    </h2>
    <div>
      I've developed plenty of apps starting from scratch where I've taken them
      through planning, designing, technology researching, deployment, and
      production. I'm comfortable working in teams, communicating through Agile
      practices, using Git for version control and code review practices, and
      writing code that scales.
    </div>
  </React.Fragment>
);
