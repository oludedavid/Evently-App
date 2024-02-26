import Link from "next/link";
import Logo from "../logo/logo";

export default function Footer() {
  return (
    <footer
      className={`py-10 px-16 w-screen h-auto md:h-16 flex flex-row items-center justify-between`}
    >
      <Logo />
      <nav className={``}>
        <ul
          className={`flex flex-row flex-wrap items-center justify-center gap-7`}
        >
          <li>
            <Link href={`/instagram`}>
              <img width={20} height={20} src="/icons/instagram.png" />
            </Link>
          </li>
          <li>
            <Link href={`/linkedIn`}>
              <img width={20} height={20} src="/icons/linkedin.png" />
            </Link>
          </li>
          <li>
            <Link href={`/facebook`}>
              <img width={20} height={20} src="/icons/facebook.png" />
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
