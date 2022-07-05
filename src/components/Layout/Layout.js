import React from "react";
import FooterComponent from "../FooterComponent/FooterComponent";
import Header from "../Header/Header";

import classes from "./Layout.scss";

const Layout = ({ children, userId, handleLogout }) => {
  return (
    <>
      <div className="user-change">
        <h4 className="user-change__text">Welcome {userId}</h4>
        <button
          onClick={() => {
            handleLogout();
          }}
          className="log-out"
        >
          Logout
        </button>
      </div>{" "}
      <Header />
      <main className={classes.container}>{children}</main>
      <FooterComponent />
    </>
  );
};

export default Layout;
