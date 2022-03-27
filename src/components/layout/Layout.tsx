import { Fragment } from 'react';

import MainNavigation from './MainNavigation';

const Layout = (props: { children: JSX.Element}) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;