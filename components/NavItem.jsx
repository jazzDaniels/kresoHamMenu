import Link from "next/link";
const NavItem = ({ text, href, active }) => {
  return (
    <Link href={href}>
      <div className="navItemCover bg-purple-200 h-10 align-text-bottom">
        <a className={`nav__item ${active ? "active" : ""}`}>{text}</a>
      </div>
    </Link>
  );
};

export default NavItem;
