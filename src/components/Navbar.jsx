import React from "react";
import logo from '../images/logo.jpg';


const Navbar = ()=>{

    return (
        <div className="nav">
            <div className="in-nav">
                <div className="menu">
                    <ul>
                        <li>About me</li>
                        <li>Portfolio</li>
                        <li>Coorporation</li>
                    </ul>
                </div>
                <div className="logo">
                    <img src={logo} alt="AK" style={{width:"4rem", borderRadius:"50%"}}/>
                </div>
                <div className="contact-me">
                    Contact me
                </div>
            </div>
        </div>
    )
}

export default Navbar;