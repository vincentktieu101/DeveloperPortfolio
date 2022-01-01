import React from "react";

function NewLink(props) {
  const { children, ...rest } = props;

  return (
    <a target="_blank" rel="noreferrer" {...rest}>
      {children}
    </a>
  );
}

export default NewLink;
