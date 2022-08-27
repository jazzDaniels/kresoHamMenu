import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
const HamburgerMenu = () => (
  <div className="relative p-2">
    <Menu
      customBurgerIcon={<HamburgerIcon />}
      width={"auto"}
      className="left-0 top-12"
    >
      <Links />
    </Menu>
  </div>
);



export const Links = () => (
  <>
    <Link href="/">
      <a className="font-bold p-4">Home</a>
    </Link>
    <Link href="/about">
      <a className="font-bold p-4">About</a>
    </Link>
  </>
);

export default HamburgerMenu;
