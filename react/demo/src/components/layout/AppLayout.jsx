import React from "react";
import Header from "../UI/pages/Header";
import Footer from "../UI/pages/Footer";
import { Outlet, useNavigation } from "react-router-dom";

const AppLayout = () => {
  const navigation =  useNavigation();
  if(navigation.state === "loading") return <h2>Loading....</h2>
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
