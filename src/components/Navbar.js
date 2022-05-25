import React from "react";

function Navbar() {

    return (
        <div className="nav">
            <div className="nav-logo"><img src="./assests/logo.png" alt="Site Logo"/></div>
            <div className="nav-items">
                <div>Home</div>
                <div>About Us</div>
                <div>FAQ</div>
                <div>Contact Us</div>
                <div>Login</div>
            </div>
        </div>
    );
}

export default Navbar;