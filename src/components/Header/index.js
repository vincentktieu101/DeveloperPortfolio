import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import DrawerContent from "../DrawerContent";

import NavLink from "./NavLink";
import { BrandName, BrandDesc } from "./styles";

const sections = ["home", "about", "experience", "projects", "contact"];

function Header() {
  const [drawer, setDrawer] = useState();
  const [navShrink, setNavShrink] = useState(true);
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    const documentSections = {};

    for (const section of sections) {
      documentSections[section] = document.getElementById(section);
    }

    documentSections["home"] = document.getElementById("cover");

    window.addEventListener("scroll", () => {
      if (window.pageYOffset < "10") {
        setNavShrink(true);
        document.getElementById("nav-bar").classList.remove("shrink");
      } else {
        setNavShrink(false);
        document.getElementById("nav-bar").classList.add("shrink");
      }

      for (const section of sections.slice().reverse()) {
        if (
          section &&
          window.pageYOffset >= documentSections[section].offsetTop - 200
        ) {
          setCurrentSection(section);
          break;
        }
      }
    });
  }, []);

  return (
    <header id="nav-bar">
      <Container>
        <div className="nav-items">
          <Link to="/" className="brand link-no-styles">
            {navShrink ? (
              <React.Fragment>
                <BrandName>VINCENT'S</BrandName>
                <BrandDesc>Developer Portfolio</BrandDesc>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <h6>VINCENT'S DEVELOPER PORTFOLIO</h6>
              </React.Fragment>
            )}
          </Link>
          <div className="desktop-render">
            {sections.map((section) => (
              <NavLink section={section} currentSection={currentSection} />
            ))}
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
              <div
                role="presentation"
                style={{ width: "250px" }}
                onClick={() => setDrawer(false)}
                onKeyDown={() => setDrawer(false)}
              >
                <DrawerContent />
              </div>
            </Drawer>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
