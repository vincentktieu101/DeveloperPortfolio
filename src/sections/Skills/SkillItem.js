import React from "react";
import Header from "./Header";

function SkillItem(props) {
  const { title, background, icon, text } = props;
  return (
    <React.Fragment>
      <div
        className="about-skill__bg"
        style={{
          backgroundImage: `url(${background})`,
        }}
      />
      <Header />
      <div className="about-skill__body">
        <div className="about-skill__text">
        <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
          <img src={icon} style={{ marginRight: "20px" }} alt="" />
          {title}
        </h2>
        <div>{text}</div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default SkillItem;