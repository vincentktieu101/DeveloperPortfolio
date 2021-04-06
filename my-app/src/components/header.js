import React from "react"
import { Link } from "gatsby"
import Container from "@material-ui/core/Container"

export default function NavBar() {
  return (
    <header className="nav-bar">
      <Container>
        <div className="nav-items">
          <Link to="/" className="brand link">
            <h4 className="brand-name">
              <b>VINCENT'S</b>
            </h4>
            <div className="brand-under">Developer Portfolio</div>
          </Link>
          <div>
            <Link to="/#about" className="link" style={{ margin: "0 10px" }}>
              <b>ABOUT</b>
            </Link>
            <Link to="/#projects" className="link" style={{ margin: "0 10px" }}>
              <b>PROJECTS</b>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  )
}
