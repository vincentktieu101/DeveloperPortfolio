import React from "react";
import Carousel from "react-material-ui-carousel";
import SkillItem from "./SkillItem";
import skills from "@objects/skills";

export default function Skills() {
  return (
    <div className="about-skill fade-in">
      <Carousel swipe={true} navButtonsAlwaysVisible={true} autoPlay={false}>
        {skills.map((skill, i) => (
          <SkillItem key={i} {...skill} />
        ))}
      </Carousel>
    </div>
  );
}
