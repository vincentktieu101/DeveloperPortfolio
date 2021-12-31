import React from "react";
import { Link } from "gatsby";

function NavLink(props) {
  const { section, currentSection } = props;
  const route = section === "home" ? "" : "#" + section;

  return (
    <Link
      to={`/${route}`}
      className={
        currentSection === section
          ? "nav-link nav-link-ltr"
          : "nav-link-disabled nav-link-ltr"
      }
      style={{ margin: "0 10px" }}
    >
      <b>{section.toUpperCase()}</b>
    </Link>
  );
}

export default NavLink;
