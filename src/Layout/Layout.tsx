import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/admin/Header";
import Footer from "../components/admin/Footer";
import { useLocation } from "react-router-dom";

const Layout: React.FC = () => {
  const location = useLocation();
  return (
    <>
      <Header />
      <div
        style={{
          backgroundColor: location.pathname === "/cart" ? "#f7f7f7" : "",
        }}
      >
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
