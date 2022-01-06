import React from "react";
import MusicMapDesktop from "@images/projects/2021/musicmap-desktop.png";
import MusicMapMobile from "@images/projects/2021/musicmap-mobile.png";

const musicMap = {
  title: "MusicMap",
  links: {
    Website: "https://vincentktieu101.github.io/MusicMap/",
    Github: "https://github.com/vincentktieu101/MusicMap",
  },
  date: "March 2021",
  images: [MusicMapDesktop, MusicMapMobile],
  description: (
    <React.Fragment>
      <div>
        MusicMap is my solution for organizing 5000+ music genres and 500,000+
        songs into a user friendly interface. The app features an
        easy-to-navigate map of genres that users can tap to play an audio
        sample in that genre. Other things that users can do in the app is
        refresh the map, search the genre in the app, search for a genre on
        Spotify, go on genre shuffle mode, and skip to the next audio sample.
        MusicMap is developed for both desktop and mobile!
      </div>
    </React.Fragment>
  ),
  iconsList: ["ReactJS", "Netlify", "Github", "MaterialUI", "Javascript"],
};

export default musicMap;
