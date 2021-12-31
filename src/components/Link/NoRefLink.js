import React from "react";

function NoRef(props) {
  const { children, ...rest } = props;

  return (
    <a target="_blank" rel="noreferrer" {...rest}>
      {children}
    </a>
  );
}

export default NoRef;
