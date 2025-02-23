import React from "react";
import Header from "../UI/pages/Header";
import Footer from "../UI/pages/Footer";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
