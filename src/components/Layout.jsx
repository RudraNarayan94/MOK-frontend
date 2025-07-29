import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => (
  <>
    <Navbar />
    <main className="p-4">
      <Outlet />
    </main>
  </>
);

export default Layout;
