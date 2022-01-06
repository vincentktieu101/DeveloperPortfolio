import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import PhoneIcon from "@material-ui/icons/Phone";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PostAddIcon from "@material-ui/icons/PostAdd";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import NewLink from "@components/Link/NewLink";

export default function ContactInfo() {
  return (
    <div id="contact-info" className="fade-in">
      <h1 className="text-center">
        MORE INFO{" "}
        {/* <span className="emoji-shake">
          <span role="img" aria-label="emoji" className="hover-shake">
            ✨
          </span>
        </span> */}
        <hr style={{ width: "360px" }} />
      </h1>
      <br />
      <h6>
        <NewLink
          href="https://www.google.com/maps/place/Rosemead,+CA/@34.064641,-118.1168945,13z/data=!3m1!4b1!4m5!3m4!1s0x80c2d074766c77b1:0xa0351d489643887c!8m2!3d34.0805651!4d-118.072846"
          className="link-no-styles"
        >
          <IconButton color="primary" className="hover-shake">
            <HomeIcon fontSize="small" />
          </IconButton>{" "}
          Rosemead, Los Angeles
        </NewLink>
      </h6>
      <h6>
        <NewLink
          href="https://www.google.com/search?q=6265375590&source=hp&ei=LttzYIS5Icvb-gSCrYiYCA&iflsig=AINFCbYAAAAAYHPpPhPl2um35fphoMiN7ljN2XEbmanf&oq=6265375590&gs_lcp=Cgdnd3Mtd2l6EAM6AggAOg4ILhCxA
              xCDARDHARCjAjoICAAQsQMQgwE6CAguELEDEIMBOgUIABCxAzoFCC4QsQM6CwguELEDEIMBEJMCOg4ILhCxAxCDARDHARCvAToICC4QxwEQrwE6BAgAEB46BwgAEMkDEB46BggAEAUQHlD8BlioJWCnJ2gCcAB4AIABdYgBqQmSAQM2LjaYAQCgAQGqA
              Qdnd3Mtd2l6sAEA&sclient=gws-wiz&ved=0ahUKEwiEiMyZ_ffvAhXLrZ4KHYIWAoMQ4dUDCAg&uact=5"
          className="link-no-styles"
        >
          <IconButton color="primary" className="hover-shake">
            <PhoneIcon fontSize="small" />
          </IconButton>{" "}
          (626) 537-5590
        </NewLink>
      </h6>
      <h6>
        <NewLink
          href="mailto:vincentktieu101@gmail.com"
          className="link-no-styles"
        >
          <IconButton color="primary" className="hover-shake">
            <MailOutlineIcon fontSize="small" />
          </IconButton>{" "}
          vincentktieu101@gmail.com
        </NewLink>
      </h6>
      <h6>
        <NewLink
          href="https://github.com/vincentktieu101"
          className="link-no-styles"
        >
          <IconButton color="primary" className="hover-shake">
            <GitHubIcon fontSize="small" />
          </IconButton>{" "}
          https://github.com/vincentktieu101
        </NewLink>
      </h6>
      <h6>
        <NewLink
          href="https://www.linkedin.com/in/vincentktieu/"
          className="link-no-styles"
        >
          <IconButton color="primary">
            <LinkedInIcon fontSize="small" className="hover-shake" />
          </IconButton>{" "}
          https://www.linkedin.com/in/vincentktieu/
        </NewLink>
      </h6>
      <h6>
        <NewLink
          href="https://drive.google.com/file/d/1Ch2iSVpyJ4ceXsiwBEqqW-Fz9l3a6uW0/view?usp=sharing"
          className="link-no-styles"
        >
          <IconButton color="primary" className="hover-shake">
            <PostAddIcon fontSize="small" />
          </IconButton>{" "}
          Resume
        </NewLink>
      </h6>
    </div>
  );
}
