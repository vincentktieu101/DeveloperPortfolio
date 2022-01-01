import React from "react";
import Container from "@material-ui/core/Container";
import NewLink from "./Link/NewLink";

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
          <NewLink
            href="https://www.gatsbyjs.com"
            style={{ color: "white" }}
            className="link"
          >
            <b>Gatsby</b>
          </NewLink>
          . Check source code{" "}
          <NewLink
            href="https://github.com/vincentktieu101/DeveloperPortfolio"
            style={{ color: "white" }}
            className="link"
          >
            <b>here</b>
          </NewLink>
          .
        </div>
      </Container>
    </footer>
  );
}
