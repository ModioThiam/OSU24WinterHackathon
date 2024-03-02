import React from "react";
import './Navbar.css'; 

function Navbar() {
    return(
        <>
            <div className="navigation">
                <a href="/" className="logo">
                    <img src="images/logo.png" alt="logo" />
                </a>
                <nav className="navigation-menu">
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#booklog">Book Log</a></li>
                        <li><a href="#discover">Discover</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar;
