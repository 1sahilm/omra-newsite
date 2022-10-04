import React from "react";
import Footer from "./footer";
import Header from "./header-2";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};
export default Layout;
