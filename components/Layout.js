import React from "react";
import Footer from "./Footer";
import Header from "./Header";
// Hieu

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
