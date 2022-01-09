import React from "react";
import contactItems from "@objects/contacts";
import IconExternalLink from "@components/Link/IconExternalLink";

export default function ContactInfo() {
  return (
    <div id="contact-info" className="fade-in">
      <h1 className="text-center">
        MORE INFO <hr style={{ width: "360px" }} />
      </h1>
      <br />
      {contactItems.map((contact, i) => (
        <IconExternalLink key={i} {...contact} />
      ))}
    </div>
  );
}
