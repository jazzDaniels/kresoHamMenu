import Footer from "./Footer";
import React from "react";
import Navbar from "./NavBar";
import Counter from "./Counter";
export default function Layout(props) {
  return (
    <div className="flex flex-col bg-slate-200">
      <Navbar />
      <Counter />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}
