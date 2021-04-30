import React from "react"
import ChatAppDesktop from "../images/projects/chatapp-desktop.png"
import ChatAppMobile from "../images/projects/chatapp-mobile.png"
import Project from "../components/Project"

export default function ChatApp() {
  const title = "ChatApp"
  const links = {
    "Website": "https://vincentktieu-chatapp.herokuapp.com/",
    "Github": "https://github.com/vincentktieu101/ChatApp",
  }
  const date = "April 2021"
  const images = [ChatAppDesktop, ChatAppMobile]
  const description = (
    <React.Fragment>
      <div>
        Fullstack Chat Application using React, NodeJS, Express, SocketIO, and 
        Google OAuth! Because of SocketIO, the chat application updates 
        for ALL users on the socket without requiring manual refreshing!!!
      </div>
    </React.Fragment>
  )

  return (
    <Project
      title={title}
      links={links}
      date={date}
      images={images}
      description={description}
    />
  )
}
