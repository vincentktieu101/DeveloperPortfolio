import React from "react";
import { Link } from "gatsby";

function NavLink(props) {
  const { section, currentSection } = props;
  const route = section === "home" ? "" : "#" + section;

  return (
    <Link
      to={`/${route}`}
      className={`nav-link-ltr ${currentSection === section ? "nav-link" : "nav-link-disabled"}`}
      style={{marginRight: "10px", marginLeft: "10px"}}
    >
      <b>{section.toUpperCase()}</b>
    </Link>
  );
}

export default NavLink;
