import React from "react";
import logo from "../../images/earth.png"
import "./NavBar.css"

function NavBar(){
    return(
        <div className="navbar">
            <div className="navbar--logo--container">
                <img className="logo" src={logo} alt="earth" />
                <h2 className="navbar--title">Countries Srch</h2>
            </div>
            <p className="navbar--slogan">Our world, all in one place...</p>
        </div>
    )
}

export default NavBar