import React from "react";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

import address from "./address";
import phone from "./phone";
import email from "./email";
import github from "./github";
import linkedin from "./linkedin";
import resume from "./resume";

interface contact {
  href: string;
  Icon: React.ComponentType<SvgIconProps>;
  text: string;
}

const contacts: contact[] = [address, phone, email, github, linkedin, resume];

export default contacts;
export type { contact };
