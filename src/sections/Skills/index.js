import React from "react";
import Carousel from "react-material-ui-carousel";
import SkillItem from "./SkillItem";
import skillItems from "./skill-items";

export default function Skills() {
  return (
    <div className="about-skill fade-in">
      <Carousel swipe={true} navButtonsAlwaysVisible={true} autoPlay={false}>
        {skillItems.map((skill, i) => (
          <SkillItem key={i} {...skill} />
        ))}
      </Carousel>
    </div>
  );
}
