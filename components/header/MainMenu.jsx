import Link from "next/link";

import { homeItems } from "../../data/mainMenuData";
import { isActiveLink } from "../../utils/linkActiveChecker";
import { useRouter } from "next/router";

const MainMenu = ({ style = "" }) => {
  const router = useRouter();

  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
        <li
          className={`${
            isActiveLink(homeItems[0].routePath, router.asPath) ? "current" : ""
          } `}
        >
          <Link href="/">Home</Link>
        </li>
        {/* End home page menu */}

        <li className={router.pathname === "/destinations" ? "current" : ""}>
          <Link href="/destinations">Destinations</Link>
        </li>
        <li className={router.pathname === "/tours" ? "current" : ""}>
          <Link href="/tours">Tours</Link>
        </li>
        <li className={router.pathname === "/attractions" ? "current" : ""}>
          <Link href="/attractions">Attraction-Tickets</Link>
        </li>
        {/* <li className={router.pathname === "/contact" ? "current" : ""}>
          <Link href="/contact">Contact</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default MainMenu;
