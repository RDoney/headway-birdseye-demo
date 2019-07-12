import React from 'react';
import { Helmet } from 'react-helmet';

const Layout = props => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Birdseye</title>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
    </Helmet>

    <div>{props.children}</div>
  </>
);

export default Layout;
