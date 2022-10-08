import React, { useState } from "react";
import NavItem from "./NavItem";
import { FaBars, GrClose } from "react-icons/fa";
const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/o-nama" },
  { text: "Contact", href: "/kontakt" },
  { text: "Donate", href: "/doniraj" },
  { text: "Book Now", href: "/book" },
  { text: "Review Me", href: "/review" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header className="flex justify-end h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500 p-2">
      <nav className="bg-red-200">
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <FaBars />
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
