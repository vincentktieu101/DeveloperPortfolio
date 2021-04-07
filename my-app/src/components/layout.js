/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Container from "@material-ui/core/Container"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        {children}
        <footer id="footer">
          <Container>
            <div>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a
                href="https://www.gatsbyjs.com"
                className="link"
                target="_blank"
                rel="noreferrer"
              >
                Gatsby
              </a>
              . Check out the source code{" "}
              <a
                href="https://github.com/vincentktieu101/DeveloperPortfolio"
                className="link"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              .
              <br />
              <br />
              <br />
            </div>
          </Container>
        </footer>
      </div>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
