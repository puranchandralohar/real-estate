import React from "react";
import { Outlet, Link } from "react-router-dom";

import "./navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="navbar_container flex">
        <div className="logo">
          <h1>
            <i className="fa-solid fa-hotel" /> Estatery
          </h1>
        </div>
        <nav className="nav_links flex">
          <Link to="/" className="nav_active btn">
            Rent
          </Link>
          <Link to="">Buy</Link>
          <Link to="">Sell</Link>
          <Link to="">
            Manage Property <i className="fa-solid fa-angle-down" />
          </Link>
          <Link to="">
            Resources <i className="fa-solid fa-angle-down" />
          </Link>
          <Link to="/favrouite">Favrouite</Link>
        </nav>
        <div className="btn_groups flex">
          <Link to="" className="btn login">
            Login
          </Link>
          <Link to="" className="btn signup">
            Sign up
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};
