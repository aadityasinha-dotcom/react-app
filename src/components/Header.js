import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div class="ui vertical menu">
            <div class="item">
                <Link to="/" class="header">Products</Link>
            </div>
            <div class="item">
                <Link to="/artwork" class="header">CMS Solutions</Link>
            </div>
            <div class="item">
                <Link to="/bio" class="header">Hosting</Link>
            </div>
            <div class="item">
                <Link to="/contacts" class="header">Support</Link>
            </div>
        </div>
        
    );
};

export default Header;