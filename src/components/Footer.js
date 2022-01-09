import React from "react";
import Container from "@material-ui/core/Container";
import ExternalLink from "./Link/ExternalLink";

export default function Footer() {
  return (
    <footer id="footer" className="text-center fade-in">
      <Container>
        <h6 style={{ paddingBottom: "5px" }}>
          © {new Date().getFullYear()}, VINCENT'S DEVELOPER PORTFOLIO
        </h6>
        <div>
          Built with
          {` `}
          <ExternalLink
            href="https://www.gatsbyjs.com"
            color="white"
            className="link"
          >
            <b>Gatsby</b>
          </ExternalLink>
          . Check source code{" "}
          <ExternalLink
            href="https://github.com/vincentktieu101/DeveloperPortfolio"
            color="white"
            className="link"
          >
            <b>here</b>
          </ExternalLink>
          .
        </div>
      </Container>
    </footer>
  );
}
