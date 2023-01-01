import { NavLink } from "react-router-dom";
import nav from "../css/navbar.module.css";
import { QUIZ_ROUTE_PATHS } from "../Utils/Utils";

function Navbar() {
  const navLinks = ["l.", "home", "high score"];

  return (
    <>
      <nav className={nav.container}>
        <ul className={nav.list_container}>
          {navLinks.map((navLink, index) => (
            <li key={index} className={nav.list_item}>
              <NavLink
                className={nav.link}
                to={
                  navLink === "high score"
                    ? `${QUIZ_ROUTE_PATHS.highScore}`
                    : "/"
                }
              >
                {navLink}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
