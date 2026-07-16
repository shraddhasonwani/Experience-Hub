import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../Styles/Layout.css";

const Layout = () => {
  return (
    <div className="layout">

      <Sidebar />

      <main className="layout-content">
        <Outlet />
      </main>

    </div>
  );
};

export default Layout;