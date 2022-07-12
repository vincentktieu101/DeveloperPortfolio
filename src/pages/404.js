import * as React from "react";

import SEO from "@components/SEO";

const NotFoundPage = () => (
  <React.Fragment>
    <SEO title="404: Not found" />
    <h1>404: Page Not Found</h1>
    <p>You tried to access a page that doesn&#39;t exist... the sadness.</p>
  </React.Fragment>
);

export default NotFoundPage;
