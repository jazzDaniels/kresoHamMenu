import Footer from "./Footer";
import React from "react";
import Navbar from "./NavBar";
export default function Layout(props) {
  return (
    <div className="flex flex-col bg-slate-200">
      <Navbar />
      <main className="flex flex-col min-h-screen">{props.children}</main>
      <Footer />
    </div>
  );
}
