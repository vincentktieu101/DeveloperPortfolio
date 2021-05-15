import React from "react";
import Container from "@material-ui/core/Container";

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
          <a
            href="https://www.gatsbyjs.com"
            target="_blank"
            className="link"
            rel="noreferrer"
            style={{ color: "white" }}
          >
            <b>Gatsby</b>
          </a>
          . Check source code{" "}
          <a
            href="https://github.com/vincentktieu101/DeveloperPortfolio"
            className="link"
            target="_blank"
            rel="noreferrer"
            style={{ color: "white" }}
          >
            <b>here</b>
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}
