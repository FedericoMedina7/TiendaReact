import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavLinks = (props) => {
  const { navBar__links, navBar__linksTo, navBar__linksToActive } = styles;
  const { isMobile, closeMobileMenu } = props;

  return (
    <>
      <ul className={navBar__links}>
        <li onClick={() => isMobile && closeMobileMenu()}>
          <NavLink
            to="/category/buzoycamp"
            className={({ isActive }) =>
              isActive ? navBar__linksToActive : navBar__linksTo
            }
          >
            Buzos y Camperas
          </NavLink>
        </li>
        <li onClick={() => isMobile && closeMobileMenu()}>
          <NavLink
            to="/category/remerasypant"
            className={({ isActive }) =>
              isActive ? navBar__linksToActive : navBar__linksTo
            }
          >
            Remeras y Pantalones
          </NavLink>
        </li>
        <li onClick={() => isMobile && closeMobileMenu()}>
          <NavLink
            to="/category/accs"
            className={({ isActive }) =>
              isActive ? navBar__linksToActive : navBar__linksTo
            }
          >
            Accesorios
          </NavLink>
        </li>
      </ul>
    </>
  );
};
export default NavLinks;
