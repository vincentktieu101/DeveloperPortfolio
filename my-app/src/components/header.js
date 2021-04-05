import React from "react"
import { Link } from "gatsby"
import Container from "@material-ui/core/Container"

export default function NavBar() {
  return (
    <header className="nav-bar">
      <Container>
        <div className="links">
          <Link to="/" className="brand link">
            <h3 className="brand-name"><b>VINCENT'S</b></h3>
            <div className="brand-under">Developer Portfolio</div>
          </Link>
          <div>
            <Link to="/about" className="link">
              <b>ABOUT</b>
            </Link>
            {" "}
            <Link to="/projects" className="link">
              <b>PROJECTS</b>
            </Link>
          </div>
        </div>
      </Container>
    </header>

  );
}
