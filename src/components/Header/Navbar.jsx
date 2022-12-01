import React from "react";

import "./navbar.css";

export const Navbar = () => {
    return (
        <div className="navbar_container flex">
            <div className="logo">
                <h2>
                    <i class="fa-solid fa-hotel"></i> Estatery
                </h2>
            </div>
            <nav className="nav_links flex">
                <a href="" className="nav_active btn">
                    Rent
                </a>
                <a href="">Buy</a>
                <a href="">Sell</a>
                <a href="">
                    Manage Property <i class="fa-solid fa-angle-down"></i>
                </a>
                <a href="">
                    Resources <i class="fa-solid fa-angle-down"></i>
                </a>
            </nav>
            <div className="btn_groups flex">
                <a href="" className="btn login">
                    Login
                </a>
                <a href="" className="btn signup">
                    Sign up
                </a>
            </div>
        </div>
    );
};
