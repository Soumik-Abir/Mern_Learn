import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="menu">
        <nav className="box">
          <ul>
            <li>
              <NavLink to={"/"} className={"nav"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/About"} className={"nav"}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to={"/Contact"} className={"nav"}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to={"/Gallery"} className={"nav"}>
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to={"/Blog"} className={"nav"}>
                Blog
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Menu;
