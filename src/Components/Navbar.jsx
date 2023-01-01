import { NavLink } from "react-router-dom";
import nav from "../css/navbar.module.css";

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
                to={navLink === "high score" ? "high-score" : "/"}
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
