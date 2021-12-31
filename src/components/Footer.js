import React from "react";
import Container from "@material-ui/core/Container";
import NoRefLink from "./Link/NoRefLink";

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
          <NoRefLink href="https://www.gatsbyjs.com">
            <b>Gatsby</b>
          </NoRefLink>
          . Check source code{" "}
          <NoRefLink href="https://github.com/vincentktieu101/DeveloperPortfolio">
            <b>here</b>
          </NoRefLink>
          .
        </div>
      </Container>
    </footer>
  );
}
