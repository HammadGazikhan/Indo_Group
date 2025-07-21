/** @format */
import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";

type NavFootProps = {
  children: React.ReactNode;
};

function NavFoot({ children }: NavFootProps) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default NavFoot;
