import React from "react";
import { Link } from "gatsby";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import WorkIcon from "@material-ui/icons/Work";
import CodeIcon from "@material-ui/icons/Code";
import ContactMailIcon from "@material-ui/icons/ContactMail";

export default function Sidebar() {
  return (
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
      <Link to="/#experience" className="link-no-styles">
        <ListItem button>
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText>
            <b>EXPERIENCE</b>
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
  );
}
