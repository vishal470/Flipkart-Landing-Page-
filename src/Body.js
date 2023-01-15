import React from "react";
import "./Body.css";
import Banner from './Banner.png';

function Body() {
    return (
        <div className="mainComponent">
            <div className="banner">
            <img className="banner" src={Banner} alt="" />
            </div>
        </div>
    );
}

export default Body;