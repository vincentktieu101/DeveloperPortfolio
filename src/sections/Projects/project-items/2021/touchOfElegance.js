import React from "react";
import TouchOfEleganceDesktop from "@images/projects/2021/touchofelegance-desktop.png";
import TouchOfEleganceMobile from "@images/projects/2021/touchofelegance-mobile.png";
import TouchOfEleganceMobile2 from "@images/projects/2021/touchofelegance-mobile-2.png";

const touchOfElegance = {
  title: "Touch Of Elegance",
  links: {
    Website: "https://touchofelegance.netlify.app/",
    Github: "https://github.com/vincentktieu101/TouchOfElegance",
  },
  date: "March 2021 - Present",
  images: [
    TouchOfEleganceDesktop,
    TouchOfEleganceMobile,
    TouchOfEleganceMobile2,
  ],
  description: (
    <React.Fragment>
      <div>
        This was my first time doing freelance work and I wrote the website from
        scratch in React GatsbyJS. The previous website that my aunt had for her
        shop was really outdated and I wanted to help them build a new one. The
        website includes some photos, a contact form (using EmailJS), and a menu
        that can be reached through a QR code.
      </div>
    </React.Fragment>
  ),
  iconsList: ["ReactJS", "GatsbyJS", "Netlify", "MaterialUI", "Javascript"],
};

export default touchOfElegance;
