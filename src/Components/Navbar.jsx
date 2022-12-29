import { NavLink } from "react-router-dom";
import nav from "../css/navbar.module.css";

function Navbar() {
  const navLinks = ["l.", "home", "high score"];

  return (
    <>
      <nav className={nav.container}>
        <ul className={nav.list_container}>
          {navLinks.map((navLink) => (
            <>
              <li className={nav.list_item}>
                <NavLink className={nav.link} to="/">
                  {navLink}
                </NavLink>
              </li>
            </>
          ))}
          {/* <li className="">
            <NavLink to="/">L.</NavLink>
          </li>
          <li className="">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="">
            <NavLink to="/">High Score</NavLink>
          </li> */}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
