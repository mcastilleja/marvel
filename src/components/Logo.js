import React from "react";
import '../App.css';
import { NavLink } from "react-router-dom";

const Logo = () => {
    return(
        
        <NavLink to="/">
            <img className="logoMarvel" src="./logo.png" alt="Marvel API"/>
        </NavLink>
    )
};

export default Logo;