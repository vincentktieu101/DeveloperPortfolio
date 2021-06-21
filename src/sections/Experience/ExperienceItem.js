import React from "react";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";

export default function ExperienceItem(props) {
  const { type, title, company, location, time, text } = props;

  return (
    <div className="experience-item fade-in">
      <div
        className={`experience-item__sidebar experience-item__sidebar--${type}`}
      >
        <div className="experience-item__icon-box">
          {type === "work" && <WorkIcon />}
          {type === "school" && <SchoolIcon />}
        </div>
      </div>
      <div className="experience-item__body">
        <h4>{title}</h4>
        <h6>
          {company}, {location} ({time})
        </h6>
        <div className="experience-item__body-text">{text}</div>
      </div>
    </div>
  );
}
