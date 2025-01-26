import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar";
import "./Layout.scss";

const Layout = () => {
  return (
    <div className="layout">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
