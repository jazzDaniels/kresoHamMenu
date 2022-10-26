import Link from "next/link";
const NavItem = ({ text, href, active }) => {
  return (
    <Link href={href}>
      <div className="menuItem bg-transparent h-10 align-text-bottom flex flex-col justify-center ml-1">
        <a className={`nav__item ${active ? "active" : ""}`}>{text}</a>
      </div>
    </Link>
  );
};

export default NavItem;
