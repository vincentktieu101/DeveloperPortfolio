import React from "react";
import contactItems from "./contact-items";
import IconNewLink from "@components/Link/IconNewLink";

export default function ContactInfo() {
  return (
    <div id="contact-info" className="fade-in">
      <h1 className="text-center">
        MORE INFO <hr style={{ width: "360px" }} />
      </h1>
      <br />
      {contactItems.map((contact) => (
        <IconNewLink {...contact} />
      ))}
    </div>
  );
}
