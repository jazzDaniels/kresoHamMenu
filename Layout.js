import Footer from "./Footer";
import React from "react";
import Navbar from "./NavBar";

export default function Layout(props) {
  return (
    <div className="flex flex-col bg-slate-200 min-h-screen">
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}
