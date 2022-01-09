import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ExternalLink from "./ExternalLink";

function IconExternalLink(props) {
  const { href, Icon, text, ...rest } = props;
  return (
    <div>
      <ExternalLink href={href} {...rest}>
        <IconButton color="primary" className="hover-shake">
          <Icon fontSize="small" />
        </IconButton>{" "}
        <span className="">{text}</span>
      </ExternalLink>
    </div>
  );
}

export default IconExternalLink;
