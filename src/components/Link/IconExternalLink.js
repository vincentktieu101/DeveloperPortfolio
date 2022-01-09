import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ExternalLink from "./ExternalLink";
import { StyledIconExternalLink } from "./styles";

function IconExternalLink(props) {
  const { href, Icon, text, ...rest } = props;
  return (
    <StyledIconExternalLink>
      <ExternalLink href={href} {...rest}>
        <IconButton color="primary" className="hover-shake">
          <Icon fontSize="small" />
        </IconButton>{" "}
        <span>{text}</span>
      </ExternalLink>
    </StyledIconExternalLink>
  );
}

export default IconExternalLink;
