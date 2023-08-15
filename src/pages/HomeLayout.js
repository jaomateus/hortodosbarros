import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "../components";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  // const value = 'some value'   Check GLobal Loading below
  return (
    <>
      <Navbar />
      <Sidebar />
      <section>
        {isPageLoading ? <div className="loading" /> : <Outlet />}
        {/* New feature from react-router that allows me to pass global context values to the outlet, being available everywhere in my app. Look at example on Plantcard component.
        <Outlet context={{value}}/>   */}
      </section>
      <Footer />
    </>
  );
};

export default HomeLayout;
