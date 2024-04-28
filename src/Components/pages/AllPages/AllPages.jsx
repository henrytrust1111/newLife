import React from "react";
import Header from "../../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../Footer/Footer";
import ScrollCard from "../../card/card";

const AllPages = () => {
  return (
    <>
      <Header />
      <Outlet />
      <ScrollCard />
      <Footer />
    </>
  );
};

export default AllPages;
