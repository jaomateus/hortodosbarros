import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <section class="page">
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
