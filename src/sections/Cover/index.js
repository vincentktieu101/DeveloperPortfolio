import React from "react";
import VincentHeadshot from "@images/main/vincent-headshot.png";
import { Link } from "gatsby";
import ExternalLink from "@components/Link/ExternalLink";
import resumeLink from "@objects/resume-link";
import {
  CoverBackground,
  CoverHeroImage,
  CoverText,
  CoverBody,
  CoverButtons,
  CoverButton,
  CoverAnimatedTitle,
  CoverAnimatedLine,
} from "./styles";

export default function Cover() {
  return (
    <div id="cover" className="fade-in">
      <CoverBackground />
      <CoverHeroImage src={VincentHeadshot} alt="Vincent Tieu" />
      <CoverBody>
        <CoverText>
          <h2>I'm VINCENT TIEU</h2>
          <CoverAnimatedTitle>
            <CoverAnimatedLine>Full-Stack Web Developer</CoverAnimatedLine>
            <CoverAnimatedLine>Software Engineer</CoverAnimatedLine>
          </CoverAnimatedTitle>
        </CoverText>
        <CoverButtons>
          <ExternalLink
            href={resumeLink}
            style={{ width: "100%" }}
          >
            <CoverButton variant="contained" color="primary">
              <h6>RESUME</h6>
            </CoverButton>
          </ExternalLink>
          <Link
            to="/#contact"
            style={{ width: "100%" }}
          >
            <CoverButton variant="contained">
              <h6>CONTACT</h6>
            </CoverButton>
          </Link>
        </CoverButtons>
      </CoverBody>
    </div>
  );
}
