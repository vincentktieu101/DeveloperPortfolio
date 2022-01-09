import React, { useContext, Fragment } from "react";
import { ModalContext } from "@components/Layout";
import ExternalLink from "@components/Link/ExternalLink";
import TodayIcon from "@material-ui/icons/Today";
import LaunchIcon from "@material-ui/icons/Launch";
import getTechIconsList from "./getTechIconsList";

export default function Project({
  title,
  links,
  date,
  images,
  description,
  iconsList,
}) {
  const handleModal = useContext(ModalContext);
  const linksComponent = (
    <Fragment>
      Links:{" "}
      {Object.keys(links).map((link, i) => {
        return (
          <React.Fragment key={i}>
            <ExternalLink href={links[link]} className="link link-ltr">
              {link}
            </ExternalLink>
            {i !== Object.keys(links).length - 1 ? " | " : ""}
          </React.Fragment>
        );
      })}
    </Fragment>
  );
  return (
    <div className="project-item fade-in">
      <div className="project-item-vl" />
      <div>
        <h3>{title}</h3>
        <div>
          <div style={{ marginBottom: "5px" }}>
            <TodayIcon style={{ fontSize: "16px" }} /> {date}
          </div>
          <div>
            <LaunchIcon style={{ fontSize: "16px" }} /> {linksComponent}
          </div>
        </div>
        <br />
        <div className="project-item-imgs" style={{ marginBottom: "10px" }}>
          {images.map((image, i) => {
            return (
              <Fragment key={i}>
                <button onClick={() => handleModal(images, i, linksComponent)}>
                  <img
                    key={i}
                    className="project-img"
                    src={image}
                    alt="project-img"
                  />
                </button>{" "}
              </Fragment>
            );
          })}
        </div>
        <div className="project-item-tech-row">
          {getTechIconsList(iconsList)}
        </div>
        <div className="project-item-desc">{description}</div>
      </div>
    </div>
  );
}
