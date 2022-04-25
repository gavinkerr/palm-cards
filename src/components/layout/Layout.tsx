import { Fragment } from "react";

import MainNavigation from "./MainNavigation";

const Layout = (props: { children: JSX.Element }) => {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
