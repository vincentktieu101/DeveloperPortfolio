import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Container from "@material-ui/core/Container"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Drawer from "@material-ui/core/Drawer"
import Divider from "@material-ui/core/Divider"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import HomeIcon from "@material-ui/icons/Home"
import MenuBookIcon from "@material-ui/icons/MenuBook"
import CodeIcon from "@material-ui/icons/Code"
import ContactMailIcon from '@material-ui/icons/ContactMail'

export default function NavBar() {
  const [navShrink, setNavShrink] = useState(true)
  const [state, setState] = useState()

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset < "10") {
        setNavShrink(true)
      } else {
        setNavShrink(false)
      }
    })
  }, [])

  const list = (
    <div
      role="presentation"
      style={{ width: "250px" }}
      onClick={() => setState(false)}
      onKeyDown={() => setState(false)}
    >
      <List>
        <Link to="/" className="nav-link" style={{ color: "black" }}>
          <ListItem button key={"Home"}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>
              <b>HOME</b>
            </ListItemText>
          </ListItem>
        </Link>
        <Link to="/#about" className="nav-link" style={{ color: "black" }}>
          <ListItem button>
            <ListItemIcon>
              <MenuBookIcon />
            </ListItemIcon>
            <ListItemText>
              <b>ABOUT</b>
            </ListItemText>
          </ListItem>
        </Link>
        <Link to="/#projects" className="nav-link" style={{ color: "black" }}>
          <ListItem button>
            <ListItemIcon>
              <CodeIcon />
            </ListItemIcon>
            <ListItemText>
              <b>PROJECTS</b>
            </ListItemText>
          </ListItem>
        </Link>
        <Link to="/#contact" className="nav-link" style={{ color: "black" }}>
          <ListItem button>
            <ListItemIcon>
              <ContactMailIcon />
            </ListItemIcon>
            <ListItemText>
              <b>CONTACT</b>
            </ListItemText>
          </ListItem>
        </Link>
        <Divider />
      </List>
    </div>
  )

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
                <h6 style={{ color: "black" }}>
                  VINCENT'S DEVELOPER PORTFOLIO
                </h6>
              </React.Fragment>
            )}
          </Link>
          <div className="nav-no-collapse">
            <Link to="/" className="nav-link" style={{ margin: "0 10px" }}>
              <b>HOME</b>
            </Link>
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
            <Link
              to="/#contact"
              className="nav-link"
              style={{ margin: "0 10px" }}
            >
              <b>CONTACT</b>
            </Link>
          </div>
          <div className="nav-on-collapse">
            <IconButton onClick={() => setState(true)}>
              <MenuIcon
                fontSize="large"
                style={{ margin: "0", padding: "0" }}
              />
            </IconButton>
            <Drawer
              anchor={"right"}
              open={state}
              onClose={() => setState(false)}
              className="drawer"
            >
              {list}
            </Drawer>
          </div>
        </div>
      </Container>
    </header>
  )
}
