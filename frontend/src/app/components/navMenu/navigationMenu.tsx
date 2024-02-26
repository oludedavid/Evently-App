import Link from "next/link";
import navigationStyles from "./navigationMenu.module.css";
import Logo from "../logo/logo";

export default function NavBar() {
  return (
    <nav
      className={`invisible md:visible fixed top-0 right-0 w-screen h-screen md:h-20 flex flex-col md:flex-row items-center justify-between p-8 md:p-2 md:justify-around z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30  border-gray-200`}
    >
      <Logo />
      <ul
        className={`${navigationStyles.navItemsContainer} flex flex-col items-center justify-center md:flex-row gap-10 `}
      >
        <li className={`${navigationStyles.navItems} md:pr-2`}>
          <Link className="text-xl" href={`/#features`}>
            Features
          </Link>
        </li>
        <li className={`${navigationStyles.navItems}`}>
          <Link className="text-xl" href={`/#benefits`}>
            Benefits
          </Link>
        </li>
      </ul>
      <Link
        href={`/contactUs`}
        className={`${navigationStyles.navItems} text-xl`}
      >
        Contact Us
      </Link>
    </nav>
  );
}
