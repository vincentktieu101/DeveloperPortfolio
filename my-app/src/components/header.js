import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Container from "@material-ui/core/Container"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"

export default function NavBar() {
  const [navShrink, setNavShrink] = useState(true)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset < "10") {
        setNavShrink(true)
      } else {
        setNavShrink(false)
      }
    })
  }, [])

  return (
    <header className="nav-bar">
      <Container>
        <div className="nav-items">
          <Link to="/" className="brand nav-link">
            {navShrink ? (
              <React.Fragment>
                <h4 className="brand-name">VINCENT'S</h4>
                <div className="brand-under">Developer Portfolio</div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <h5 style={{ color: "black" }}>
                  VINCENT'S DEVELOPER PORTFOLIO
                </h5>
              </React.Fragment>
            )}
          </Link>
          <div className="nav-no-collaspe">
            <Link
              to="/#about"
              className="nav-link"
              style={{ margin: "0 10px" }}
            >
              <b>ABOUT</b>
            </Link>
            <Link
              to="/#projects"
              className="nav-link"
              style={{ margin: "0 10px" }}
            >
              <b>PROJECTS</b>
            </Link>
          </div>
          <div className="nav-on-collaspe">
            <IconButton>
              <MenuIcon fontSize="large" />
            </IconButton>
          </div>
        </div>
      </Container>
    </header>
  )
}
