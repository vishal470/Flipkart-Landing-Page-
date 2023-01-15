import React from "react";
import "./Header.css";
import Offer from './Offer.png';
import Mobile from './Mobile.png';
import Electronics from './Electronics.png';
import TV from './TV.png';
import Fashion from './Fashion.png';
import Beauty from './Beauty.png';
import Home from './Home.png';
import Flight from './Flight.png';
import Grocery from './Grocery.png';


function Header() {
    return (
        <div className="mainComponent">
            <div className="header">
                <div className="1">
                    <img className="Offer" src={Offer} alt="" />
                    <p>Top Offers</p>
                </div>

                <div className="2">
                    <img className="Mobile" src={Mobile} alt="" />
                    <p>Mobiles & Tablets</p>
                </div>

                <div className="3">
                    <img className="Electronics" src={Electronics} alt="" />
                    <p>Electronics</p>
                </div>

                <div className="4">
                    <img className="TV" src={TV} alt="" />
                    <p>TVs & Appliances</p>
                </div>

                <div className="5">
                    <img className="Fashion" src={Fashion} alt="" />
                    <p>Fashion</p>
                </div>

                <div className="6">
                    <img className="Beauty" src={Beauty} alt="" />
                    <p>Beauty</p>
                </div>

                <div className="7">
                    <img className="Home" src={Home} alt="" />
                    <p>Home & Furniture</p>
                </div>

                <div className="8">
                    <img className="Flight" src={Flight} alt="" />
                    <p>Flights </p>
                </div>

                <div className="9">
                    <img className="Grocery" src={Grocery} alt="" />
                    <p>Grocery</p>
                </div>
            </div>
        </div>
    );
}

export default Header;