import React, { createContext } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./Header";
import Footer from "./Footer";

export const ModalContext = createContext();

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <React.Fragment>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      {children}
      <Footer />
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
