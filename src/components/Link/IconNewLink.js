import React from "react";
import IconButton from "@material-ui/core/IconButton";
import NewLink from "./NewLink";

function IconNewLink(props) {
  const { href, Icon, text } = props;
  return (
    <h6>
      <NewLink href={href} className="link-no-styles">
        <IconButton color="primary" className="hover-shake">
          <Icon fontSize="small" />
        </IconButton>{" "}
        {text}
      </NewLink>
    </h6>
  );
}

export default IconNewLink;
