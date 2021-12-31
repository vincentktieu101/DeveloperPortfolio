import React from "react";

function NoRef(props) {
  const { href, children } = props;
  const color = props.color === undefined ? "white" : props.color;

  return (
    <a
      href={href}
      target="_blank"
      className="link"
      rel="noreferrer"
      style={{ color: color }}
    >
      <b>{children}</b>
    </a>
  );
}

export default NoRef;
