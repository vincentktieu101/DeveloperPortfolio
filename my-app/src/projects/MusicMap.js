import React from "react"
import MusicMapDesktop from "../images/projects/musicmap-desktop.png"
import MusicMapMobile from "../images/projects/musicmap-mobile.png"

export default function MusicMap({handleModal}) {
  return (
    <div className="project-item">
      <div className="vl" />
      <div>
        <h3>MusicMap</h3>
        Links:{" "}
        <a
          className="link"
          href="https://vincentktieu101.github.io/MusicMap/"
          target="_blank"
          rel="noreferrer"
        >
          Website
        </a>{" "}
        |{" "}
        <a
          className="link"
          href="https://github.com/vincentktieu101/MusicMap"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <br />
        <br />
        <button onClick={() => handleModal(MusicMapDesktop)}>
          <img
            className="project-img"
            src={MusicMapDesktop}
            alt="project-img"
          />
        </button>
        {" "}
        <button onClick={() => handleModal(MusicMapMobile)}>
          <img 
            className="project-img"
            src={MusicMapMobile}
            alt="project-img" 
          />
        </button>
        <br />
        <br />
        <div className="project-desc">
          <div>March 2021</div>
          <div>
            MusicMap is my solution for organizing 5000+ music genres and
            500,000+ songs into a user friendly interface.
            The app features an easy-to-navigate map of genres that users can
            tap to plays an audio sample in that genre. Other things 
            that users can do in the app is refresh the map, search the genre
            in the app, search for a genre on Spotify, go on genre shuffle mode,
            and skip to the next audio sample.
          </div>
        </div>
      </div>
    </div>
  )
}
