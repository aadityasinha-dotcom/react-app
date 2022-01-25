import React from "react";
import { Link } from "react-router-dom";
import './App.css';

const Header = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-nav"></ul>
            <div class="ui vertical menu">
                <div class="item">
                    <Link to="/" class="header">HomePage</Link>
                </div>
                <div class="item">
                    <Link to="/artwork" class="header">Artwork</Link>
                </div>
                <div class="item">
                    <Link to="/bio" class="header">Bio</Link>
                </div>
                <div class="item">
                    <Link to="/contacts" class="header">Contacts</Link>
                </div>
            </div>
        </nav>
    );
};


export default Header;