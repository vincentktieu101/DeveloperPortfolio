import React from "react";
import { StyledExternalLink } from "./styles";

function ExternalLink(props) {
  const { children, ...rest } = props;

  return (
    <StyledExternalLink target="_blank" rel="noreferrer" {...rest}>
      {children}
    </StyledExternalLink>
  );
}

export default ExternalLink;
