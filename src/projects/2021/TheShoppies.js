import React from "react";
import TheShoppiesDesktop from "../../images/projects/2021/theshoppies-desktop.png";
import TheShoppiesMobile from "../../images/projects/2021/theshoppies-mobile.png";
import Project from "../../components/Project";
import getTechIcons from "../getTechIcons";

export default function TheShoppies() {
  const title = "TheShoppies";
  const links = {
    Website: "https://vincentktieu-theshoppies.netlify.app/",
    Github: "https://github.com/vincentktieu101/TheShoppies",
  };
  const date = "May 2021";
  const images = [TheShoppiesDesktop, TheShoppiesMobile];
  const description = (
    <React.Fragment>
      <div>
        Simple app used to enter in Shopify's UX & Web Developer Challenge
        listed{" "}
        <a
          href="https://docs.google.com/document/d/1SdR9rQpocsH5rPTOcxr9noqHRld5NJlylKO9Hf94U8U/edit#heading=h.31w9woubunro"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        . This is an app that helps query for movies using the{" "}
        <a
          href="https://www.omdbapi.com/"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          OMDb API
        </a>{" "}
        so that users can "nominate" them and save their nominations to a
        database.
      </div>
    </React.Fragment>
  );
  const icons = {
    ReactJS: true,
    GoogleDevelopers: true,
    Netlify: true,
    Firebase: true,
    Javascript: true,
  };
  return (
    <Project
      title={title}
      links={links}
      date={date}
      images={images}
      description={description}
      techIcons={getTechIcons(icons)}
    />
  );
}
