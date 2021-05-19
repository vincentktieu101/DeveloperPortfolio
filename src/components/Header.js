import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import CodeIcon from "@material-ui/icons/Code";
import ContactMailIcon from "@material-ui/icons/ContactMail";

export default function NavBar() {
  const [drawer, setDrawer] = useState();
  const [navShrink, setNavShrink] = useState(true);
  const [currentSection, setCurrentSection] = useState("cover");

  useEffect(() => {
    const about = document.getElementById("about");
    const projects = document.getElementById("projects");
    const contact = document.getElementById("contact");

    window.addEventListener("scroll", () => {
      if (window.pageYOffset < "10") {
        setNavShrink(true);
        document.getElementById("nav-bar").classList.remove("shrink");
      } else {
        setNavShrink(false);
        document.getElementById("nav-bar").classList.add("shrink");
      }

      if (window.pageYOffset >= contact.offsetTop - 200) {
        setCurrentSection("contact");
      } else if (window.pageYOffset >= projects.offsetTop - 200) {
        setCurrentSection("projects");
      } else if (window.pageYOffset >= about.offsetTop - 200) {
        setCurrentSection("about");
      } else {
        setCurrentSection("cover");
      }
    });
  }, [currentSection]);

  const list = (
    <div
      role="presentation"
      style={{ width: "250px" }}
      onClick={() => setDrawer(false)}
      onKeyDown={() => setDrawer(false)}
    >
      <List>
        <Link to="/" className="link-no-styles">
          <ListItem button key={"Home"}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>
              <b>HOME</b>
            </ListItemText>
          </ListItem>
        </Link>
        <Link to="/#about" className="link-no-styles">
          <ListItem button>
            <ListItemIcon>
              <MenuBookIcon />
            </ListItemIcon>
            <ListItemText>
              <b>ABOUT</b>
            </ListItemText>
          </ListItem>
        </Link>
        <Link to="/#projects" className="link-no-styles">
          <ListItem button>
            <ListItemIcon>
              <CodeIcon />
            </ListItemIcon>
            <ListItemText>
              <b>PROJECTS</b>
            </ListItemText>
          </ListItem>
        </Link>
        <Link to="/#contact" className="link-no-styles">
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
  );

  return (
    <header id="nav-bar">
      <Container>
        <div className="nav-items">
          <Link to="/" className="brand link-no-styles">
            {navShrink ? (
              <React.Fragment>
                <div className="brand-name">VINCENT'S</div>
                <div className="brand-under">Developer Portfolio</div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <h6>VINCENT'S DEVELOPER PORTFOLIO</h6>
              </React.Fragment>
            )}
          </Link>
          <div className="desktop-render">
            <Link
              to="/"
              className={
                currentSection === "cover"
                  ? "nav-link nav-link-ltr"
                  : "nav-link-disabled nav-link-ltr"
              }
              style={{ margin: "0 10px" }}
            >
              <b>HOME</b>
            </Link>
            <Link
              to="/#about"
              className={
                currentSection === "about"
                  ? "nav-link nav-link-ltr"
                  : "nav-link-disabled nav-link-ltr"
              }
              style={{ margin: "0 10px" }}
            >
              <b>ABOUT</b>
            </Link>
            <Link
              to="/#projects"
              className={
                currentSection === "projects"
                  ? "nav-link nav-link-ltr"
                  : "nav-link-disabled nav-link-ltr"
              }
              style={{ margin: "0 10px" }}
            >
              <b>PROJECTS</b>
            </Link>
            <Link
              to="/#contact"
              className={
                currentSection === "contact"
                  ? "nav-link nav-link-ltr"
                  : "nav-link-disabled nav-link-ltr"
              }
              style={{ margin: "0 10px" }}
            >
              <b>CONTACT</b>
            </Link>
          </div>
          <div className="mobile-render">
            <IconButton
              onClick={() => setDrawer(true)}
              style={{ margin: "0", padding: "0" }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
            <Drawer
              anchor={"right"}
              open={drawer}
              onClose={() => setDrawer(false)}
              className="drawer"
            >
              {list}
            </Drawer>
          </div>
        </div>
      </Container>
    </header>
  );
}
