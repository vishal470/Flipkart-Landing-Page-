import React from "react";
import "./Navbar.css";
import Flipkart from './Flipkart.png';


function Navbar() {
    return (
        <div className="mainComponent">
            <div className="navbar">
                <div className="navLeft">
                    <img className="navLogo" src={Flipkart} alt="" />
                </div>

                <div className="navMiddle">
                    <input type="text" placeholder="Search for products, brands and more" />
                </div>

                <div className="navRight">
                    <button>Login</button>
                    <p><b>Become a Seller</b></p>
                    <p><b>More</b></p>
                    <p><b>Cart</b></p>
                </div>
            </div>
        </div>
    );
}

export default Navbar;