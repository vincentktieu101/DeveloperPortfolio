import React from "react";
import ChatAppDesktop from "@images/projects/2021/chatapp-desktop.png";
import ChatAppMobile from "@images/projects/2021/chatapp-mobile.png";

const chatApp = {
  title: "ChatApp",
  links: {
    Website: "https://vincentktieu-chatapp.herokuapp.com/",
    Github: "https://github.com/vincentktieu101/ChatApp",
  },
  date: "April 2021",
  images: [ChatAppDesktop, ChatAppMobile],
  description: (
    <React.Fragment>
      <div>
        Fullstack Chat Application using React, NodeJS, Express, SocketIO, and
        Google OAuth! Because of SocketIO, the chat application updates for ALL
        users on the socket without requiring manual refreshing.
      </div>
    </React.Fragment>
  ),
  iconsList: [
    "ReactJS",
    "ExpressJS",
    "NodeJS",
    "SocketIO",
    "Heroku",
    "MaterialUI",
    "Javascript",
  ],
};

export default chatApp;
